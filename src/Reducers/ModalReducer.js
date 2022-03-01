/* Reducer for modal filter and sort
* store modal show status and selected filter
* */

import { createAction } from 'redux-actions';
import typeToReducer from 'type-to-reducer';
import {constants} from '../Constants/constants';
const SHOW_MODAL = 'SHOW_MODAL';
const SELECT_FILTER = 'SELECT_FILTER';

// Actions
const setShowModal = createAction(SHOW_MODAL);
const setSelectFilter = createAction(SELECT_FILTER);
export const actions = {
    setShowModal,
    setSelectFilter
};

// Reducer
export const initialState = {
    isShowModal: false,
    selectedSortFilter: constants.RADIO_OPTION.DEFAULT
};

const setShowModalHandler = (state, action) => ({
    ...state,
    isShowModal: action.payload
});

const setSelectedSortFilter = (state, action) => ({
    ...state,
    selectedSortFilter: action.payload,
    isShowModal: false
});

export default typeToReducer({
    [SHOW_MODAL]: setShowModalHandler,
    [SELECT_FILTER]: setSelectedSortFilter,
}, initialState);
