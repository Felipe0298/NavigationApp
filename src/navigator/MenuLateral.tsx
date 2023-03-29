import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View } from 'react-native';
import { styles, colores } from '../theme/appTheme';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { Tabs } from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

const Stack = createStackNavigator();


export const MenuLateral =() => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator 
    //screenOptions={{drawerPosition:"right"}}
    screenOptions={{drawerType:width >=768 ? "permanent" : "front"}}
    drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Tabs" component={Tabs}  />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( {navigation}: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>

      {/* Parte del avatar */}
      <View style={styles.avatarContainer}>
      <Image 
      source={{
        uri:"https://thumbs.dreamstime.com/b/default-avatar-profile-image-vector-social-media-user-icon-potrait-182347582.jpg"
      }}
      style={styles.avatar}
      />
      </View>

      {/* Opciones del menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={{...styles.menuBoton, flexDirection:"row"}} 
        onPress={()=> navigation.navigate("Tabs")}>

          <Icon name="cloud-outline" size={25} color={colores.primary} />
          <Text style={styles.menuTexto}>Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{...styles.menuBoton, flexDirection:"row"}}
        onPress={()=> navigation.navigate("Settings")}>
          <Icon name="settings-outline" size={25} color={colores.primary} />
          <Text style={styles.menuTexto}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}