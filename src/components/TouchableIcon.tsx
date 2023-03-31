import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';

interface Props {
    name: string;

}

export const TouchableIcon = ({name}:Props) => {
    return (
        <TouchableOpacity
        onPress={()=>console.log(name)}
        >
                <Icon name={name}
                size={50} 
                color={colores.primary} />
        </TouchableOpacity>
    );
}
