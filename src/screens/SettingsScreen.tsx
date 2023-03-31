import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

export const SettingsScreen = () => {

    const {authState} = useContext(AuthContext)

    return (
        <SafeAreaView>
            <Text>SettingsScreen777</Text>
            <Text>{JSON.stringify(authState,null,4)}</Text>

            {
                authState.favotireIcon? <Icon
                name={authState.favotireIcon}
                size={150}
                color={colores.primary}/>
                :null
            }

            
        </SafeAreaView>
    );
}
