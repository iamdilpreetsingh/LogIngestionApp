import { Box, Typography } from '@mui/material'
import React from 'react'
const FilterCard = (props) => {
    const { filterType, filter, clickHandler } = props;
    return (
        <Box
            onClick={() => { clickHandler(filterType) }}
            sx={{
                p: 1,
                border: '1px solid black',
                cursor: 'pointer',
                borderRadius: '12px',
                color: filter[filterType] ? 'white' : 'black',
                backgroundColor: filter[filterType] ? 'black' : 'white',
            }} >
            <Typography fontSize={'small'}>
                {filterType}
            </Typography>
        </Box>
    )
}

export default FilterCard