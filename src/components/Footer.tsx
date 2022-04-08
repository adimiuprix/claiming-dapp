import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const Footer: React.FC = () => {
    return (
        <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="body2" component="h5" color="white">
                Copyright © <Typography color="primary" sx={{display: 'inline'}}>synapse.network</Typography> 2021 v1.1
            </Typography>
        </Box>
    )
}

export default Footer
