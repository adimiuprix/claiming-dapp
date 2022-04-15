import React from 'react';
import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ClaimFields } from '../interface';
import { useTranslation } from 'react-i18next';


const ClaimField: React.FC<ClaimFields> = (props) => {

    const { t } = useTranslation();

    return (
        <Box>
            <Typography variant="body2" sx={{marginTop: 1.5}}>
                {t(props.title)}
            </Typography>
            <Typography variant="h6" gutterBottom>
                {props.fieldValue}
            </Typography>
            <Divider variant="middle" sx={{borderColor: 'primary.main', opacity: 0.2}} />
        </Box>
    )
}

export default ClaimField