import * as React from 'react';
import {useEffect} from 'react';
import {View, StyleSheet, Text, FlatList, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import TransactionSearchBarComponent from "../TransactionSearchBar/TransactionSearchBar.component";
import transactionListHooks from "./TransactionList.hooks";
import {DUMMY_DATA} from "../../Constants/constants";
import {useDispatch} from "react-redux";
import {actions as transactionActions} from "../../Reducers/TransactionReducer";
import {getDate} from "../../Utils/transaction.utils";

const _isOnCheck = (props) => props.item.statusTransaction === 'ON_CHECK';

const _renderFromToBank = (props) => (
    <View style={styles.containerRowLeft}>
        <Text style={styles.bankNameText}>{props.item.bankSource}</Text>
        <Icon name={'arrow-right'}/>
        <Text style={styles.bankNameText}>{props.item.bankDestination}</Text>
    </View>
)

const _renderDateAmount = (props) => (
    <View style={styles.containerRowLeft}>
        <Text style={styles.bottomLeftSectionText}>Rp {props.item.amount}</Text>
        <Icon name={'circle'}/>
        <Text style={styles.bottomLeftSectionText}>{getDate(props.item.timestamp)}</Text>
    </View>
)

const _renderLeftSectionItem = (props) => (
    <View style={styles.leftSection}>
        {_renderFromToBank(props)}
        <Text style={styles.bottomLeftSectionText}>{props.item.ownerName}</Text>
        {_renderDateAmount(props)}
    </View>
)

const _renderRightSectionItem = (props) => {
    const isOncheck = _isOnCheck(props)
    return <View style={styles.rightSection(isOncheck)}>
        <Text style={styles.rightSectionText(isOncheck)}>
            {isOncheck ? 'PENGECEKAN' : 'BERHASIL'}
        </Text>
    </View>
}

const ListItem = (props) => {
    return (<TouchableOpacity
        style={styles.container(_isOnCheck(props))}
        onPress={() => props.hooks.navigateToDetail(props.item)}
    >
        {_renderLeftSectionItem(props)}
        {_renderRightSectionItem(props)}
    </TouchableOpacity>)
};

/*
* component transaction list,
* set dummy data once at didmount,
* use dummy data due to unable using API from the test
* */
export const TransactionListComponent = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const dummyData = DUMMY_DATA.data;
        dispatch(transactionActions.setListTransaction(dummyData));
    }, []);
    const hooks = transactionListHooks();

    return <FlatList
        ListHeaderComponent={<TransactionSearchBarComponent/>}
        data={hooks.transactionList}
        renderItem={(data) => <ListItem item={data.item} hooks={hooks}/>}
    />
}

const styles = StyleSheet.create({
    input: {
        flex: 1
    },
    icon: {
        margin: 4,
        color: '#e0e0e0'
    },
    text: {
        flex: 0,
        color: '#ff603d'
    },
    iconDown: {
        flex: 0,
        margin: 4,
        color: '#ff603d'
    },
    container: (statusOnCheck) => {
        return {
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: 10,
            borderLeftWidth: 10,
            borderColor: statusOnCheck ? 'orange' : 'green',
            margin: 12,
            paddingVertical: 20,
            shadowColor: "#000000",
            shadowOpacity: 0.4,
            shadowRadius: 2,
            shadowOffset: {
                height: 1,
                width: 1
            }
        }
    },
    containerRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2
    },
    leftSection: {
        flex: 1,
        marginLeft: 12
    },
    rightSection: (isOncheck) => {
        return {
            flex: 0,
            marginRight: 12,
            borderRadius: 8,
            borderWidth: isOncheck ? 2 : 0,
            borderColor: isOncheck ? 'orange': undefined,
            padding: 2,
            backgroundColor: isOncheck ? 'white' : 'green'
        }
    },
    bankNameText: {
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 4
    },
    bottomLeftSectionText: {
        marginHorizontal: 4,
        fontSize: 16
    },
    rightSectionText: (statusOnCheck) => {
        return {
            marginHorizontal: 4,
            fontSize: 14,
            color: statusOnCheck ? 'black' : 'white'
        }
    }
});

export default React.memo(TransactionListComponent)
