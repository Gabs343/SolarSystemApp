import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';

export class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: null,
           
        }
    }

    session(token){
        fetch(process.env.GOOGLE_URL + token).then(resp => {
            this.setState({userInfo: resp.data});
        }).catch(e => {
            console.log(e);
        })
    }   

    componentDidMount(){
        let token = this.props.route.params?.auth.accessToken;
        this.session(token);
    }

    render(){
        return(
            <View style={styles.container}> 
                <ImageBackground style={styles.background} source={{uri: "https://c.tenor.com/XqVhAiPc7VYAAAAC/via-lactea-milky-way.gif"}}>
                {/*<ImageBackground style={styles.background} source={{uri: require("../assets/img/galaxy.gif")}}>*/}
                <Text style={styles.title} >Welcome to the</Text>
                <Text style={styles.title} >Solar System</Text>
                <Text>Nombre: {this.state.userInfo?.name}</Text>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },

    background:{
        flex: 1,
        alignItems: "center",
       paddingVertical: 80,
    },

    title:{
        fontSize: 40,
        fontFamily: "Inconsolata",
        color: "white"
    }
});