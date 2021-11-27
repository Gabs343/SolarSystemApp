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
                <Image style={styles.imagen} source={{uri: require("../assets/img/planetsLoading.gif")}}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    title:{
        fontSize: 50,
        fontFamily: "Berlin Sans FB",
        letterSpacing: 3
    },

    imagen: {
        width: 300,
        height: 300,
    },
});