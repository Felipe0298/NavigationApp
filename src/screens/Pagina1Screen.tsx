import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> { }

export const Pagina1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina1Screen</Text>

            <Button title='Ir a pagina 2' onPress={() => navigation.navigate("Pagina2Screen")} />

            <Text>Navegar con argumentos</Text>

            <View style={{flexDirection:"row"}}>

                <TouchableOpacity style={{...styles.botonGrande, backgroundColor:"#5856D6"} } onPress={() => navigation.navigate("PersonaScreen", {
                    id: 1,
                    nombre: "Pepa",
                    equipo: "Boca"
                })}>
                    <Text style={styles.botonGrandeTexto}>Pepa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{...styles.botonGrande, backgroundColor:"#FF9427"}} onPress={() => navigation.navigate("PersonaScreen", {
                    id: 2,
                    nombre: "Juanfo",
                    equipo: "Boca"
                })}>
                    <Text style={styles.botonGrandeTexto}>Juanfo</Text>
                </TouchableOpacity>

            </View>



        </View>
    );
}
