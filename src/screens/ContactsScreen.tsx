import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { Button } from 'react-native';
import { AuthContext, AuthState } from '../context/AuthContext';

export const ContactsScreen = () => {

    const {signIn, authState} = useContext(AuthContext)
    console.log(authState)

    
    

    return (
        <View style={styles.globalMargin}>
            <Text>ContactsScreen</Text>
            {(authState.isLoggedIn == false)?<Button title='SignIn' onPress={signIn}/>:null}
        </View>
    );
}
