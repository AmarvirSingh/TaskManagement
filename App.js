
import React , {useState}from 'react';
import { Platform, StyleSheet, Text, View , StatusBar, FlatList, Button} from 'react-native';
import Header from './components/Header';
import Input_Field from './components/Input_Field';
import MainScreen from './screens/MainScreen';
import Signup from './screens/Signup';

export default function App() {

  const [Task, setTask] = useState([
    {
      text: 'task1', key: '1'
    },
    {
      text: 'task3', key: '3'
    },
    {
      text: 'task3', key: '2'
    }
  ])




  return (
    <View style = {styles.container}>
    <MainScreen />

    <FlatList  style = {styles.list}
    data = {Task}
    renderItem = {({ item }) => (
      <View style ={{flexDirection:'row', justifyContent:'space-between',
      borderColor:'black', borderBottomWidth:1}}>
        <Text 
        style = {{
          paddingHorizontal: 10,
          marginVertical:10,
          fontSize:20,
          backgroundColor:'#fefefe'
          }}> 
          {item.text} 
          </Text>
        <Button
        color='black'
         title = 'Hello'/>
        </View>
    )
  }
    />



    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    padding: Platform.OS === 'android' ? StatusBar.currentHeight : 0 
  },
  list:{
 
  }
});
