import Modal from "react-native-modal";
import React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import {RADIO_OPTION_ARR} from "../../Constants/constants"
import Icon from 'react-native-vector-icons/Fontisto';
import ModalFilterHooks from "./ModalFilterSort.hooks";

const getIconRadioButton = (isActive) => isActive ? <Icon style={styles.icon} name='radio-btn-active'/>:
    <Icon style={styles.icon} name='radio-btn-passive'/>

const _renderBullet = (hooks, item) => {
    const isActive = item.key === hooks.selectedFilter.key;
    return <TouchableOpacity onPress={() => hooks.setFilterSort(item)}>
        <View style={styles.optionContainer}>
            {getIconRadioButton(isActive)}
            <Text style={styles.text}>{item.title}</Text>
        </View>
    </TouchableOpacity>
}

export const ModalFilterSortComponent = (props) => {
    const hooks = ModalFilterHooks(props);
    return <View>
        <Modal isVisible={hooks.isShowModal}
               onBackdropPress={() => hooks.setShowModalReducer(false)}>
            <View style={styles.content}>
                {RADIO_OPTION_ARR.map(item => _renderBullet(hooks, item))}
            </View>
        </Modal>
    </View>
}

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        padding: 22,
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    contentTitle: {
        fontSize: 20,
        marginBottom: 12,
    },
    optionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4
    },
    text: {
        flex: 0,
        marginLeft: 12,
        fontSize: 24,
        color: 'black'
    },
    icon: {
        fontSize: 24,
        color: '#ff603d'
    },
});

export default ModalFilterSortComponent
