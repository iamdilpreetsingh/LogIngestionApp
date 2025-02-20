import { Box, Button, Paper, Typography } from '@mui/material'
import React, { useContext } from 'react'
import FilterCard from './FilterCard'
import DateFilter from './DateFilter'
import FilterContext from '../../contexts/FilterContexts/FilterContext'
import FilterRestService from '../../services/FilterRestService'
import SearchContext from '../../Contexts/SearchContexts/SearchContext'

const Filters = (props) => {

    const { onSearch } = props;

    const FilterType = [
        'level',
        'message',
        'resourceId',
        'traceId',
        'spanId',
        'commit',
        'parentResourceId'
    ];

    const { filter, setFilter } = useContext(FilterContext);
    const { search, setSearch } = useContext(SearchContext);

    const clickHandler = (filterType) => {
        setFilter({ name: filterType, value: !filter[filterType] });
    }

    const dateHandler = (val, type) => {
        setFilter({ name: 'timestamp', value: { ...filter.timestamp, [type]: val } })
    }

    const resetHandler = () => {
        setFilter({ type: 'reset' });
    }

    const getResults = () => {
        onSearch(search, filter);
    }

    return (
        <Paper
            elevation={0}
            variant='outlined'
            sx={{ backgroundColor: 'white', zIndex: 50, position: 'sticky', p: 2, left: 0, top: 70, width: '100vw' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', columnGap: 2, rowGap: 1 }}>
                <Box >
                    <Typography ml={1}>Filters</Typography>
                </Box>
                <Box sx={{ display: 'flex', columnGap: 2, rowGap: 1, flexWrap: 'wrap' }}>
                    <DateFilter filter={filter} label={'Start time'} type={'gte'} onChange={dateHandler} />
                    <DateFilter filter={filter} label={'End time'} type={'lte'} onChange={dateHandler} />
                    <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 1 }}>
                        <Button onClick={getResults} variant={'contained'} size='small'>Search</Button>
                        <Button size='small' onClick={resetHandler} variant='contained'>Reset filters</Button>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', columnGap: 2, rowGap: 1, flexWrap: 'wrap' }}>
                    {
                        FilterType.map((fil) => {
                            return (<FilterCard clickHandler={clickHandler} filter={filter} filterType={fil} key={fil} />)
                        })
                    }
                </Box>
            </Box>
        </Paper>
    )
}

export default Filters