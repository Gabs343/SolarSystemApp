import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, ImageBackground  } from 'react-native';
import { Text } from 'react-native-paper';

import { ButtonCustom } from '../Components/ButtonCustom';
import { TextInputCustom } from '../Components/TextInputCustom';

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

    }

    render(){
        return(
            <ScrollView contentContainerStyle={styles.container}>
                <ImageBackground style={styles.background} source={{uri: "https://i.imgur.com/G59jKlU.jpg"}} resizeMode="cover">
                <View>
                    <Text style={styles.label}>Name:</Text>
                    <TextInputCustom  onChangeText={newName => this.setState({name: newName})}/>

                    <Text style={styles.label}>LatName:</Text>
                    <TextInputCustom  onChangeText={newLastName => this.setState({lastName: newLastName})}/>

                    <Text style={styles.label}>Age:</Text>
                    <TextInputCustom onChangeText={newAge => this.setState({age: newAge})}/>

                    <Text style={styles.label}>Mail:</Text>
                    <TextInputCustom onChangeText={newMail => this.setState({mail: newMail})} />

                    <Text style={styles.label}>Password:</Text>
                    <TextInputCustom secureTextEntry 
                                onChangeText={newPass => this.setState({password: newPass})}
                                secureTextEntry/>
                </View>

                <View>
                    <ButtonCustom title="Registrarse" />
                    <ButtonCustom title="Exit" onPress={this.state.salirButton} />
                </View>
                </ImageBackground>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
    },

    background:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },

    label: {
        color: "white"
    }

});