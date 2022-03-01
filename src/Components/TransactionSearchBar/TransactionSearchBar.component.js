import * as React from 'react';
import {View, TextInput, StyleSheet, Text, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import transactionSearchBarHooks from "./TransactionSearchBar.hooks";

const TransactionSearchBarComponent = () => {
    const hooks = transactionSearchBarHooks();

    return <View style={styles.container}>
        <Icon style={styles.icon} name='search'/>
        <TextInput
            style={styles.input}
            placeholder="Cari nama, bank atau nominal"
            onChangeText={newText => hooks.searchTransaction(newText)}
        />
        <TouchableOpacity onPress={() => hooks.setShowModalReducer(true)}>
            <Text style={styles.text}>{hooks.selectedSortFilter.title}</Text>
        </TouchableOpacity>
        <Icon style={styles.iconDown} name='angle-down'/>
    </View>
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
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        height: 40,
        margin: 12,
    }
});

export default React.memo(TransactionSearchBarComponent)
