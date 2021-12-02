import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-paper';

export class TextInputCustom extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
          
                <TextInput 
                    style={styles.input} 
                    label={this.props.label}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                />
            
        );
    }
} 

const styles = StyleSheet.create({
    input: {
        
        textAlign: "center",
        fontSize: 20,
        height: 40,
        width: 180,
        marginVertical: 10,
        marginBottom: 30,
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: "white",
        color:"white"
    },
});