import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumnsScreen } from '../screens/AlbumnsScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

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
              case "Chat":
                iconName = "chatbox-ellipses-outline"
                
                break;
                case "Contacts":
                  iconName = "people-outline"          
                  break;
                  case "Albumns":
                    iconName = "albums-outline"        
                  
                  break;
  
              }
              return <Icon name={iconName} size={25} color={color} />
          }
    })
        
}
    
    >
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albumns" component={AlbumnsScreen} />
    </Tab.Navigator>
  );
}