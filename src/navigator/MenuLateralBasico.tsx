import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateralBasico =() => {

  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator 
    //screenOptions={{drawerPosition:"right"}}
    screenOptions={{drawerType:width >=768 ? "permanent" : "front"}}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}