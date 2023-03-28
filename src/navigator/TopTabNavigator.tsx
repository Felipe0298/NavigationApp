import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumnsScreen } from '../screens/AlbumnsScreen';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator =()=> {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumnsScreen" component={AlbumnsScreen} />
    </Tab.Navigator>
  );
}