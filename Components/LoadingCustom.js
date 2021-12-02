import React, { Component } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { Text } from 'react-native-paper';

export class LoadingCustom extends Component{
    constructor(){
        super();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>LOADING</Text>
                <Image style={styles.imagen} source={{uri: "https://i.imgur.com/wRiB1ud.gif"}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        
        alignItems: "center",
        justifyContent: "center"
    },

    title:{
        fontSize: 50,
        fontFamily: "Inconsolata",
        letterSpacing: 3,
        color: "white"
    },

    imagen: {

        width: 300,
        height: 300,
    },
});