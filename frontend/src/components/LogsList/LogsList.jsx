import { Stack } from '@mui/material';
import React from 'react'
import LogCard from './LogCard';

const LogsList = (props) => {

    const { data } = props;
    return (
        <Stack sx={{ position: 'relative' }}>
            {
                data.map(log => {
                    return <LogCard key={log._id} log={log} />
                })
            }
        </Stack>
    )
}

export default LogsList