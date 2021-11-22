import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-paper';

export class TextInputCustom extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <TextInput 
                    style={styles.input} 
                    label={this.props.label}
                    placeholder={this.props.placeholder}
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    input: {
        textAlign: "center",
        fontSize: 20,
        height: 40,
        width: 130,
        marginVertical: 20,
        marginBottom: 15,
        backgroundColor: "transparent",
        borderBottomWidth: 1,
        borderBottomColor: "white",
    },
});