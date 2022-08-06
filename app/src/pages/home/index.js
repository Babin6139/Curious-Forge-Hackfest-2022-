import { AppBar, Box, Container, Divider, Grid, ImageList, ImageListItem, Typography } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer.js/footer';

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
      <Divider/>
      <div style={{
        border:'1px solid white',
        marginTop:'2rem',
        marginBottom:'2rem'
      }}></div>
      <Footer/>
    </Container>
  )
};

export default Home;
