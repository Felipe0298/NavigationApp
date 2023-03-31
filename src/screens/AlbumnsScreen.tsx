import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumnsScreen = () => {

    const {logout, authState} = useContext(AuthContext)
    return (
        <View style={styles.globalMargin}>
            <Text>AlbumnsScreen</Text>
        {
            (authState.isLoggedIn == true) ? <Button title='logout' onPress={logout}/>
            : null
        }
            
        </View>
    );
}
