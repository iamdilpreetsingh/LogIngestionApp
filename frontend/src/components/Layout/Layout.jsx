import { Box } from '@mui/material'
import React from 'react'
import Headers from '../Headers/Headers'

const Layout = (props) => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Headers />
            {props.children}
        </Box>
    )
}

export default Layout