import {SafeAreaView, StyleSheet} from "react-native";
import TransactionListComponent from "../Components/TransactionList/TransactionList.component";
import ModalFilterSortComponent from "../Components/ModalFilterSort/ModalFilterSort.component";
import React from "react";

const Home = () => {
    return (
        <SafeAreaView style={styles.backgroundStyle}>
            <TransactionListComponent/>
            <ModalFilterSortComponent/>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    backgroundStyle : {
        flex: 1,
        backgroundColor: '#f5faf8',
    }
});

export default Home
