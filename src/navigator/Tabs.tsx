import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { styles, colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

/* El commit de la seccion 121 es realmente el commit de la 122 */
export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}
      screenOptions={{
        tabBarActiveTintColor: colores.primary,
        tabBarStyle: {
          //borderTopColor:colores.primary,
          borderTopWidth: 0,
          elevation: 0                                 //borderTopWidth y elevation son para quitar la linea de los tabs
        }
      }}>

      <Tab.Screen name="Tab1Screen" options={{title:"Tab1"}} component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" options={{title:"Tab2"}} component={Tab2Screen} />
      <Tab.Screen name="StackNavigator"  options={{title:"Stack"}} component={StackNavigator} />
    </Tab.Navigator>
  );
}