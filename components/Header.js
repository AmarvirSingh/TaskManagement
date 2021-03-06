import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default function Header() {
    return (
        <View style={styles.main}>
            <Text style={styles.heading}> Task Manager </Text>
            <Button
                style={styles.btn}
                title='+'
                color='black' 
                accessibilityLabel = 'Add Task'/>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        padding:10,
        justifyContent:'space-between'
    },
    heading:{
        fontSize:20,
        fontWeight:'bold',
        justifyContent:'space-between'

    },
    btn:{
        
    }
})
