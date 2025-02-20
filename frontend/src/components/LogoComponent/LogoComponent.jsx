import { Box, Typography } from '@mui/material'
import React from 'react'
import FitbitIcon from '@mui/icons-material/Fitbit';

const LogoComponent = () => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
            <FitbitIcon fontSize='large' sx={{ color: 'gray' }} />
            <Typography fontSize={'large'} sx={{ whiteSpace: 'nowrap' }} fontWeight={800} color={'gray'}>
                Query Interface
            </Typography>
        </Box>
    )
}

export default LogoComponent