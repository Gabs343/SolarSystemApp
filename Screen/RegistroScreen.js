import React, { Component } from 'react';
import { StyleSheet, View, ScrollView  } from 'react-native';
import { Text, Button, TextInput } from 'react-native-paper';

export class RegistroScreen extends Component{
    constructor(props){
        super();

        this.state = {
            name: "",
            lastName: "",
            age: "",
            mail: "",
            password: "",
            salirButton: props.onPress,
        }

        
        this.datosCompletos = this.datosCompletos.bind(this);
        this.enviarRegistro = this.enviarRegistro.bind(this);
    }

    datosCompletos(){
        const {name, lastName, age, mail, password} = this.state;
        return  name !== "" && lastName !== "" && age !== "" && mail !== "" && password !== "";
    }

    enviarRegistro(){
        
        if(this.datosCompletos()){
            console.log("datos Completos");
        }else{
            console.log("faltan datos")
        }
    }

    render(){
        return(
            <ScrollView>
            <View style={styles.container}>
                <View>
                    <Text>Name:</Text>
                    <TextInput style={styles.inputLog} 
                                onChangeText={newName => this.setState({name: newName})}/>

                    <Text>LatName:</Text>
                    <TextInput style={styles.inputLog} 
                                onChangeText={newLastName => this.setState({lastName: newLastName})}/>
                    <Text>Age:</Text>
                    <TextInput style={styles.inputLog} 
                                onChangeText={newAge => this.setState({age: newAge})}/> 
                    <Text>Mail:</Text>
                    <TextInput style={styles.inputLog} 
                                onChangeText={newMail => this.setState({mail: newMail})} />
                    <Text>Password:</Text>
                    <TextInput style={styles.inputLog}  
                                secureTextEntry 
                                onChangeText={newPass => this.setState({password: newPass})}/> 
                </View>

                <View>
                    <Button style={styles.buttons} onPress={this.enviarRegistro()}>Registrarse</Button>
                    <Button style={styles.buttons} onPress={this.state.salirButton}>Salir</Button>
                </View>
            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
       justifyContent:"space-evenly",
       alignItems:"center",
       marginVertical: 20
    },

    inputLog: {
        textAlign: "center",
        backgroundColor: "white",
        height: 40,
        width: 300,
        marginVertical: 20,
        marginBottom: 65,
    },

    buttons:{
        marginVertical: 10,
    }
});