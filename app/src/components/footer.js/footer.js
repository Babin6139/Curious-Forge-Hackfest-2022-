import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { LocationCityOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const Footer = () => {
    const date=new Date()
    return (
        <Grid container spacing={2} columns={16}>
            <Grid item xs={4} sx={{display:'flex',color:'#FFFFFF'}}>
                <Box sx={{display:'flex'}}>
                <LocationCityOutlined sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,alignItems:'center', justifySelf:'center', width:'2rem', height:'2rem'}} />
                <Typography 
                    sx={{
                        fontWeight:'400',
                        fontSize:'1.5rem'
                    }}>
                    Asset Bank
                </Typography>
                </Box>
            </Grid>
            <Grid item xs={4} sx={{dipslay:'flex'}}>
                <Typography variant='h6' sx={{color:'white'}}>Product</Typography>
                <Typography variant='body1'>
                    <a style={{textDecoration:'none', color:'white', opacity:'.6', cursor:'pointer'}} href='https://github.com/Babin6139/Curious-Forge-Hackfest-2022-'>
                        Github</a>
                        </Typography>
            </Grid>
            <Grid item xs={4} sx={{dipslay:'flex'}}>
                <Typography variant='h6' sx={{color:'white'}}>Company</Typography>
                <Typography variant='body1'>
                    <Link style={{textDecoration:'none', color:'white', opacity:'.6', cursor:'pointer'}} to='/about-us'>
                        About Us
                    </Link>
                </Typography>
                <Typography sx={{color:'white', opacity:'.6',}}>
                    Privacy
                </Typography>
            </Grid>
            <Grid item xs={4} sx={{dipslay:'flex'}}>
                <Typography variant='h6' sx={{color:'white'}}>Learn</Typography>
                <Typography variant='body1'>
                    <Link style={{textDecoration:'none', color:'white', opacity:'.6', cursor:'pointer'}} to='/about-us'>
                        What is Asset Bank?
                    </Link>
                </Typography>
                <Typography sx={{color:'white', opacity:'.6',}}>
                <a style={{textDecoration:'none', color:'white', opacity:'.6', cursor:'pointer'}} href='https://solana.com/'>
                What is Solana?</a>

                </Typography>
            </Grid>
            <Typography align='center' sx={{width:'100%',color:'white', opacity:'.8', marginTop:'2rem', marginBottom:'2rem'}}>&copy; {date.getFullYear()} Asset Bank. All rights reserved </Typography>

        </Grid>
    );
};

export default Footer;