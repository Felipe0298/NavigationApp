import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumnsScreen } from '../screens/AlbumnsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator =()=> {

    const {top}=useSafeAreaInsets()
  return (
    <Tab.Navigator
    style={{paddingTop:top}}
    sceneContainerStyle={{
        backgroundColor:"white"
    }}
    screenOptions={({route})=>({
        tabBarPressColor:colores.primary,
            tabBarShowIcon:true,
        tabBarIndicatorStyle:{
            backgroundColor:colores.primary
        },
        tabBarStyle:{
            borderTopWidth:0,
              elevation:0
        },
    
        tabBarIcon:({color, focused}) =>{
          
            let iconName: string ="";
            switch (route.name) {
              case "ChatScreen":
                iconName = "CH"
                
                break;
                case "ContactsScreen":
                  iconName = "CO"
                  
                  break;
                  case "AlbumnsScreen":
                iconName = "AL"
                break;
  
              }
              return <Text style={{color}}>{iconName}</Text>
          }
    })
        
}
    
    >
      <Tab.Screen name="ChatScreen" component={ChatScreen} />
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="AlbumnsScreen" component={AlbumnsScreen} />
    </Tab.Navigator>
  );
}