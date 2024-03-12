


//START

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { firebase } from '../../config';
// import { useNavigation } from '@react-navigation/native';

// const HistoryScreen = () => {
  
//   const [historyData, setHistoryData] = useState([]);
//   const [userData, setUserData] = useState(null);
//   const navigation = useNavigation(); // Initialize navigation


  
//   //GUMAGANA ITO 
//   useEffect(() => {
//     const fetchUserData = async () => {
//       const contactNumber = firebase.auth().currentUser.phoneNumber;
//       const usersCollection = firebase.firestore().collection('Users');

//       try {
//         const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
//         if (!querySnapshot.empty) {
//           const user = querySnapshot.docs[0].data();
//           setUserData(user);

//           const unsubscribe = firebase.firestore().collection('history')
//             .where('requestByContactNumber', '==', contactNumber)

           
//             .onSnapshot(snapshot => {
//               const data = [];
//               snapshot.forEach(doc => {
//                 const historyItem = doc.data();
//                 // data.push({ id: doc.id, ...historyItem, read: false  });
//                 data.push({ id: doc.id, ...historyItem });
//               });

        

//               // Sort data based on timeAccepted
//             data.sort((a, b) => b.rideEnded - a.rideEnded);
//             // console.log(data);

//               setHistoryData(data);
//               // console.log("Number of history items:", data.length);
//               // data.forEach(item => {
//               //   // console.log("History item:", item.id, "Read:", item.read); // Log each history item's ID and "read" value
//               // });
//             });

//           return () => {
//             unsubscribe();
//           };
//         }
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     fetchUserData();
//   }, []);

// // ...GUMAGANA ITO

// //FOR DEBUGGING LANF TO SA BABA
// // useEffect(() => {
// //   const fetchUserData = async () => {
// //     const currentUser = firebase.auth().currentUser;

// //     if (currentUser) {
// //       const contactNumber = currentUser.phoneNumber;
// //       const usersCollection = firebase.firestore().collection('Users');

// //       try {
// //         const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
// //         if (!querySnapshot.empty) {
// //           const user = querySnapshot.docs[0].data();
// //           setUserData(user);

// //           const unsubscribe = firebase.firestore().collection('history')
// //             .where('requestByContactNumber', '==', contactNumber)
// //             .onSnapshot(snapshot => {
// //               const data = [];
// //               snapshot.forEach(doc => {
// //                 const historyItem = doc.data();
// //                 data.push({ id: doc.id, ...historyItem, read: false });
// //               });

// //               data.sort((a, b) => b.rideEnded - a.rideEnded);
// //               setHistoryData(data);
// //             });

// //           return () => {
// //             unsubscribe();
// //           };
// //         }
// //       } catch (error) {
// //         console.error('Error fetching user data:', error);
// //       }
// //     } else {
// //       // If user is not logged in with a phone number, provide a default or placeholder number
// //       const defaultPhoneNumber = '+639984367198'; // Replace with your desired default number
// //       const unsubscribe = firebase.firestore().collection('history')
// //         .where('requestByContactNumber', '==', defaultPhoneNumber)
// //         .onSnapshot(snapshot => {
// //           const data = [];
// //           snapshot.forEach(doc => {
// //             const historyItem = doc.data();
// //             data.push({ id: doc.id, ...historyItem, read: false });
// //           });

// //           data.sort((a, b) => b.rideEnded - a.rideEnded);
// //           setHistoryData(data);
// //         });

// //       return () => {
// //         unsubscribe();
// //       };
// //     }
// //   };

// //   fetchUserData();
// // }, []);

// // UNTIL THIS... OKEH?



//   // const handleListItemPress = (id) => {

//   //    // Mark the history item as read when clicked
//   //    const updatedHistoryData = historyData.map(item =>
//   //     item.id === id ? { ...item, read: true } : item
//   //   );
//   //   setHistoryData(updatedHistoryData)
    

//   //   // Navigate to HistoryDetail screen, pass id or any necessary data as params
//   //   navigation.navigate('HistoryDetail', { itemId: id });
//   // };

//   //SAVE THE HISTORY WHEN CLICKED
//   //may bug pa sa history notification:<
//   const handleListItemPress = async (id) => {
//     try {
//       //balik mo nalang ito pag di gumana yung sa history ahahhah
//       // Mark the history item as read locally
//       const updatedHistoryData = historyData.map(item =>
//         item.id === id ? { ...item, read: true } : item
//       );
//       setHistoryData(updatedHistoryData);
  
//       // Update the 'read' field in Firestore
//       await firebase.firestore().collection('history').doc(id).update({ read: true });
  
//       // Navigate to HistoryDetail screen, pass id or any necessary data as params
//       navigation.navigate('HistoryDetail', { itemId: id });
//     } catch (error) {
//       console.error('Error updating document:', error);
//     }
//   };



//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>HISTORY</Text>
//         <ScrollView style={styles.scroll}>
//           {historyData.map(historyItem => (
//             // <View key={historyItem.id} style={styles.lists}>
//             //   <TouchableOpacity key={historyItem.id} onPress={() => handleListItemPress(historyItem.id)}></TouchableOpacity>
//             //     <Text style={styles.itemText}>ID: {historyItem.id}</Text>

//             //     <Text style={styles.itemText}>{historyItem.description}</Text>
//             // </View>


//             <TouchableOpacity key={historyItem.id} onPress={() => handleListItemPress(historyItem.id)}>
//               {/* <View style={styles.lists}> */}
//               <View style={styles.lists}>
//                 {/* <Text style={styles.itemText}>ID: {historyItem.id}</Text> */}
//                 <Text style={styles.itemText}>Ride Complete!</Text>

//                   <View style={styles.driverContainer}>
//                     <Text style={styles.driverName}>{historyItem.driverName}</Text>
//                   </View>

//                   <View style={styles.timeContainer}>
//                     <Text style={styles.time}>{formatTimestamp(historyItem.rideEnded)}</Text>
//                   </View>

//                   {/* <View style={styles.indicator} /> */}
//                   {/* { !historyItem.read && <View style={styles.indicator} /> } */}
//                  {/* <View style={styles.indicator} /> */}
//                  {/* {!historyItem.read && <View style={styles.indicator} />}  */}
//                  {!historyItem.read && <View style={styles.indicatorRead} />}
//                  {/* may bug */}

//                 <Text style={styles.itemText}>{historyItem.description}</Text>
//               </View>
//             </TouchableOpacity>

            
//           ))}
//         </ScrollView>
//       </View>
//     </View>
//   );
// };

// // const formatTimestamp = timestamp => {
// //   if (!timestamp) return null;
// //   if (timestamp.toDate) {
// //     const date = timestamp.toDate();
// //     return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// //   } else if (timestamp instanceof Date) {
// //     return timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
// //   } else {
// //     return String(timestamp);
// //   }
// // };

// const formatTimestamp = timestamp => {
//   if (!timestamp) return null;

//   const rideEndedDate = timestamp.toDate ? timestamp.toDate() : timestamp;

//   const today = new Date();
//   const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
//   const rideEndedDay = new Date(rideEndedDate.getFullYear(), rideEndedDate.getMonth(), rideEndedDate.getDate());

//   if (rideEndedDay < todayDate) {
//     // If ride ended time is not today, return day name
//     const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//     return days[rideEndedDay.getDay()];
//   } else {
//     // If ride ended time is today, return time
//     return rideEndedDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
//   }
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   seccontainer: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffd702',
//     height: 500,
//     width: 300,
//     marginTop: -30,
//     paddingBottom:25,
//     borderRadius:10
//   },
//   text: {
//     // fontSize: 30,
//     // marginBottom: 30,
//     fontSize: 25,
//     marginBottom: 10,
//     marginTop:20
    
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
//   scroll: {
    
//   },
//   lists: {
//     marginTop: 5,
//     backgroundColor: 'lightblue',
//     height: 75,
//     width: 280,
//     borderRadius: 10,
//     // justifyContent: 'center',
//     // alignItems: 'center',
//   },
//   itemText: {
//     textAlign: 'center',
//     marginTop: 35,
   
//     marginRight:165
//   },

//   timeContainer: {
//     position: 'absolute',
//     bottom: 10, // Adjust as needed
//     right: 10, // Adjust as needed
//   },
//   time: {
//     fontWeight: 'bold', // Example styling
//     marginLeft: 10, // Example positioning
//     fontSize:12
//   },

//   driverContainer: {
//     position: 'absolute',
//     top: 10, // Adjust as needed
//     left: 10, // Adjust as needed
//   },
//   driverName: {
//     textAlign: 'center',
//     fontSize: 14,
//     fontWeight:'bold'
//   },

//   indicator: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     width: 10,
//     height: 10,
//     backgroundColor: 'blue',
//     borderRadius: 5,
//   },

//   indicatorRead: {
//     position: 'absolute',
//     top: 5,
//     right: 5,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'red'
//   }, 
  
// });

// export default HistoryScreen;

//working aboive 3-8-24


//loading indicator:


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native';

const HistoryScreen = () => {
  
  const [historyData, setHistoryData] = useState([]);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // State variable to track loading status
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    const fetchUserData = async () => {
      const contactNumber = firebase.auth().currentUser.phoneNumber;
      const usersCollection = firebase.firestore().collection('Users');

      try {
        const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
        if (!querySnapshot.empty) {
          const user = querySnapshot.docs[0].data();
          setUserData(user);

          const unsubscribe = firebase.firestore().collection('history')
            .where('requestByContactNumber', '==', contactNumber)
            .onSnapshot(snapshot => {
              const data = [];
              snapshot.forEach(doc => {
                const historyItem = doc.data();
                data.push({ id: doc.id, ...historyItem });
              });

              data.sort((a, b) => b.rideEnded - a.rideEnded);
              setHistoryData(data);
              setLoading(false); // Set loading to false when data is fetched
            });

          return () => {
            unsubscribe();
          };
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const handleListItemPress = async (id) => {
    try {
      const updatedHistoryData = historyData.map(item =>
        item.id === id ? { ...item, read: true } : item
      );
      setHistoryData(updatedHistoryData);
  
      await firebase.firestore().collection('history').doc(id).update({ read: true });
  
      navigation.navigate('HistoryDetail', { itemId: id });
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
        <Text style={styles.text}>HISTORY</Text>
        {loading ? ( // Display loading indicator if loading is true
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          // <ScrollView style={styles.scroll}>
          //   {historyData.map(historyItem => (
          //     <TouchableOpacity key={historyItem.id} onPress={() => handleListItemPress(historyItem.id)}>
          //       <View style={styles.lists}>
          //         <Text style={styles.itemText}>Ride Complete!</Text>
          //         <View style={styles.driverContainer}>
          //           <Text style={styles.driverName}>{historyItem.driverName}</Text>
          //         </View>
          //         <View style={styles.timeContainer}>
          //           <Text style={styles.time}>{formatTimestamp(historyItem.rideEnded)}</Text>
          //         </View>
          //         {!historyItem.read && <View style={styles.indicatorRead} />}
          //         <Text style={styles.itemText}>{historyItem.description}</Text>
          //       </View>
          //     </TouchableOpacity>
          //   ))}
          // </ScrollView>

          <ScrollView style={styles.scroll}>
  {historyData.map(historyItem => (
    <TouchableOpacity key={historyItem.id} onPress={() => handleListItemPress(historyItem.id)}>
      <View style={styles.lists}>
        <Text style={styles.itemText}>
          {historyItem.report ? historyItem.report :' Ride Complete'}
        </Text>
        <View style={styles.driverContainer}>
          <Text style={styles.driverName}>{historyItem.driverName}</Text>
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>{formatTimestamp(historyItem.rideEnded)}</Text>
        </View>
        {!historyItem.read && <View style={styles.indicatorRead} />}
        <Text style={styles.itemText}>{historyItem.description}</Text>
      </View>
    </TouchableOpacity>
  ))}
</ScrollView>

        )}
      </View>
    </View>
  );
};

const formatTimestamp = timestamp => {
  if (!timestamp) return null;

  const rideEndedDate = timestamp.toDate ? timestamp.toDate() : timestamp;

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const rideEndedDay = new Date(rideEndedDate.getFullYear(), rideEndedDate.getMonth(), rideEndedDate.getDate());

  if (rideEndedDay < todayDate) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[rideEndedDay.getDay()];
  } else {
    return rideEndedDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  seccontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd702',
    height: 500,
    width: 300,
    marginTop: -30,
    paddingBottom:25,
    borderRadius:10
  },
  text: {
    fontSize: 25,
    marginBottom: 10,
    marginTop:20
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    marginTop: -50,
  },
  scroll: {
    
  },
  lists: {
    marginTop: 5,
    backgroundColor: 'lightblue',
    height: 75,
    width: 280,
    borderRadius: 10,
  },
  itemText: {
    textAlign: 'center',
    marginTop: 35,
    marginRight:165
  },
  timeContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  time: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize:12
  },
  driverContainer: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  driverName: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight:'bold'
  },
  indicatorRead: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red'
  }, 
});

export default HistoryScreen;
