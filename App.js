import React, { useState } from 'react';
import uuid from 'react-uuid'
import {
  View,
  StyleSheet,
  FlatList,
  Alert
} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem'

const App = () => {
  const [items, setItems] = useState([
    { id: uuid(), text: 'Milk' },
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Beef' }
  ]);

  const deleteItem = (id) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  const addItem = (textValue) => {
    if (!textValue) {
      Alert.alert('Error', 'Please enter an item!', [{ text: 'Ok' }]);
    } else {
      setItems((previousItems) => [...previousItems, { id: uuid(), text: textValue }]);
    }
  }

  const updateItem = (id, newValue) => {
    if (!newValue) {
      Alert.alert('Error', 'Please enter the updated item!', [{ text: 'Ok' }]);
    } else {
      setItems((previousItems) => previousItems.map((item) => {
        if (item.id === id) {
          return ({
            ...item,
            text: newValue
          });
        } else {
          return (item);
        }
      }));
    }
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <FlatList
        data={items}
        renderItem={({ item }) => {
          return (
            <ListItem item={item} deleteItem={deleteItem} updateItem={updateItem} />
          );
        }}
      />
      <AddItem addItem={addItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
