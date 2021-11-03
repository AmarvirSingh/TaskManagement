import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style = {styles.main}>
        <Text style = {styles.heading}> Task Manager </Text>
         <Button 
         style= {styles.btn} 
         title = '+'
         color = 'white'/>
        
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        
    }
})
