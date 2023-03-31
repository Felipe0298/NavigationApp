import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1Screen = () => {

    useEffect(() => {

        console.log("oli1")

    }, [])


    return (
        <View style={{ ...styles.globalMargin, flexDirection: "column" }}>
            <Text style={styles.title}>Icono</Text>
            <Text>
                <TouchableIcon name="airplane-outline"/>
                <TouchableIcon name="attach-outline"/>
                <TouchableIcon name="bonfire-outline"/>
                <TouchableIcon name="chatbubble-ellipses-outline"/>
                <TouchableIcon name="calculator-outline"/>
                <TouchableIcon name="leaf-outline"/>
                <TouchableIcon name="images-outline"/>
                <TouchableIcon name="leaf-outline"/>
            </Text>
        </View>
    );
}

