const anchor = require("@project-serum/anchor");
const { assert } = require("chai");

describe("test-solana", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());
  const provider=anchor.AnchorProvider.env();
  it("Is initialized!", async () => {
    // Add your test here.
    const program = anchor.workspace.TestSolana;
    const accounts=anchor.web3.Keypair.generate()
    const tx = await program.methods.createAccount("Bob","9861234556").accounts(
      {
        userAccount:accounts.publicKey,
        user:provider.wallet.publicKey,
        systemProgram:anchor.web3.SystemProgram.programId
      },
    ).signers(
      [accounts]
    ).rpc();
    console.log("Your transaction signature", tx);
    let data=await program.account.userData.fetch(accounts.publicKey);
    
    assert(data.name=="Bob");
  });
});
