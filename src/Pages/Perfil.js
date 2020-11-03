import React from 'react';
import { View, Text, Button, TextInput, StyleSheet} from 'react-native';

export default function Perfil() {
    return(
        <View style={style.container}>
            <Text> Estou no Perfil!</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems:"center"
    }
})