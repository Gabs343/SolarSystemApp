import React, { Component } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { HomeScreen } from './Screen/HomeScreen';
import { ApiTestScreen } from './Screen/ApiTestScreen';
import { LoginScreen } from './Screen/LoginScreen'; 


import * as Font from 'expo-font';


export default class App extends Component{
  constructor(){
    super();
    

  }


  componentDidMount(){
     Font.loadAsync({
      // Load a font `Montserrat` from a static resource
      Inconsolata: require('./assets/fonts/Inconsolata-Regular.ttf'),

      // Any string can be used as the fontFamily name. Here we use an object to provide more control
      'Inconsolata-SemiBold': {
        uri: require('./assets/fonts/Inconsolata-SemiBold.ttf'),
        display: Font.FontDisplay.FALLBACK,
      },
    });

  }

  render(){
    
    return (
      <PaperProvider >
      <NavigationContainer>
        <Menu.Navigator
          initialRouteName="Home"
        >
            <Menu.Screen 
              name="Home" 
              component={HomeScreen} 
              options={{
                tabBarIcon: ({color}) => (
                  <MaterialIcons name="home" color={color} size={26}/>
                ),
              }}
            />
            <Menu.Screen 
              name="Api" 
              component={ApiTestScreen}
              options={{
                tabBarIcon: ({color}) => (
                  <MaterialIcons name="api" color={color} size={26}/>
                ),
              }}
            />
            <Menu.Screen 
              name="Login" 
              component={LoginScreen}
              options={{
                tabBarIcon: ({color}) => (
                  <MaterialIcons name="login" color={color} size={26}/>
                ),
              }}
            />
        </Menu.Navigator>
      </NavigationContainer>
      </PaperProvider>
    );

  }
}
const Menu = createBottomTabNavigator();
