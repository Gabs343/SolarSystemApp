import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';

import { TextInputCustom } from '../Components/TextInputCustom';
import { ButtonCustom } from '../Components/ButtonCustom.js';
import { RegistroScreen } from './RegistroScreen';
import {PerfilScreen} from './PerfilScreen';

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
                <View style={styles.container} >
                    <ImageBackground style={styles.background} source={{uri:require("../assets/img/star-background.jpg")}} resizeMode="cover">
                    <View style={styles.containerInputs}>
                        <Text style={styles.label}>Correo:</Text>
                        <TextInputCustom onChangeText={userName => {this.setState({
                                        user: userName,
                                    })}}/>
                        <Text style={styles.label}>Contraseña:</Text>
                        <TextInputCustom onChangeText={pass => {this.setState({
                                        password: pass,
                                    })}} 
                                    secureTextEntry/>
                    </View>
                    <View>
                        <ButtonCustom title="Ingresar" onPress={() => {this.onPressLog(!perfilVisible)}}/>
                        <ButtonCustom title="Registrarse" onPress={() => {this.windowRegistro(!registroVisible)}}/>
                        <ButtonCustom title="logging with google" />
                    </View>
                    </ImageBackground>
                </View>
            );
        }
        
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,

   
    },

    containerInputs:{
        width: 300,
        alignItems: "center",
        marginBottom: 20
    },

    label:{
        fontSize: 23,
        letterSpacing: 3,
        fontFamily: "Berlin Sans FB"
    },

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

});