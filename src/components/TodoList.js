import React, { Component } from 'react';
import { View,  Text, StyleSheet, FlatList } from 'react-native';

const TodoList = (props) => {
    const todos = [
        { text: 'Pay bills', id: '1'},
        { text: 'Do your homework', id: '2'},
        { text: 'Start writing your project', id: '3'},
        { text: 'Design your interface', id: '4'},
        { text: 'Interview users', id: '5'},

    ];
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
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
});

export default TodoList;

