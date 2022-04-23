import React, { useState, useEffect } from 'react';
import { View,  Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

import AddNewTodo from './AddNewTodo';

const TodoList = (props) => {
    const [todos, setTodos] = useState([
            { text: 'Pay bills', id: '1'},
            { text: 'Do your homework', id: '2'},
            { text: 'Start writing your project', id: '3'},
            { text: 'Design your interface', id: '4'},
            { text: 'Interview users', id: '5'},
    ]);

    const [count, setCount ] = useState(0);
    const addTodo = (text) => {
        setTodos([...todos, { text, id: `${Math.random()}` }]);
    };

    useEffect(() => {
        console.log('useEffect todos: ', todos);
    }, [todos]);

    useEffect(() => {
        console.log('useEffect count: ', count);
    }, [count]);
    
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
            <TouchableOpacity 
                style={styles.addCounter} 
                onPress={() => { setCount(count + 1)}}
            >
                <Text>Add Score: {count} </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    addCounter: {
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        marginBottom: 40,
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 50        
    },
});

export default TodoList;

