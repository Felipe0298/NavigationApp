import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Tab1Screen = () => {

    useEffect(() => {
        
        console.log("oli1")
      
    }, [])
    

    return (
        <View>
            <Text>Tab1Screen</Text>
        </View>
    );
}
