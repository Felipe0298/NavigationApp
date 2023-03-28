import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { styles, colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTabNavigator } from './TopTabNavigator';



export const Tabs = () =>{
  return Platform.OS ==="ios"
  ? <TabsIOS/>
  : <TabsAndroid/>
}



const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{backgroundColor:colores.primary}}
    screenOptions={
      ({route}) =>({
        tabBarActiveTintColor:"green",
        tabBarStyle:{
          borderTopColor:colores.primary,
          borderTopWidth:0,
          elevation:0
        },
        tabBarIcon:({color, focused}) =>{
          
          let iconName: string ="";
          switch (route.name) {
            case "Tab1Screen":
              iconName = "T1"
              
              break;
              case "Tab2Screen":
                iconName = "T2"
                
                break;
                case "StackNavigator":
              iconName = "ST"
              break;

            }
            return <Text style={{color}}>{iconName}</Text>
        }
      })
    }
    
    >
      <BottomTabAndroid.Screen name="Tab1Screen" options={{title:"Tab1"}} component={Tab1Screen} />
      <BottomTabAndroid.Screen name="Tab2Screen" options={{title:"Tab2"}} component={TopTabNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator"  options={{title:"Stack"}} component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );

  
}



/* El commit de la seccion 121 es realmente el commit de la 122 */
const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      sceneContainerStyle={{ backgroundColor: "white" }}

      screenOptions={
        ({route}) =>({
          tabBarActiveTintColor:colores.primary,
          tabBarStyle:{
            borderTopColor:colores.primary,
            borderTopWidth:0,
            elevation:0
          },
          tabBarIcon:({color, focused, size}) =>{
            
            let iconName: string ="";
            switch (route.name) {
              case "Tab1Screen":
                iconName = "T1"
                
                break;
                case "Tab2Screen":
                  iconName = "T2"
                  
                  break;
                  case "StackNavigator":
                iconName = "ST"
                break;

              }
              return <Text style={{color}}>{iconName}</Text>
          }
        })
      }
      >

      {/* <Tab.Screen name="Tab1Screen" options={{title:"Tab1", tabBarIcon:(props)=><Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
      <BottomTabIOS.Screen name="Tab1Screen" options={{title:"Tab1"}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="Tab2Screen" options={{title:"Tab2"}} component={TopTabNavigator} />
      <BottomTabIOS.Screen name="StackNavigator"  options={{title:"Stack"}} component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}