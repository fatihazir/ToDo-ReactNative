import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export function ToDoItem(props){
    const { item,pressHandler } = props
    return (
        <TouchableOpacity onPress={() => pressHandler(item.key)}>
            <Text style={styles.item}>
                {item.task}
            </Text>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    item: {
       padding: 16,
        marginTop: 16,
        borderRadius : 40,
        borderWidth: 1,
        borderColor : 'red',
        borderStyle : 'dashed'
    }
});
