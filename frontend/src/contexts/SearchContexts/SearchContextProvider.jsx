import React, { useContext, useReducer } from 'react'
import SearchContext from './SearchContext';

const initialState = {
    searchValue: ''
};

const reducerFn = (state, action) => {
    switch (action.type) {
        case 'search':
            return {
                ...state,
                searchValue: action.searchValue
            }
        default:
            return state;
    }
}

const SearchContextProvider = (props) => {
    const [search, setSearch] = useReducer(reducerFn, initialState);

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContextProvider