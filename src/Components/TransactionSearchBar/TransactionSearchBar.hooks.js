import {actions as modalActions} from "../../Reducers/ModalReducer";
import {actions as transactionAction} from "../../Reducers/TransactionReducer";
import {useDispatch, useSelector} from "react-redux";
import {filterTransaction} from "../../Utils/transaction.utils"

const transactionSearchBarHooks = () => {
    const dispatch = useDispatch();
    const setShowModalReducer = (payload) => dispatch(modalActions.setShowModal(payload));
    const setSearchResult = (payload) => dispatch(transactionAction.setFilterTransaction(payload));
    const selectedSortFilter = useSelector(state => state.modalReducer.selectedSortFilter);
    const listTransaction = useSelector(state => state.transactionReducer.arrayDataTransaction);

    const searchTransaction = (searchInputVal) => {
        if(searchInputVal === ""){
            setSearchResult({onSearch:false, searchResult: []});
        }else {
            const searchResult = filterTransaction(listTransaction, searchInputVal);
            setSearchResult({onSearch:true, searchResult: searchResult});
        }
    }

    return {
        selectedSortFilter,
        setShowModalReducer,
        searchTransaction
    };
};

export default transactionSearchBarHooks;
