import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export function Header(props){
    return (
        <View style={styles.header}>
            <Text style={styles.title}>
                {props.title}
            </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    header: {
       height: 80,
        paddingTop: 30,
        backgroundColor: 'orange',
        marginTop: 25
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontWeight : '600',
        fontSize: 20
    }
});
