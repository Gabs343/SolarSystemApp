import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';

import { TextInputCustom } from '../Components/TextInputCustom';
import { ButtonCustom } from '../Components/ButtonCustom.js';
import { RegistroScreen } from './RegistroScreen';
import {PerfilScreen} from './PerfilScreen';

import * as Google from 'expo-auth-session/providers/google';


export function LoginGScreen({navigation}){

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '.apps.googleusercontent.com',
        webClientId: '.apps.googleusercontent.com',
        androidClientId: '.apps.googleusercontent.com'
    });

    React.useEffect( () => {
        if(response?.type === "success"){
            console.log(response);
            navigation.navigate("Home", {auth: response.authentication})
        }
    }, [response]);

    return(
        <View style={styles.container} >
                    <ImageBackground style={styles.background} source={{uri:require("../assets/img/star-background.jpg")}} resizeMode="cover">
                    <View style={styles.containerInputs}>
                        <Text style={styles.label}>Correo:</Text>
                        <TextInputCustom />
                        <Text style={styles.label}>Contraseña:</Text>
                        <TextInputCustom 
                                    secureTextEntry/>
                    </View>
                    <View style={styles.containerButtons}>
                        <ButtonCustom title="Ingresar" />
                        <ButtonCustom title="Registrarse" />
                        <ButtonCustom title="logging with google" onPress={ () =>{ promptAsync()} }/>
                    </View>
                    </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "black",
        justifyContent: "center"
    },

    containerInputs:{
       
        alignItems: "center",
        marginBottom: 20
    },

    containerButtons:{
        marginHorizontal: 50
    },

    label:{
        fontSize: 23,
        letterSpacing: 3,
        fontFamily: "Berlin Sans FB",
        color: "white"
    },

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

});