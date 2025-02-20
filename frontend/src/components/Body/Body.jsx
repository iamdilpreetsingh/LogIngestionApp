import { Box } from '@mui/material'
import React, { useState } from 'react'
import Filters from '../Filters/Filters'
import FilterRestService from '../../services/FilterRestService'
import LogsList from '../LogsList/LogsList'

const Body = () => {
    const [data, setData] = useState({ loading: false, value: [] });
    const getResults = async (search, filter) => {
        if (search.searchValue && search.searchValue.length > 0) {
            const res = await FilterRestService.getSearchResult(filter, search.searchValue);
            setData(prev => ({
                ...prev,
                value: res.search
            }))
        }
    }
    return (
        <Box>
            <Filters onSearch={getResults} />
            <LogsList data={data.value} />
        </Box>
    )
}

export default Body