import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';

import { TextInputCustom } from '../Components/TextInputCustom';
import { ButtonCustom } from '../Components/ButtonCustom.js';
import { RegistroScreen } from './RegistroScreen';
import {PerfilScreen} from './PerfilScreen';
import { ButtonGoogle } from '../Components/ButtonGoogle.js';

export class LoginScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: "",
            password: "",
            registroVisible: false,
            perfilVisible: false,
        }
    }

    onPressLog(visible){
        if(visible && this.state.user !== "" && this.state.password !== ""){
            this.setState({perfilVisible: true,}); 
            this.props.navigation.setOptions({title: "Perfil"})
        }else{
            this.setState({
                user: "",
                password: "",
                perfilVisible: false,}); 
            this.props.navigation.setOptions({title: "Login"})
        }
         
    }

    windowRegistro(visible){
        if(visible){
            this.props.navigation.setOptions({title: "Registro"})
        }else{
            this.props.navigation.setOptions({title: "Login"})
        }
        this.setState({registroVisible: visible,});    
    }

    render(){
        let {registroVisible, perfilVisible} = this.state;
        if(registroVisible){
            return(
                <RegistroScreen onPress={() => {this.windowRegistro(!registroVisible)}}/>
            );
        }else if(perfilVisible){
            return(
                <PerfilScreen onPress={() => {this.onPressLog(!perfilVisible)}}/>
            );
        }else{
            return(
                <ScrollView contentContainerStyle={styles.container} >
                    <ImageBackground style={styles.background} source={{uri: "https://i.imgur.com/G59jKlU.jpg"}} resizeMode="cover">
                    <View style={styles.containerInputs}>
                        <Text style={styles.label}>Mail:</Text>
                        <TextInputCustom onChangeText={userName => {this.setState({
                                        user: userName,
                                    })}}/>
                        <Text style={styles.label}>Password:</Text>
                        <TextInputCustom onChangeText={pass => {this.setState({
                                        password: pass,
                                    })}} 
                                    secureTextEntry/>
                    </View>
                    <View style={styles.containerButtons}>
                        <ButtonCustom title="Ingresar" onPress={() => {this.onPressLog(!perfilVisible)}}/>
                        <ButtonCustom title="Registrarse" onPress={() => {this.windowRegistro(!registroVisible)}}/>
                        <ButtonGoogle/>
                    </View>
                    </ImageBackground>
                </ScrollView>
            );
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,

        justifyContent: "center"
   
    },

    containerInputs:{
        alignItems: "center",
        marginBottom: 20
    },

    label:{
        fontSize: 23,
        letterSpacing: 3,
        fontFamily: "Inconsolata",
        color: "white"
    },

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    containerButtons:{
        marginHorizontal: 50
    },

});