import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const Tab2Screen = () => {

    useEffect(() => {
        
        console.log("oli2")
      
    }, [])

    return (
        <View>
            <Text>Tab2Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({

});