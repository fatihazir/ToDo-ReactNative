import React,{useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

export function AddToDo(props){
    const [text, setText] = useState('')

    const ChangeHandler = (val) => {
        setText(val)
    }

    return (
        <View style = {styles.container}>
            <TextInput
                style = {styles.input}
                placeholder={'Type here'}
                onChangeText={ChangeHandler}
            />
            <Button
            onPress={() => props.submitHandler(text)}
            title='Add'
            color = 'coral'
            />
        </View>
    )

}

const styles = StyleSheet.create({
    input:{
        borderWidth: 1,
        borderColor: 'lightgrey',
        padding: 8,
        margin : 10,
        width : 200,
        marginBottom : 10,
        paddingHorizontal : 8,
        borderBottomWidth : 1,
        borderBottomColor : 'black'
    },
    container:{
        alignItems : 'center'
    }
});
