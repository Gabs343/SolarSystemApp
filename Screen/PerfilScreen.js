import React, { Component } from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import { Text, Button } from 'react-native-paper';

export class PerfilScreen extends Component{
    constructor(props){
        super();
        this.state = {
            salirButton: props.onPress,
        }
    }
    render(){
        return(
            <View>
                <Button onPress={this.state.salirButton}>Salir</Button>
            </View>
        );
    }
}