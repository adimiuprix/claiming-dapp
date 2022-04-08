import React from 'react';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ClaimFields } from '../interface';


const ClaimField: React.FC<ClaimFields> = (props) => {
    return (
        <Box>
            <Typography variant="body2" sx={{marginTop: 1.5}}>
                {props.title}
            </Typography>
            <Typography variant="h6" component="p" gutterBottom>
                {props.fieldValue}
            </Typography>
            <Divider variant="middle" sx={{borderColor: '#edc681', opacity: 0.2}} />
        </Box>
    )
}

export default ClaimField