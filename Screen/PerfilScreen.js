import React, { Component } from 'react';
import { StyleSheet, ScrollView, ImageBackground  } from 'react-native';
import { Text } from 'react-native-paper';

import { ButtonCustom } from '../Components/ButtonCustom';

export class PerfilScreen extends Component{
    constructor(props){
        super();
        this.state = {
            salirButton: props.onPress,
        }
    }
    render(){
        return(
            <ScrollView contentContainerStyle={styles.container} >
                <ImageBackground style={styles.background} source={{uri: "https://i.imgur.com/G59jKlU.jpg"}} resizeMode="cover">
                    <ButtonCustom title="Exit" onPress={this.state.salirButton}/>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,

        justifyContent: "center"
   
    },

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
})