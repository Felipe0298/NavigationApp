import React, { useEffect } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import { RouteStackParams } from '../navigator/StackNavigator';

interface RouterParams {
    id:number,
    nombre: string
}

interface Props extends StackScreenProps<RouteStackParams,"PersonaScreen">{}; //El primer nombre el el de la interface creada en el StackNavigator
                                                                              //y el segundo es el de la ruta en la que estamos, siempre entre comillas ""
export const PersonaScreen = ({route, navigation}: Props) => {

    const params = route.params as RouterParams
    
    useEffect(() => {
        navigation.setOptions({
            title:params.nombre  //El ! sirve para decirle a typescript que confie en mi y me deje pasar esa variable
        })
        
    }, [])
    
    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params,null, 3)
                }
            </Text>
        </View>
    );
}
