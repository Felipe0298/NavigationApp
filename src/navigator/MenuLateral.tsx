import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View } from 'react-native';
import { Image } from 'react-native/Libraries/Image/Image';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const MenuLateral =() => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator 
    //screenOptions={{drawerPosition:"right"}}
    screenOptions={{drawerType:width >=768 ? "permanent" : "front"}}
    drawerContent={(props) => <MenuInterno {...props}/>}
    >
      <Drawer.Screen name="Home" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( props: DrawerContentComponentProps) =>{
  return (
    <DrawerContentScrollView>
      <View>
      <Image source={{
          uri:"https://thumbs.dreamstime.com/b/omita-al-avatar-placeholder-de-la-foto-icono-del-perfil-124557887.jpg"
        }}
        style={styles.avatar}/>
      </View>

    </DrawerContentScrollView>
  )
}