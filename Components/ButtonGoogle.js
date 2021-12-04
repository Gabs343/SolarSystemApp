import React from 'react';

import { ButtonCustom } from './ButtonCustom.js';


import * as Google from 'expo-auth-session/providers/google';

export function ButtonGoogle({navigation}){

    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: `779959306407-u1p7pndro01tqg78le401o7h610d2nkd.apps.googleusercontent.com`,
        androidClientId: `779959306407-6fqup102d95lnno6o8lpkn060uecd59u.apps.googleusercontent.com`
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
