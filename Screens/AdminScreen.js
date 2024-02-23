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

//GUMAGANA ITO
// import React from 'react';
// import React, { useEffect, useState } from 'react';
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

// import { firebase } from '../config'; 

// const Tab = createBottomTabNavigator();

// const AdminScreen = () => {
  

//   const [currentUser, setCurrentUser] = useState(null); // State to track the current user
//   const [historyReadCount, setHistoryReadCount] = useState(0); // State to track the number of "read" fields in the "history" collection

//   useEffect(() => {
//     // Listen for authentication state changes and set the current user
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         setCurrentUser(user);
//         console.log("Currently logged in user's phone number is:", user.phoneNumber); // Log the current user's phone number
//         // Query the Firestore collection "history" based on the user's phone number
//         const historyRef = firebase.firestore().collection('history').where('requestByContactNumber', '==', user.phoneNumber);
//         // Subscribe to real-time updates from Firestore for the history documents
//         const unsubscribeHistory = historyRef.onSnapshot(snapshot => {
//           let readCount = 0;
//           snapshot.forEach(doc => {
//             const readStatus = doc.data().read; // Get the value of the 'read' field
//             console.log("Read status for document ID", doc.id, ":", readStatus);
//             // For each document in the history collection, check if the "read" field is present
//             if (doc.data().read !== undefined) {
//               readCount++;
//             }
//           });
//           setHistoryReadCount(readCount);
//           console.log("Number of 'read' fields in the 'history' collection:", readCount);
//         });
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     // Unsubscribe from auth state changes when component unmounts
//     return () => unsubscribe();
//   }, []);


  
//   // const [showIndicator, setShowIndicator] = useState(true); // State to track whether to show the history indicator
//   // const [showNotificationIndicator, setShowNotificationIndicator] = useState(true); // State to track whether to show the notification indicator

//   // useEffect(() => {
//   //   // Subscribe to real-time updates from Firestore for history
//   //   const unsubscribeHistory = firebase.firestore().collection('history').onSnapshot(snapshot => {
//   //     let allTrue = true; // Variable to track if all values are true
//   //     let hasUndefined = false; // Variable to track if any value is undefined
//   //     snapshot.forEach(doc => {
//   //       const readValue = doc.data().read;
//   //       if (readValue !== true) { // If any value is not true, set allTrue to false
//   //         allTrue = false;
//   //       }
//   //       if (readValue === undefined) { // If any value is undefined, set hasUndefined to true
//   //         hasUndefined = true;
//   //       }
//   //     });
//   //     setShowIndicator(!allTrue || hasUndefined); // Set showHistoryIndicator based on allTrue and hasUndefined values
//   //   });

//   //   // Subscribe to real-time updates from Firestore for notifications
//   //   const unsubscribeNotifications = firebase.firestore().collection('acceptedRequest').onSnapshot(snapshot => {
//   //     let allSuccessful = true; // Variable to track if all successful values are true
//   //     let hasUndefined = false;
//   //     snapshot.forEach(doc => {
//   //       const successfulValue = doc.data().successful;
//   //       if (successfulValue !== true) { // If any successful value is not true, set allSuccessful to false
//   //         allSuccessful = false;
//   //       }
//   //     });
//   //     setShowNotificationIndicator(!allSuccessful || hasUndefined); // Set showNotificationIndicator based on allSuccessful value
//   //   });

//   //   // Unsubscribe from real-time updates when the component unmounts
//   //   return () => {
//   //     unsubscribeHistory();
//   //     unsubscribeNotifications();
//   //   };
//   // }, []);


  
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
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Entypo name="bookmark" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="Notification" component={NotificationScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Ionicons name="notifications" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* {showNotificationIndicator && <View style={styles.indicator}></View>} */}
//                 {/* <View style={styles.indicator}></View> */}
             
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="Home" component={HomeScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Entypo name="home" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="History" component={HistoryScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <FontAwesome name="history" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* {showIndicator && <View style={styles.indicator}></View>}  */}
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="User" component={UserScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <FontAwesome name="user" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
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
//   indicator: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: 'red',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },


// });

// export default AdminScreen;





// import React, { useEffect, useState } from 'react';
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

// import { firebase } from '../config'; 

// const Tab = createBottomTabNavigator();

// const AdminScreen = () => {
  

//   const [currentUser, setCurrentUser] = useState(null); // State to track the current user
//   const [historyReadCount, setHistoryReadCount] = useState(0); // State to track the number of "read" fields in the "history" collection

//   useEffect(() => {
//     // Listen for authentication state changes and set the current user
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         setCurrentUser(user);
//         console.log("Currently logged in user's phone number is:", user.phoneNumber); // Log the current user's phone number
//         // Query the Firestore collection "history" based on the user's phone number
//         const historyRef = firebase.firestore().collection('history').where('requestByContactNumber', '==', user.phoneNumber);
//         // Subscribe to real-time updates from Firestore for the history documents
//         const unsubscribeHistory = historyRef.onSnapshot(snapshot => {
//           let readCount = 0;
//           snapshot.forEach(doc => {
//             const readStatus = doc.data().read; // Get the value of the 'read' field
//             console.log("Read status for document ID", doc.id, ":", readStatus);
//             // For each document in the history collection, check if the "read" field is present
//             if (doc.data().read !== undefined) {
//               readCount++;
//             }
//           });
//           setHistoryReadCount(readCount);
//           console.log("Number of 'read' fields in the 'history' collection:", readCount);
//         });
//       } else {
//         setCurrentUser(null);
//       }
//     });

//     // Unsubscribe from auth state changes when component unmounts
//     return () => unsubscribe();
//   }, []);



  
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
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Entypo name="bookmark" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="Notification" component={NotificationScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Ionicons name="notifications" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* {showNotificationIndicator && <View style={styles.indicator}></View>} */}
//                 {/* <View style={styles.indicator}></View> */}
             
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="Home" component={HomeScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <Entypo name="home" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="History" component={HistoryScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <FontAwesome name="history" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* {showIndicator && <View style={styles.indicator}></View>}  */}
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
//           }}
//         />
//         <Tab.Screen name="User" component={UserScreen} 
//           options={{
//             headerShown: false,
//             tabBarIcon: ({ focused }) => (
//               <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//                 <FontAwesome name="user" size={24} color={focused ? '#3085C3' : '#111'} />
//                 {/* <View style={styles.indicator}></View> */}
//               </View>
//             )
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
//   indicator: {
//     position: 'absolute',
//     top: -4,
//     right: -4,
//     backgroundColor: 'red',
//     width: 8,
//     height: 8,
//     borderRadius: 4,
//   },


// });

// export default AdminScreen;

// gumagana na dito young indicator sa history
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
  const [currentUser, setCurrentUser] = useState(null);
  const [historyReadCount, setHistoryReadCount] = useState(0);
  const [allLogsRead, setAllLogsRead] = useState(false);
  const [allNotificationsSuccessful, setAllNotificationsSuccessful] = useState(false);
  
 

  useEffect(() => { 
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setCurrentUser(user);
        console.log("Currentlyasdsdlogged in user contact number:", user.phoneNumber);
        const historyRef = firebase.firestore().collection('history').where('requestByContactNumber', '==', user.phoneNumber);
        const unsubscribeHistory = historyRef.onSnapshot(snapshot => {
          let readCount = 0;
          let allRead = true;
          let hasUndefined = false; // Define hasUndefined here
          snapshot.forEach(doc => {
            const readStatus = doc.data().read;
            const successfulStatus = doc.data().successful;
            if (doc.data().read !== undefined) {
              readCount++;
              if (!readStatus) {
                allRead = false;
              }
            } else {
              hasUndefined = true;
            }
              // console.log("Successful Status:", successfulStatus); 
            
          });
          setHistoryReadCount(readCount);
          if (hasUndefined) {
            setAllLogsRead(false);
          } else {
            setAllLogsRead(allRead);
          }
        });

          // Query accepted requests for the current user
      const acceptedRequestsRef = firebase.firestore().collection('acceptedRequest').where('requestByContactNumber', '==', user.phoneNumber);
      const unsubscribeAcceptedRequests = acceptedRequestsRef.onSnapshot(snapshot => {
        let allSuccessful = true;
        snapshot.forEach(doc => {
          const successfulStatus = doc.data().successful;
            if (!successfulStatus) {
              allSuccessful = false;
          // console.log("Accepted Request ID:", doc.id);
            }
        });
        setAllNotificationsSuccessful(allSuccessful);
      });

      return () => {
        unsubscribeHistory(); // Unsubscribe from history snapshot listener
        unsubscribeAcceptedRequests(); // Unsubscribe from accepted requests snapshot listener
      };
    } else {
      setCurrentUser(null);
    }
  });

    //     return () => unsubscribeHistory(); // Unsubscribe from snapshot listener
        
    //   } else {
    //     setCurrentUser(null);
    //   }
    // });

    return () => unsubscribe();
  }, []);
//tama sa taas ko





  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: { backgroundColor: '#ffd702' },
        }}
      >
        <Tab.Screen name="Tricycle" component={TricycleScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="bookmark" size={24} color={focused ? 'blue' : '#111'} />
              </View>
            )
          }}
        />
        <Tab.Screen name="Notification" component={NotificationScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="notifications" size={24} color={focused ? 'blue' : '#111'} />
                {!allNotificationsSuccessful && <View style={styles.indicator}></View>}
              </View>
            )
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name="home" size={24} color={focused ? 'blue' : '#111'} />
              </View>
            )
          }}
        />
        <Tab.Screen name="History" component={HistoryScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name="history" size={24} color={focused ? 'blue' : '#111'} />
                {!allLogsRead && <View style={styles.indicator}></View>}
              </View>
            )
          }}
        />
        <Tab.Screen name="User" component={UserScreen} 
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <FontAwesome name="user" size={24} color={focused ? 'blue' : '#111'} />
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
