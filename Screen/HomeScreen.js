import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';

export class HomeScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <View style={styles.container}> 
                <ImageBackground style={styles.background} source={{uri: require("../assets/img/galaxy.gif")}}>
                <Text style={styles.title} >Welcome to the</Text>
                <Text style={styles.title} >Solar System</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    background:{
        flex: 1,
        alignItems: "center",
       paddingVertical: 80
    },

    title:{
        fontSize: 30
    }
});