import {SafeAreaView, StyleSheet, View, Text} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import {useSelector} from "react-redux";

const _renderFromToBank = (transaction) => (
    <View style={styles.containerRowLeft}>
        <Text style={styles.bankNameText}>{transaction.bankSource}</Text>
        <Icon name={'arrow-right'}/>
        <Text style={styles.bankNameText}>{transaction.bankDestination}</Text>
    </View>
)

const _renderText = (topText, bottomText) => (
    <View style={styles.containerTopBottomText}>
        <Text style={styles.TopText}>{topText}</Text>
        <Text style={styles.BottomText}>{bottomText}</Text>
    </View>
)

const DetailTransaction: () => Node = () => {
    const transaction = useSelector(state => state.transactionReducer.detailTransaction);
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <View style={styles.backgroundCard}>
                <Text style={styles.boldText}>ID TRANSAKSI: ${transaction.transactionId}</Text>
            </View>
            <View style={styles.backgroundCard}>
                <Text style={styles.boldText}>DETAIL TRANSAKSI</Text>
            </View>
            <View style={styles.backgroundCard}>
                {_renderFromToBank(transaction)}
                <View style={styles.rowTextContainer}>
                    {_renderText(transaction.ownerName, transaction.accountNumber)}
                    {_renderText('Nominal', transaction.amount)}
                </View>
                <View style={styles.rowTextContainer}>
                    {_renderText('Berita Transfer',transaction.transferNotes)}
                    {_renderText('Kode Unik',transaction.uniqueCode)}
                </View>
                {_renderText('Waktu Dibuat', transaction.timestamp)}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        flex: 1,
        backgroundColor: '#f5faf8',
    },
    backgroundCard:{
        paddingVertical: 20,
        backgroundColor:'white',
        shadowColor: "#000000",
        shadowOpacity: 0.4,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 1
        }
    },
    boldText:{
        fontWeight:'bold',
        fontSize: 16,
        marginHorizontal: 20
    },
    bottomLeftSectionText:{
        marginHorizontal: 4,
        fontSize: 16
    },
    containerRowLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
        marginHorizontal: 20
    },
    containerTopBottomText: {
        minWidth: 160,
        flexDirection: 'column',
        marginVertical: 2,
        marginHorizontal: 20
    },
    bankNameText:{
        fontWeight:'bold',
        fontSize: 16,
        marginHorizontal: 4
    },
    TopText:{
        fontWeight:'bold',
        fontSize: 16,
        marginHorizontal: 4
    },
    BottomText:{
        fontSize: 16,
        marginHorizontal: 4
    },
    rowTextContainer:{
        marginVertical: 4,
        flexDirection: 'row'
    }
});

export default DetailTransaction
