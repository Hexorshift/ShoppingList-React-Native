import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Dialog from 'react-native-dialog';

const ListItem = ({ item, deleteItem, updateItem }) => {
    const [updateDialogActive, setUpdateDialogActive] = useState(false);
    const [updatedText, setUpdatedText] = useState('');

    return (
        <TouchableOpacity
            style={styles.listItem}
            onLongPress={() => setUpdateDialogActive((previousState) => !previousState)}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>{item.text}</Text>
                <Icon
                    name="remove"
                    size={20}
                    color="firebrick"
                    onPress={() => deleteItem(item.id)}
                />
                <Dialog.Container visible={updateDialogActive}>
                    <Dialog.Title>Item update (:</Dialog.Title>
                    <Dialog.Input
                        onChangeText={(textValue) => setUpdatedText(textValue)}
                        placeholder="Please enter the updated item"
                    />
                    <Dialog.Button label="Update" onPress={() => {
                        updateItem(item.id, updatedText);
                        setUpdateDialogActive(false);
                    }} />
                    <Dialog.Button label="Cancel" onPress={() => setUpdateDialogActive(false)} />
                </Dialog.Container>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize: 18
    }
});

export default ListItem;
