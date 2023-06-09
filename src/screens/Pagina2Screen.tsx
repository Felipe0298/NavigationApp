import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import { styles } from '../theme/appTheme';
import { CommonActions } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/core';

export const Pagina2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
      navigator.setOptions({
        title:"Hola Mundo",
        headerBackTitle:"" //Interpreta el nombre del boton de regreso dependiendo del idioma del telefono
      })
     
    }, [])
    
    

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Pagina2Screen</Text>

            <Button title='Ir a pagina 3' onPress={()=> navigator.dispatch(CommonActions.navigate({name:"Pagina3Screen"}))}/>
        </View>
    );
}
