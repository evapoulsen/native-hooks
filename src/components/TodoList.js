import React, { useState } from 'react';
import { View,  Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const TodoList = (props) => {
    const [todos, setTodos] = useState([
            { text: 'Pay bills', id: '1'},
            { text: 'Do your homework', id: '2'},
            { text: 'Start writing your project', id: '3'},
            { text: 'Design your interface', id: '4'},
            { text: 'Interview users', id: '5'},
    ]);

    const addTodo = () => {
        setTodos([...todos, {text: 'Learn Hooks', id: `${Math.random()}`}]);
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={todos}
                renderItem={({ item }) => {
                    return <Text>{item.text}</Text>
                }}
                keyExtractor={(todo) => todo.id}
            >
            </FlatList>
            <TouchableOpacity style={styles.buttonContainer}onPress={addTodo}>
                <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        marginBottom: 40,
        justifyContent: 'center',
        paddingVertical: 10,        
    },
    buttonText : {
        color: 'white',
    },
});

export default TodoList;

