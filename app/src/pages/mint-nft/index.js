import {
  AnchorProvider,
  Program, web3,utils
} from '@project-serum/anchor';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import React from 'react'
import idl from '../home/idl.json'
import "./index.css"
import { useNavigate } from 'react-router-dom';


const wallets=[new PhantomWalletAdapter()]
const Mint=()=>{
  const opts = {
    preflightCommitment: "processed"
  }
  const [nameNft, setnameNft] = React.useState('');
  const [symbolNft, setsymbolNft] = React.useState('');
  const programID = new PublicKey(idl.metadata.address);
  
  const wallet= useWallet()
const navigate=useNavigate();

async function getProvider(){
  /* create the provider and return it to the caller */
  /* network set to local network for now */
  const network = "https://api.devnet.solana.com";
  const connection = new Connection(network, opts.preflightCommitment);

  const provider = new AnchorProvider(
    connection, wallet, opts.preflightCommitment,
  );
  return provider;
}

  async function Mint(){
    const testNftUri = "https://raw.githubusercontent.com/Babin6139/Curious-Forge-Hackfest-2022-/main/app/src/nftDetail.json";
    const provider= await getProvider();
    const program = new Program(idl, programID, provider);
    const TOKEN_METADATA_PROGRAM_ID = new web3.PublicKey(
      "metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s"
    );
    const mintAccountKey=web3.Keypair.generate();
    try{
    const tokenAddress = await utils.token.associatedAddress({
      mint: mintAccountKey.publicKey,
      owner: wallet.publicKey
    });
    const metadataAddress = (await web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mintAccountKey.publicKey.toBuffer(),
      ],
      TOKEN_METADATA_PROGRAM_ID
    ))[0];

    const masterEditionAddress = (await web3.PublicKey.findProgramAddress(
      [
        Buffer.from("metadata"),
        TOKEN_METADATA_PROGRAM_ID.toBuffer(),
        mintAccountKey.publicKey.toBuffer(),
        Buffer.from("edition"),
      ],
      TOKEN_METADATA_PROGRAM_ID
    ))[0];
    console.log(masterEditionAddress,metadataAddress);
    console.log(mintAccountKey.publicKey,tokenAddress)
    await program.methods.mintNft(
      nameNft, symbolNft, testNftUri
    )
    .accounts({
      masterEdition: masterEditionAddress,
      metadata: metadataAddress,
      mint: mintAccountKey.publicKey,
      tokenAccount: tokenAddress,
      mintAuthority: wallet.publicKey,
      tokenMetadataProgram: TOKEN_METADATA_PROGRAM_ID,
    })
    .signers([mintAccountKey])
    .rpc();
    navigate("/dashboard")
  }
    catch(e){
      console.log(e);
    }
  }
  return (
      <div className='mintnft'>
        <div className='mintnft_form'>
          <h2>Create your land NFT</h2>
            <input type="text" value={nameNft} onChange={(e)=>setnameNft(e.target.value)} placeholder='Enter the name of NFT'></input>
            <input type="text" value={symbolNft} onChange={(e)=>setsymbolNft(e.target.value)} placeholder='Enter the symbol'></input>
            <input type="file"></input>
            <input type="submit" onClick={(e)=>Mint()} value='Mint Nft'></input>
        </div>
    </div>
    
  );
};

const MintNft=()=>{
  return(<ConnectionProvider endpoint="https://api.devnet.solana.com">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Mint/>
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>);
}
export default MintNft;