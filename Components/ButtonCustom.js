import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';

export class ButtonCustom extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: props.title.toUpperCase(),
            action: props.onPress,
        }
    }
    render(){
        let { title } = this.state;
        return(     
            <TouchableOpacity style={styles.button} activeOpacity={0.4} onPress={this.state.action}>
                <Text style={styles.text} icon={{uri: "star"}}>{title}</Text>
            </TouchableOpacity>
        
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex:1,
        justifyContent: "center",

        borderRadius: 7,
        borderWidth: 2,
        borderColor: "white",
        paddingVertical: 10,
        paddingHorizontal: 20,

        marginVertical: 10
    },

    text:{
        color: "white",
        textAlign: "center",
        fontSize: 18,
        fontFamily: "Berlin Sans FB",
        letterSpacing: 3
    }
});