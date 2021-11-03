import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default function Input_Field(props) {
    return (
        <View>
            <Text>props.placeHolder</Text>
            <Button title = {props.placeHolder}  />
        </View>
    )
}

const styles = StyleSheet.create({

}
)
