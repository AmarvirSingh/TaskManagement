import React from 'react'
import { View, Text, StyleSheet, TextInput, Button, Platform, StatusBar, SafeAreaView } from 'react-native'

export default function Signup() {
    return (
        <SafeAreaView style={styles.container}> 
        <View >

            <Text style ={styles.heading}> Sign Up Form </Text>
            <TextInput style={styles.field} placeholder= 'Enter Email'/>
            <TextInput style={styles.field} placeholder= 'Enter Password'/>
            <TextInput style={styles.field} placeholder= 'Enter Username'/>
            <Button 
            style={styles.btn}
            color ='red'
            title= 'Sign Up'/>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
       paddingTop: Platform.OS === 'android' ?  StatusBar.currentHeight : 10,
        alignItems:'center',
        justifyContent:'center',
        
    },
    heading:{
        alignSelf:'center',
        marginTop:30,
        fontSize:30,
        color:'red',
        fontWeight:'bold',
        fontStyle:'italic'
    },
    field:{
        width:250,
        padding:10,
        borderColor:'red',
        borderWidth:2,
       borderRadius:50,
        marginVertical:15
    },
    btn:{
        marginVertical:25
        
    }
})
