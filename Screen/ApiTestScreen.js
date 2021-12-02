import React, { Component } from 'react';
import { StyleSheet, View, Image, ScrollView, ImageBackground } from 'react-native';
import { Text, IconButton, Divider } from 'react-native-paper';
import { TextInputCustom } from '../Components/TextInputCustom';
import { LoadingCustom } from '../Components/LoadingCustom';

export class ApiTestScreen extends Component{
    constructor(){
        super();
        this.state = {
            item: "earth",
            isLoaded: false,
            data: [],
        };
        this.submit = this.submit.bind(this);
    }

    componentDidMount(){
        fetch(`http://70da-181-229-145-193.ngrok.io/solarsystem/${this.state.item}`)
            .then((response) => response.json())
                .then((jsonData) => {
                this.setState({data: jsonData,
                                isLoaded: true, });
            })
    
        .catch((error) => console.log(error));
    }

    setName(name){
        this.setState({
            item: name.toLowerCase(),
        });
    }

    submit(){
        this.componentDidMount();
    }

    render(){
        let {isLoaded, data, item} = this.state;
        if(!isLoaded){
            return (
                <View style={styles.container}>
                    <ImageBackground style={styles.background} source={{uri: "https://i.imgur.com/G59jKlU.jpg"}} resizeMode="cover">
                    <LoadingCustom/>
                    </ImageBackground>
                </View>
            );
        }else if(data.length !== 0){
            return(
                <ScrollView contentContainerStyle={styles.container}>
                    <ImageBackground style={styles.background} source={{uri: "https://i.imgur.com/G59jKlU.jpg"}} resizeMode="cover">
                    <View style={styles.containerTitle}>
                        <Text style={styles.title}>{data[0].name.toUpperCase()}</Text>
                        <Image style={styles.imagen} source={{ uri: `${data[0].src}` }}/>
                    </View>
                    
                    <View style={styles.containerInfo}>
                        <Text style={styles.subtitle} >Information</Text>
                        <Divider style={styles.line}/>
                        
                    </View>
                    <View style={styles.containerInput}>
                        <IconButton icon="rocket" color="white" size={55} onPress={this.submit}/>
                        <TextInputCustom  placeholder= {item.toUpperCase()} onChangeText={name => this.setName(name)}/> 
                    </View>
                    </ImageBackground>
                </ScrollView>
                
            );
        }else{
            return(
                <View style={styles.container}>
                    <ImageBackground style={styles.background} source={{uri: "https://i.imgur.com/G59jKlU.jpg"}} resizeMode="cover">
                        <View style={styles.containerTitle}>
                            <Image style={styles.imagenError} source={{uri: "https://i.imgur.com/9bqcFed.png"}}/>
                            <Text style={styles.titleError}>No result given</Text>
                            <Text style={styles.titleError}>Try Again</Text>
                        </View>   
                        
                        <View style={styles.containerInput}>
                            <IconButton icon="rocket" color="white" size={55} onPress={this.submit}/>
                            <TextInputCustom  placeholder= {item.toUpperCase()} onChangeText={name => this.setName(name)}/> 
                        </View>
                    </ImageBackground>
                </View>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        flexGrow: 1,
        justifyContent: "space-evenly",
      
    },

    background:{
        flex: 1,
        justifyContent: "center"
    },

    containerTitle:{
        alignItems: "center",
    },

    title:{
        fontSize: 50,  
        color: "white"
    },

    subtitle:{
        fontSize: 20,
        color: "white"
    },

    titleError:{
        fontSize: 30,
        color: "white"
    },

    line:{
        marginVertical:10,
        backgroundColor: "white"
    },

    imagen: {
        width: 270,
        height: 270,
    },

    imagenError:{
        width: 125,
        height: 125,
    },

    containerInfo:{
        //alignItems: "left", dont use on android
        marginHorizontal: 20
    },

    containerInput:{
       justifyContent: "center",
       flexDirection: "row",
       marginVertical: 7
    },
});