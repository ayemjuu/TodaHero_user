import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './BottomNav/HomeScreen';
import HistoryScreen from './BottomNav/HistoryScreen';
import NotificationScreen from './BottomNav/NotificationScreen';
import TricycleScreen from './BottomNav/TricycleScreen';
import UserScreen from './BottomNav/UserScreen';

import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      
      <Tab.Navigator
        
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#3085C3', // Color when tab is active
          tabBarInactiveTintColor: 'black', // Color when tab is inactive
          tabBarStyle: { backgroundColor: '#FDFFAB' }, // Set your desired color
        }}
      >
        <Tab.Screen name="Tricycle" component={TricycleScreen} 
        options={{headerShown: false,
          tabBarIcon: ({focused}) =>{

            return (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Entypo name="bookmark" size={24} color={focused? '#3085C3': '#111'} />
            
            </View>
            )
          }
        }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen} 
          options={{headerShown: false,
            tabBarIcon: ({focused}) =>{
  
              return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Ionicons name="notifications" size={24} color={focused? '#3085C3': '#111'} />
                
              
              </View>
              )
            }
            
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} 
        
        options={{headerShown: false,
          tabBarIcon: ({focused}) =>{

            return (
              <View
              style={{
                top: Platform.OS =='ios' ? -10 : -20,
                width: Platform.OS == 'ios' ? 50 : 60,
                height: Platform.OS == 'ios' ? 50 : 60,
                borderRadius: Platform.OS == 'ios' ? 25 : 30,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'pink',
              }}
              >
                <Entypo name="home" size={24} color={focused? '#3085C3': '#111'} />
                


              </View>
            )
          }
        }}
        />
        <Tab.Screen name="History" component={HistoryScreen} 
           options={{headerShown: false,
            tabBarIcon: ({focused}) =>{
  
              return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="history" size={24} color={focused? '#3085C3': '#111'}/>
              
              </View>
              )
            }
          }}
        />

        <Tab.Screen name="User" component={UserScreen} 
           options={{headerShown: false,
            tabBarIcon: ({focused}) =>{
  
              return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <FontAwesome name="user" size={24} color={focused? '#3085C3': '#111'} />
              
              </View>
              )
            }
          }}
        />
      </Tab.Navigator>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'green'
    
  },


});

export default AdminScreen;
