import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList,
  Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import {Header} from './components/Header'
import {ToDoItem} from './components/ToDoItem'
import {AddToDo} from './components/AddToDo'

export default function App() {
  const [todos, setTodos] = useState([
    {task: 'Let the dog out!', key : '1'},
    {task: 'Update your github!', key : '2'},
    {task: 'Pitch to the boss.', key : '3'}
  ])

  const PressHandler = (key) => {
    console.log(key)
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    })
  }

  const SubmitHandler = (toDo) => {
    if(toDo.length > 3) {a
      setTodos((prevTodos) => {
        return [
          {task : toDo, key : Math.random.toString()},
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert(
          'Failed to add!',
          'New task has to be including 4 characters minimum.',
          [
             { text: 'OK', onPress: () => console.log('OK Pressed') }
          ],
          { cancelable: true }
      );
    }

  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss()
    }}>
      <View style={styles.container}>
        <Header title="My Daily Tasks"/>
        <View style={styles.content}>
          <AddToDo submitHandler = {SubmitHandler}/>
          <View style={styles.list}>
            <FlatList
                data={todos}
                renderItem={({item}) => (
                    <ToDoItem item={item} pressHandler = {PressHandler}/>
                )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  }
});
