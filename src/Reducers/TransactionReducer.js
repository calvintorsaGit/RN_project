import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';
const SET_LIST_TRANSACTION = 'SET_LIST_TRANSACTION';
const SET_DETAIL_TRANSACTION = 'SET_DETAIL_TRANSACTION';
const SET_FILTERED_TRANSACTION = 'SET_FILTERED_TRANSACTION'

// Actions
const setListTransaction = createAction(SET_LIST_TRANSACTION);
const setDetailTransaction = createAction(SET_DETAIL_TRANSACTION);
const setFilterTransaction = createAction(SET_FILTERED_TRANSACTION);
export const actions = {
    setListTransaction,
    setDetailTransaction,
    setFilterTransaction
};

// Reducer
export const initialState = {
    arrayDataTransaction: [],
    filteredDataTransaction: [],
    onSearch: false,
    detailTransaction: undefined
};

const setListTransactionHandler = (state, action) => ({
    ...state,
    arrayDataTransaction: [...action.payload]
});

const setFilteredDataTransaction = (state, action) => ({
    ...state,
    onSearch: action.payload.onSearch,
    filteredDataTransaction: [...action.payload.searchResult]
});

const setDetailTransactionHandler = (state, action) => ({
    ...state,
    detailTransaction: action.payload
});

export default typeToReducer({
    [SET_LIST_TRANSACTION]: setListTransactionHandler,
    [SET_FILTERED_TRANSACTION]: setFilteredDataTransaction,
    [SET_DETAIL_TRANSACTION]: setDetailTransactionHandler,
}, initialState);
