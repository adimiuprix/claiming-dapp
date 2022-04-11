import React, {useState} from 'react'
import { Box } from '@mui/system'
import Card from '@mui/material/Card';
import { Button, CardContent } from '@mui/material';
import {fields} from '../data/fields';
import ClaimField from './ClaimField';

const ClaimBox: React.FC = () => {

    return (
        <Box sx={{marginTop: 4, display: 'flex', justifyContent: 'center'}}>
            <Card elevation={3} sx={{minWidth: 'boxWidth.main', py: 3, px: 2, bgcolor: 'primary.bgcolor'}}>
                <CardContent sx={{display: 'flex', flexDirection: 'column', 'justifyContent': 'space-evenly'}}>

                    {fields.map((field) => {
                        return <ClaimField {...field} key={field.id} /> //use spread operator instead of field={field}
                    })}

                </CardContent>

                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="outlined" color="primary" sx={{marginTop: 2, width: '80%'}}>
                        Claim
                    </Button>
                </Box>
            </Card>
        </Box>
    )
}

export default ClaimBox

