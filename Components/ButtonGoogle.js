import React from 'react';

import { ButtonCustom } from './ButtonCustom.js';


import * as Google from 'expo-auth-session/providers/google';

export function ButtonGoogle({navigation}){

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: `.apps.googleusercontent.com`,
        androidClientId: `.apps.googleusercontent.com`
    });

    React.useEffect( () => {
        if(response?.type === "success"){
            console.log(response);
            navigation.navigate("Home", {auth: response.authentication})
        }
    }, [response]);

   
    return(     
        <ButtonCustom title="logging with google" onPress={ () =>{ promptAsync()} }/>
    );
       
}
