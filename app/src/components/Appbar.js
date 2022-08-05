import React from 'react';
import {AppBar, Container, Typography} from '@mui/material'
function Appbar(props) {
    return (
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Typography>
                    Land Management
                </Typography>
            </Container>
        </AppBar> 
    );
}

export default Appbar;