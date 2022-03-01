import {actions as modalActions} from "../../Reducers/ModalReducer";
import {actions as transactionActions} from "../../Reducers/TransactionReducer";
import {dynamicSort} from "../../Utils/transaction.utils"
import { useDispatch, useSelector } from "react-redux";
import {constants} from "../../Constants/constants";
const {RADIO_OPTION} = constants;

const ModalFilterHooks = (props) => {
    const isShowModal = useSelector(state => state.modalReducer.isShowModal);
    const selectedFilter = useSelector(state => state.modalReducer.selectedSortFilter)

    const transactionReducer = useSelector(state => state.transactionReducer);
    const arrayDataTransaction = transactionReducer.arrayDataTransaction;
    const filteredDataTransaction = transactionReducer.filteredDataTransaction;
    const onSearch = transactionReducer.onSearch;
    const transactionList = onSearch ? filteredDataTransaction : arrayDataTransaction;

    const dispatch = useDispatch();
    const setShowModalReducer = (payload) => dispatch(modalActions.setShowModal(payload));

    const dispatchSortFilter = (sort) => {
        const arr = transactionList.sort(sort);
        dispatch(onSearch ?
            transactionActions.setFilterTransaction({onSearch:true, searchResult: arr}) :
            transactionActions.setListTransaction(arr));
    }

    const setFilterSort = (item) => {
        switch (item.key){
            case RADIO_OPTION.DEFAULT.key:

                break;
            case RADIO_OPTION.SORT_DATE.key:
                dispatchSortFilter(dynamicSort("-timestamp"));
                break;
            case RADIO_OPTION.SORT_DATE_REVERSE.key:
                dispatchSortFilter(dynamicSort("timestamp"));
                break;
            case RADIO_OPTION.SORT_NAME.key:
                dispatchSortFilter(dynamicSort("ownerName"));
                break;
            case RADIO_OPTION.SORT_NAME_REVERSE.key:
                dispatchSortFilter(dynamicSort("-ownerName"));
                break;
        }
        dispatch(modalActions.setSelectFilter(item))
    }

    return {
        isShowModal,
        selectedFilter,
        setShowModalReducer,
        setFilterSort,
        props
    };
};

export default ModalFilterHooks;
