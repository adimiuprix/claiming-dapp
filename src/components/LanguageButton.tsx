import { Button } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import LanguageIcon from '@mui/icons-material/Language';

import {Lang as IProps} from '../interface'

// interface IProps {
//     lang: string,
//     changeLanguage: void
// }


const LanguageButton: React.FC<IProps> = ({lang, changeLanguage}) => {
    return (
        <Box>
            <Button variant="outlined" startIcon={<LanguageIcon />} onClick={changeLanguage} sx={{position: 'fixed', top: 30, right: 30}}>
            {lang}
          </Button>
        </Box>
    )
}

export default LanguageButton
