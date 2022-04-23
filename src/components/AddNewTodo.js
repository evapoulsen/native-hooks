import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";

const AddNewTodo = ({ addTodo }) => {
    const [todo, setTodo] = useState('');

    const onButtonPress = () => {
        addTodo(todo);
    };

    return (
        <View>
            <TextInput
                value={todo}
                onChangeText={(text) => setTodo(text)}
                style={styles.input}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={onButtonPress}>
                <Text style={styles.buttonText}>Add Todo</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 18,
        padding: 5,
        margin: 5,
    },
    buttonContainer: {
        backgroundColor: 'dodgerblue',
        alignItems: 'center',
        marginBottom: 40,
        justifyContent: 'center',
        paddingVertical: 10,
        borderRadius: 50        
    },
    buttonText : {
        color: 'white',
    },
});

export default AddNewTodo;

