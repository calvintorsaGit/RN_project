import {useDispatch, useSelector} from "react-redux";
import {useNavigation} from "@react-navigation/native";
import {actions as transactionActions} from "../../Reducers/TransactionReducer";

const transactionListHooks = () => {
    const transactionReducer = useSelector(state => state.transactionReducer);
    const arrayDataTransaction = transactionReducer.arrayDataTransaction;
    const filteredDataTransaction = transactionReducer.filteredDataTransaction;
    const onSearch = transactionReducer.onSearch;
    const transactionList = onSearch ? filteredDataTransaction : arrayDataTransaction;

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const navigateToDetail = (item) => {
        dispatch(transactionActions.setDetailTransaction(item));
        navigation.navigate('DetailTransaction');
    }

    return {
        transactionList,
        navigateToDetail
    };
};

export default transactionListHooks;
