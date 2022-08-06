const anchor = require("@project-serum/anchor");
const { assert } = require("chai");

describe("test-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider=anchor.AnchorProvider.env();
  const testWallet=anchor.web3.Keypair.generate();
  const program = anchor.workspace.TestSolana;
  const wallet=provider.wallet;
  let testAccountPda;
  let testAccountPdaBump;
  const testNftTitle = "Alpha";
  const testNftSymbol = "Alpha";
  const testNftUri = "https://raw.githubusercontent.com/Coding-and-Crypto/Rust-Solana-Tutorial/master/nfts/mint-nft/assets/example.json";

  it("Prepare a new user wallet for testing", async () => {
    // Airdrop to wallet
    await provider.connection.confirmTransaction(
        await provider.connection.requestAirdrop(testWallet.publicKey, 2 * anchor.web3.LAMPORTS_PER_SOL)
    );
    console.log(`Test Wallet Pubkey: ${testWallet.publicKey}`);
    // Derive Solana Twitter account PDA
    [testAccountPda, testAccountPdaBump] = await anchor.web3.PublicKey.findProgramAddress(
        [
            testWallet.publicKey.toBuffer(),
            Buffer.from("_profile"),
        ],
        program.programId,
    );
});
  it("It creates account!", async () => {
    // Add your test here.
    console.log(testAccountPda);
    const tx = await program.methods.createAccount("Bob","9861234556").accounts(
      {
        userAccount:testAccountPda,
        authority:testWallet.publicKey,
        systemProgram:anchor.web3.SystemProgram.programId
      },
    ).signers(
      [testWallet]
    ).rpc();
    console.log("Your transaction signature", tx);
    let data=await program.account.userData.fetch(testAccountPda);
    
    assert(data.name=="Bob");
  });
  const TOKEN_METADATA_PROGRAM_ID = new anchor.web3.PublicKey(
    "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
  );


  it("Mint!", async () => {

    // Derive the mint address and the associated token account address
    console.log(wallet);
    console.log(testWallet);
    const mintKeypair = anchor.web3.Keypair.generate();
    const tokenAddress = await anchor.utils.token.associatedAddress({
      mint: mintKeypair.publicKey,
      owner: wallet.publicKey
    });
    console.log(`New token: ${mintKeypair.publicKey}`);

    // Derive the metadata and master edition addresses

    const metadataAddress = (await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mintKeypair.publicKey.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    ))[0];
    console.log("Metadata initialized");
    const masterEditionAddress = (await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mintKeypair.publicKey.toBuffer(),
        Buffer.from("edition"),
      ],
      TOKEN_METADATA_PROGRAM_ID
    ))[0];
    console.log("Master edition metadata initialized");

    // Transact with the "mint" function in our on-chain program
    
    await program.methods.mintNft(
      testNftTitle, testNftSymbol, testNftUri
    )
    .accounts({
      masterEdition: masterEditionAddress,
      metadata: metadataAddress,
      mint: mintKeypair.publicKey,
      tokenAccount: tokenAddress,
      mintAuthority: wallet.publicKey,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
    })
    .signers([mintKeypair])
    .rpc();
  });
});
