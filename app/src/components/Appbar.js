import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import {LocationCityRounded} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './style.css';

//Solana wallet
import { useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import {
  AnchorProvider,
  Program, web3
} from '@project-serum/anchor';
import idl from './../pages/home/idl.json'
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { useWallet, WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');

const wallets = [
  /* view list of available wallets at https://github.com/solana-labs/wallet-adapter#wallets */
  new PhantomWalletAdapter()
]
const { SystemProgram, Keypair } = web3;
/* create an account  */
const opts = {
  preflightCommitment: "processed"
}
const programID = new PublicKey(idl.metadata.address);


const pages = ['Dashboard','Register', 'Transfer'];
const settings = ['Profile', 'Dashboard', 'Logout'];
const Appbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  //Solana programs
  const wallet= useWallet()
  const baseAccount = Keypair.generate();


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

  async function createAccount(){
    const provider= await getProvider()
    const program = new Program(idl, programID, provider);
    
    try{
      const [testAccountPda, testAccountPdaBump] = await web3.PublicKey.findProgramAddress(
        [
            wallet.publicKey.toBuffer(),
            Buffer.from("_profile"),
        ],
        program.programId,
    );
    // await program.rpc.createAccount("Bob","9861234556",{
    // accounts:{
    //     userAccount:testAccountPda,
    //     authority:wallet.publicKey,
    //     systemProgram:SystemProgram.programId
    //   },
    //   signers:[]
    // },
    // );
      // await program.methods.createAccount({
      //   accounts:{
      //     userAccount:testAccountPda,
      //     authority:provider.wallet.publicKey,
      //     SystemProgram:SystemProgram.programId
      //   },
      //   signers:[baseAccount],
      //   args:{
      //     name:'Ankit',
      //     phoneNo:'9876543210'
      //   }
      // }).rpc()

      const account=await program.account.userData.fetch(testAccountPda);
      console.log(`My name is : ${account.name} and ${account.phoneNo}`);

    }catch(err){
      console.log(err);
    }


  }

  return (
    <AppBar className='appbar' position="static" sx={{background:'#1F2521'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <LocationCityRounded sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Link to={'/'} style={{color:'#FFFFFF',textDecoration:'none'}}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Asset Bank
          </Typography>
          </Link>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page.toLowerCase()}`} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                  {page}
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocationCityRounded sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
           Asset Bank
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
              <Link to={`/${page.toLowerCase()}`} style={{textDecoration:'none', color:'white', cursor:'pointer'}}>
                {page}
              </Link>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <WalletMultiButton/> 
            {
              wallet.connected && <Button onClick={createAccount}>Create Account</Button>
            }
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

/* wallet configuration as specified here: https://github.com/solana-labs/wallet-adapter#setup */
const AppBarWithProvider = () => (
  <ConnectionProvider endpoint="https://api.devnet.solana.com">
    <WalletProvider wallets={wallets} autoConnect>
      <WalletModalProvider>
        <Appbar />
      </WalletModalProvider>
    </WalletProvider>
  </ConnectionProvider>
)
export default AppBarWithProvider;
