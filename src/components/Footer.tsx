import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {

    const { t } = useTranslation();

    return (
        <Box sx={{my: 5, display: 'flex', justifyContent: 'center'}}>
            <Typography variant="body2" component="h5" color="white">
                {t('footer.copyright')}<Typography color="primary" sx={{display: 'inline'}}>{t('footer.synapse')}</Typography> {t('footer.version')}
            </Typography>
        </Box>
    )
}

export default Footer
