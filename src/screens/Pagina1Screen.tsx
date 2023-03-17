import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any,any>{}

export const Pagina1Screen = ( {navigation}: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button title='Ir a pagina 2' onPress={()=> navigation.navigate("Pagina2Screen")}/>

            <Button title='Ir a persona' />

            <Text>Navegar con argumentos</Text>

            <TouchableOpacity onPress={()=> navigation.navigate("PersonaScreen",{
                id:1,
                nombre:"Pepa",
                equipo:"Boca"
            })}>
                <Text>Pepa</Text>
            </TouchableOpacity>


        </View>
    );
}
