import {StyleSheet} from 'react-native';

export const colores = {
    primary:"#5856D6"
}

export const styles = StyleSheet.create({
    globalMargin:{
        marginHorizontal:20
    },
    title:{
        fontSize:50,
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:"red",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",
        margin:10
    },
    botonGrandeTexto:{
        color:"white",
        fontWeight:"bold",
        fontSize:18
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:10
    },
    avatarContainer:{
        alignItems:"center",
    },
    menuContainer:{
        marginVertical:30,
        alignItems:"center",
    },
    menuTexto:{
        fontSize:20
    },
    menuBoton:{
        marginVertical:10
    }
});