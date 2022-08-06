import { TableFooter } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import AppBarWithProvider from '../Appbar';
import Footer from '../footer.js/footer';

const Layout = () => {
  return (
    <Container maxWidth="100%" disableGutters>
      <Box>
        <AppBarWithProvider />
      </Box>
      <Box>
        <Outlet />
      </Box>
      <div style={{
        border:'1px solid white',
        marginTop:'2rem',
        marginBottom:'2rem'
      }}></div>
      <Box>
        <Footer/>
      </Box>
    </Container>
  );
};

export default Layout;
