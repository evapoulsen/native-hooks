import React, { useState } from 'react';
import { View,  Text, StyleSheet, FlatList } from 'react-native';

import AddNewTodo from './AddNewTodo';

const TodoList = (props) => {
    const [todos, setTodos] = useState([
            { text: 'Pay bills', id: '1'},
            { text: 'Do your homework', id: '2'},
            { text: 'Start writing your project', id: '3'},
            { text: 'Design your interface', id: '4'},
            { text: 'Interview users', id: '5'},
    ]);

    const addTodo = (text) => {
        setTodos([...todos, { text, id: `${Math.random()}` }]);
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => {
                    return <Text>{item.text}</Text>
                }}
                keyExtractor={(todo) => todo.id}
            />
            <AddNewTodo addTodo={addTodo}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    }
});

export default TodoList;

