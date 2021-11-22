import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';

import { TextInputCustom } from '../Components/TextInputCustom';
import { RegistroScreen } from './RegistroScreen';
import {PerfilScreen} from './PerfilScreen';

export class LoginScreen extends Component{
    constructor(){
        super();
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
                    <View>
                        <Text>Correo:</Text>
                        <TextInputCustom onChangeText={userName => {this.setState({
                                        user: userName,
                                    })}}/>
                        <Text>Contraseña:</Text>
                        <TextInputCustom onChangeText={pass => {this.setState({
                                        password: pass,
                                    })}} 
                                    secureTextEntry/>
                    </View>
                    <View>
                        <Button style={styles.buttons}  onPress={() => {this.onPressLog(!perfilVisible)}}>Ingresar</Button>
                        <Button style={styles.buttons} onPress={() => {this.windowRegistro(!registroVisible)}}>Registrarse</Button> 
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

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    buttons:{
        marginVertical: 10,
        
    },
});