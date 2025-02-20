import { DatePicker, DateTimePicker } from '@mui/x-date-pickers'
import React from 'react'

const DateFilter = (props) => {
    const { type, label, onChange, filter } = props;
    return (
        <DateTimePicker
            onChange={(val, ctx) => { onChange(val, type) }}
            label={label}
            value={filter.timestamp[type]}
            slotProps={{ textField: { size: 'small' } }}
        />
    )
}

export default DateFilter