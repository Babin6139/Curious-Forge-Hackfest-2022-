import { TableFooter } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Appbar from '../Appbar';

const Layout = () => {
  return (
    <Container maxWidth="100%" disableGutters>
      <Box>
        <Appbar />
      </Box>
      <Box>
        <Outlet />
      </Box>
      <Box></Box>
    </Container>
  );
};

export default Layout;
