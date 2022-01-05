import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Header from './components/Header'
import ToDoItem from './components/ToDoItem'

export default function App() {

  const [toDos, setToDos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* form */}

        <View style={styles.list}>
          <FlatList
            data={toDos}
            renderItem={({ item }) => (
              <ToDoItem item={item}/>
            )}

          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  },
});
