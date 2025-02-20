import React from 'react'
import { Box } from '@mui/material';
import LogoComponent from '../LogoComponent/LogoComponent';
import SearchComponent from '../Search/SearchComponent';

const Headers = () => {
    return (
        <Box sx={{
            position: 'sticky', width: '100vw', top: 0, left: 0, right: 0, py: 2, px: 2,
            backgroundColor: 'white',
            boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)',
            zIndex: 100
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', ...{ columnGap: { xs: 1, sm: 2, md: 6 } } }}>
                <LogoComponent />
                <SearchComponent />
            </Box>
        </Box>
    )
}

export default Headers