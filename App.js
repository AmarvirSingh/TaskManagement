import { StatusBar } from 'expo-status-bar';
import React , {useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import Input_Field from './components/Input_Field';

export default function App() {

  const [Task, setTask] = useState([
    {
      text: 'task1', key: '1'
    },
    {
      text: 'task3', key: '3'
    }
  ])




  return (
    <View style={styles.container}>
      <Header />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
