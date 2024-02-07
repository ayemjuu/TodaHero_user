// import React from 'react';
// import { View, Text, StyleSheet, Platform } from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from './BottomNav/HomeScreen';
// import HistoryScreen from './BottomNav/HistoryScreen';
// import NotificationScreen from './BottomNav/NotificationScreen';
// import TricycleScreen from './BottomNav/TricycleScreen';
// import UserScreen from './BottomNav/UserScreen';

// import { Entypo } from '@expo/vector-icons';
// import { Ionicons } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';

// const Tab = createBottomTabNavigator();

// const AdminScreen = () => {
//   return (
//     <View style={styles.container}>
      
//       <Tab.Navigator
        
//         initialRouteName="Home"
//         screenOptions={{
//           tabBarActiveTintColor: '#3085C3', // Color when tab is active
//           tabBarInactiveTintColor: 'black', // Color when tab is inactive
//           tabBarStyle: { backgroundColor: '#FDFFAB' }, // Set your desired color
//         }}
//       >
//         <Tab.Screen name="Tricycle" component={TricycleScreen} 
//         options={{headerShown: false,
//           tabBarIcon: ({focused}) =>{

//             return (
//             <View style={{alignItems: 'center', justifyContent: 'center'}}>
//               <Entypo name="bookmark" size={24} color={focused? '#3085C3': '#111'} />
            
//             </View>
//             )
//           }
//         }}
//         />
//         <Tab.Screen name="Notification" component={NotificationScreen} 
//           options={{headerShown: false,
//             tabBarIcon: ({focused}) =>{
  
//               return (
//               <View style={{alignItems: 'center', justifyContent: 'center'}}>
//                 <Ionicons name="notifications" size={24} color={focused? '#3085C3': '#111'} />
                
              
//               </View>
//               )
//             }
            
//           }}
//         />
//         <Tab.Screen name="Home" component={HomeScreen} 
        
//         options={{headerShown: false,
//           tabBarIcon: ({focused}) =>{

//             return (
//               <View
//               style={{
//                 top: Platform.OS =='ios' ? -10 : -20,
//                 width: Platform.OS == 'ios' ? 50 : 60,
//                 height: Platform.OS == 'ios' ? 50 : 60,
//                 borderRadius: Platform.OS == 'ios' ? 25 : 30,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 backgroundColor: 'pink',
//               }}
//               >
//                 <Entypo name="home" size={24} color={focused? '#3085C3': '#111'} />
                


//               </View>
//             )
//           }
//         }}
//         />
//         <Tab.Screen name="History" component={HistoryScreen} 
//            options={{headerShown: false,
//             tabBarIcon: ({focused}) =>{
  
//               return (
//               <View style={{alignItems: 'center', justifyContent: 'center'}}>
//                 <FontAwesome name="history" size={24} color={focused? '#3085C3': '#111'}/>
              
//               </View>
//               )
//             }
//           }}
//         />

//         <Tab.Screen name="User" component={UserScreen} 
//            options={{headerShown: false,
//             tabBarIcon: ({focused}) =>{
  
//               return (
//               <View style={{alignItems: 'center', justifyContent: 'center'}}>
//                 <FontAwesome name="user" size={24} color={focused? '#3085C3': '#111'} />
              
//               </View>
//               )
//             }
//           }}
//         />
//       </Tab.Navigator>
     
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
    
//     flex: 1,
//     justifyContent: 'center',
//     backgroundColor: 'green'
    
//   },


// });

// export default AdminScreen;


// import React from 'react';
import React, { useEffect, useState } from 'react';
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

import { firebase } from '../config'; 

const Tab = createBottomTabNavigator();

const AdminScreen = () => {


  // useEffect(() => {
  //   // Fetch data from Firestore
  //   const fetchHistoryData = async () => {
  //     try {
  //       const historyRef = firebase.firestore().collection('history'); // Reference to the history collection
  //       const snapshot = await historyRef.get(); // Get all documents in the collection
  //       snapshot.forEach(doc => {
  //         // Iterate through each document and log the "read" field
  //         console.log(doc.data().read);
  //       });
  //     } catch (error) {
  //       console.error('Error fetching history:', error);
  //     }
  //   };

  //   fetchHistoryData(); // Call the function to fetch history data when the component mounts
  // }, []); // Empty dependency array ensures this effect runs only once after initial render


  // const [showIndicator, setShowIndicator] = useState(true); // State to track whether to show the indicator




  // const [showIndicator, setShowIndicator] = useState(true); // State to track whether to show the indicator
 

  // useEffect(() => {
  //   // Subscribe to real-time updates from Firestore
  //   const unsubscribe = firebase.firestore().collection('history').onSnapshot(snapshot => {
  //     let allTrue = true; // Variable to track if all values are true
  //     let hasUndefined = false; // Variable to track if any value is undefined
  //     snapshot.forEach(doc => {
  //       const readValue = doc.data().read;
  //       if (readValue !== true) { // If any value is not true, set allTrue to false
  //         allTrue = false;
  //       }
  //       if (readValue === undefined) { // If any value is undefined, set hasUndefined to true
  //         hasUndefined = true;
  //       }
  //       console.log(readValue);
  //     });
  //     setShowIndicator(!allTrue || hasUndefined); // Set showIndicator based on allTrue and hasUndefined values
  //   });

  //   // Unsubscribe from real-time updates when the component unmounts
  //   return () => unsubscribe();
    

    
  // }, []); // Empty dependency array ensures this effect runs only once after initial render

  const [showIndicator, setShowIndicator] = useState(true); // State to track whether to show the history indicator
  const [showNotificationIndicator, setShowNotificationIndicator] = useState(true); // State to track whether to show the notification indicator

  useEffect(() => {
    // Subscribe to real-time updates from Firestore for history
    const unsubscribeHistory = firebase.firestore().collection('history').onSnapshot(snapshot => {
      let allTrue = true; // Variable to track if all values are true
      let hasUndefined = false; // Variable to track if any value is undefined
      snapshot.forEach(doc => {
        const readValue = doc.data().read;
        if (readValue !== true) { // If any value is not true, set allTrue to false
          allTrue = false;
        }
        if (readValue === undefined) { // If any value is undefined, set hasUndefined to true
          hasUndefined = true;
        }
      });
      setShowIndicator(!allTrue || hasUndefined); // Set showHistoryIndicator based on allTrue and hasUndefined values
    });

    // Subscribe to real-time updates from Firestore for notifications
    const unsubscribeNotifications = firebase.firestore().collection('acceptedRequest').onSnapshot(snapshot => {
      let allSuccessful = true; // Variable to track if all successful values are true
      let hasUndefined = false;
      snapshot.forEach(doc => {
        const successfulValue = doc.data().successful;
        if (successfulValue !== true) { // If any successful value is not true, set allSuccessful to false
          allSuccessful = false;
        }
      });
      setShowNotificationIndicator(!allSuccessful || hasUndefined); // Set showNotificationIndicator based on allSuccessful value
    });

    // Unsubscribe from real-time updates when the component unmounts
    return () => {
      unsubscribeHistory();
      unsubscribeNotifications();
    };
  }, []);


  
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
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="bookmark" size={24} color={focused ? '#3085C3' : '#111'} />
                {/* <View style={styles.indicator}></View> */}
              </View>
            )
          }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="notifications" size={24} color={focused ? '#3085C3' : '#111'} />
                {showNotificationIndicator && <View style={styles.indicator}></View>}
                {/* <View style={styles.indicator}></View> */}
             
              </View>
            )
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="home" size={24} color={focused ? '#3085C3' : '#111'} />
                {/* <View style={styles.indicator}></View> */}
              </View>
            )
          }}
        />
        <Tab.Screen name="History" component={HistoryScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name="history" size={24} color={focused ? '#3085C3' : '#111'} />
                {showIndicator && <View style={styles.indicator}></View>} 
                {/* <View style={styles.indicator}></View> */}
              </View>
            )
          }}
        />
        <Tab.Screen name="User" component={UserScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name="user" size={24} color={focused ? '#3085C3' : '#111'} />
                {/* <View style={styles.indicator}></View> */}
              </View>
            )
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
  indicator: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4,
  },


});

export default AdminScreen;


