import React from "react";
import { StyleSheet, View, Text } from "react-native";
import TodoList from "./src/components/TodoList";

const App = (props) => {
  return (
    <View style={styles.container}>
      <TodoList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
  },
});

export default App;
