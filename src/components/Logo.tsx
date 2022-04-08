import React from 'react';
import logo from '../img/synapse-logo.png';
import { Box } from '@mui/system';

const Logo: React.FC = () => {
    return (
        <Box sx={{marginTop: 5, display: 'flex', justifyContent: 'center'}}>
            <img src={logo} alt="logo" width='200' />
        </Box>
    )
}

export default Logo