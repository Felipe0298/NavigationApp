import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AuthContext } from '../context/AuthContext';

export const SettingsScreen = () => {

    const {authState} = useContext(AuthContext)

    return (
        <SafeAreaView>
            <Text>SettingsScreen777</Text>
            <Text>{JSON.stringify(authState,null,4)}</Text>
        </SafeAreaView>
    );
}
