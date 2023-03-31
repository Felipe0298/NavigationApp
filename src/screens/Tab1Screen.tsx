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
                <TouchableIcon iconName="airplane-outline"/>
                <TouchableIcon iconName="attach-outline"/>
                <TouchableIcon iconName="bonfire-outline"/>
                <TouchableIcon iconName="chatbubble-ellipses-outline"/>
                <TouchableIcon iconName="calculator-outline"/>
                <TouchableIcon iconName="leaf-outline"/>
                <TouchableIcon iconName="images-outline"/>
                <TouchableIcon iconName="leaf-outline"/>
            </Text>
        </View>
    );
}

