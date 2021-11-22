import React, { Component } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { HomeScreen } from './Screen/HomeScreen';
import { ApiTestScreen } from './Screen/ApiTestScreen';
import { LoginScreen } from './Screen/LoginScreen'; 

export default class App extends Component{
  constructor(){
    super();
    this.state={
      ...DefaultTheme,
      colors: {
        myOwnColor: 'white',
      },
    }

  }

  render(){
    let {theme} = this.state;
    return (
      <PaperProvider theme={theme}>
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
