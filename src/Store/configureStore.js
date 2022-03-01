import { createStore, combineReducers } from 'redux';
import modalReducer from '../Reducers/ModalReducer';
import transactionReducer from '../Reducers/TransactionReducer';
const rootReducer = combineReducers(
    { modalReducer: modalReducer, transactionReducer: transactionReducer }
);
const configureStore = () => {
    return createStore(rootReducer);
}
export default configureStore;
