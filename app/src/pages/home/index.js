import { AccountBalanceWalletOutlined, ViewStreamOutlined } from '@mui/icons-material';
import { Box, Button, Card, CardContent, CardHeader, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import './style.css'

const Home = () => {
  return(
    <Container style={{paddingTop:'2rem'}} disableGutters>
      <Grid container spacing={2} columns={12}>
        <Grid item xs={6}>
          <Box component={'div'} sx={{padding:'1rem', color:'#FFFFFF', }}>
            <Typography variant='h2' sx={{
              fontWeight:'800',
              letterSpacing:'2px'
            }}>
              Safehouse 
            </Typography>
            <Typography variant='h2' sx={{
              paddingTop:'1rem',
              fontWeight:'800',
              letterSpacing:'2px',
              
            }}>
            of Your Assets 
            </Typography>
          </Box>
          <Box sx={{display:'flex', flexDirection:'column',marginTop:'3rem',color:'#FFFFFF',}}>
          <Typography variant='div' sx={{
            fontSize:'1.5rem',
            letterSpacing:'.08rem',
            fontWeight:'500'
          }}>
            We are dedicated to provide a safe platform 
            </Typography>
          <Typography variant='div' sx={{
            fontSize:'1.5rem',
            marginTop:'4px',
            letterSpacing:'.08rem',
            fontWeight:'500'

          }}>
            for registering and transforming your assets. 
            </Typography>
          </Box>
          <Box sx={{marginTop:'2rem'}}>
            <Button className="get-started-btn">Get Started</Button>
          </Box>
        </Grid>
        <Grid item xs={6} sx={{display:{xs:'none', md:'flex'}}}>
              <img src='https://cdn.landsearch.com/modules/home/img/land-sales.png' 
                  style={{
                    width:'500px', 
                    height:'500px'
                  }} 
                  alt="assets" 
                  loading='lazy'/>
        </Grid>
      </Grid>
      <Box sx={{display:'flex', alignItems:'center', flexDirection:'column',marginTop:'3rem',color:'#FFFFFF',}}>
          <Typography variant='div' sx={{
            fontSize:'1rem',
            letterSpacing:'.08rem',
          }}>
            Asset House is based on NFT protocol on
            <img src='https://zebec.io/img/solanaLogo.png' style={{marginLeft:'15px'}} alt='solana'/>
            . Asset House is enabling composable transfer of
            assets
            </Typography>
          <Typography variant='div' sx={{
            fontSize:'1rem',
            letterSpacing:'.08rem',
          }}>
            collaborating with the government. Asset House is customizable multi-sig on Solana.
            </Typography>
      </Box>
      <Typography align='center' variant="h4" sx={{color:'white', marginTop:'8rem', marginBottom:'5rem'}}>Easy Streaming</Typography> 
      <Box sx={{background:'rgba(22, 22, 22, 1)', borderRadius:'10px'}}>
        <Grid container spacing={2} columns={12} padding="2rem">
          <Grid item xs={6}>
            <Card sx={{background:'rgba(35, 35, 35, 1)', borderRadius:'10px'}}>
              <CardHeader avatar={<AccountBalanceWalletOutlined style={{color:'white', height:'4rem', width:'4rem'}}/>}/>
              <CardContent>
                <Typography variant='h5' sx={{color:'white'}}>
                  Connect Wallet
                </Typography>
                <Typography variant='body1' sx={{color:'white', opacity:'.8', marginTop:'1rem'}}>
                Connect to Asset House using your SOL based wallet.                
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
          <Card sx={{background:'rgba(35, 35, 35, 1)', borderRadius:'10px'}}>
              <CardHeader avatar={<ViewStreamOutlined style={{color:'white', height:'4rem', width:'4rem'}}/>}/>
              <CardContent>
                <Typography variant='h5' sx={{color:'white'}}>
                  Start Streaming
                </Typography>
                <Typography variant='body1' sx={{color:'white', opacity:'.8', marginTop:'1rem'}}>
                Enter the recipient wallet address and start streaming the money.                
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          
        </Grid>
      </Box>
    </Container>
  )
};

export default Home;
