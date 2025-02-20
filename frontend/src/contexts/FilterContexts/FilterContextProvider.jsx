import React, { useReducer } from 'react'
import FilterContext from './FilterContext'

const initialState = {
    level: false,
    message: false,
    resourceId: false,
    traceId: false,
    spanId: false,
    commit: false,
    parentResourceId: false,
    timestamp: {
        gte: null,
        lte: null
    }
};

const reducerFn = (state, action) => {
    if (action?.type === 'reset') {
        return initialState;
    }
    return { ...state, [action.name]: action.value }
}

const FilterContextProvider = (props) => {
    const [filter, setFilter] = useReducer(reducerFn, initialState);
    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {props.children}
        </FilterContext.Provider>
    )
}

export default FilterContextProvider