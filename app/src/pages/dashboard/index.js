import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Cards from './../../components/cards.js/Cards'
import assetData from './../../static/assetCards'

const Dashboard = () => {
    const displayCards= assetData.map(el=><Grid item xs={5}><Cards cardData={el}/></Grid>)
    return (
        <Container sx={{padding:'1rem'}}>
        <Typography variant='h4' sx={{color:'white', marginBottom:'2rem'}}>My Assets</Typography>
        <Grid container wrap='wrap' spacing={4} columns={16}>
            {displayCards}
        </Grid>
        </Container>
    );
};

export default Dashboard;