import { Box, Chip, Paper, Typography } from '@mui/material'
import React from 'react';
import dayjs from 'dayjs';

const LogCard = (props) => {
    const { log } = props;
    const dateType = new Date(log.timestamp).toString();
    return (
        <Paper elevation={1} sx={{ display: 'flex', flexDirection: 'column', px: 2, py: 1, border: '1px solid rgba(0,0,0,0.5)' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 3, rowGap: 1, flexWrap: 'wrap' }}>
                <Chip label={log.level} sx={{ width: 'fit-content' }} />
                <Typography fontSize={'small'}>{dayjs(dateType).format('MM-DD-YYYY HH:mm:ss')}</Typography>
                <Typography fontSize={'small'}>resourceId: {log.resourceId}</Typography>
                <Typography fontSize={'small'}>traceId: {log.traceId}</Typography>
                <Typography fontSize={'small'}>spanId: {log.spanId}</Typography>
                <Typography fontSize={'small'}>commit: {log.commit}</Typography>
                <Typography fontSize={'small'}>parentResourceId: {log.metadata.parentResourceId}</Typography>
            </Box>
            <Typography sx={{ display: 'flex', flexWrap: 'wrap', ml: 1 }}>{log.message}</Typography>
        </Paper>
    )
}

export default LogCard