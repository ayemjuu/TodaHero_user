// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const BookingScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>My Bookings</Text>
//       {/* Add your booking details rendering logic here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'white',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
// });

// export default BookingScreen;

//working bot without time sa list lang

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import { firebase } from '../../config'; // Import your firebase object

// const MyBookingsScreen = () => {
//   const navigation = useNavigation(); // Initialize navigation object
//   const [bookingIds, setBookingIds] = useState([]);

//   useEffect(() => {
//     const unsubscribe = firebase.firestore().collection('booking')
//     .orderBy('dateTime', 'desc') 
//       .onSnapshot(snapshot => {
//         const ids = [];
//         snapshot.forEach(doc => {
//           ids.push({ id: doc.id, data: doc.data() }); // Store both ID and data
//         });
//         setBookingIds(ids);
//       });

//     return () => unsubscribe();
//   }, []);

//   // Function to handle navigation to BookingDetailScreen
//   const handleBookingDetail = (bookingId) => {
//     navigation.navigate('BookingDetail', { bookingId });
//   };

//   return (
//     <View style={styles.container}>
//          <Image source={require('../../assets/logo.png')} style={styles.logo} />
//         <View style={styles.seccontainer}>
//         <Text style={styles.header}>BOOKINGS</Text>
//             <FlatList
//                 data={bookingIds}
//                 renderItem={({ item }) => (
//                 <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
//                     {/* <Text style={styles.item}> {item.id}</Text> */}
//                     <Text style={styles.item}> Booking Done</Text>
//                 </TouchableOpacity>
//                 )}
//                 keyExtractor={item => item.id}
//             />

//         </View>
//     </View>
//   );
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
//     backgroundColor: 'pink',
//     height: 500,
//     width: 300,
//     marginTop: -30,
//     paddingBottom:25,
//     borderRadius:10
    
//   },
  
//   header: {
//     fontSize: 30,
//     marginBottom: 10,
//     marginTop:20
//   },
//   item: {
//     marginTop:5,
//     backgroundColor:'lightblue',
//     height:75,
//     width:280,
//     borderRadius:10
//   },

//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default MyBookingsScreen;

//may time sa list
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import { firebase } from '../../config'; // Import your firebase object

// const MyBookingsScreen = () => {
//   const navigation = useNavigation(); // Initialize navigation object
//   const [bookingIds, setBookingIds] = useState([]);

//   useEffect(() => {
//     const unsubscribe = firebase.firestore().collection('booking')
//       .orderBy('dateTime', 'desc')
//       .onSnapshot(snapshot => {
//         const ids = [];
//         snapshot.forEach(doc => {
//           const data = doc.data();
//           const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
//           const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
//           ids.push({ id: doc.id, time: formattedTime }); // Store only the formatted time
//         });
//         setBookingIds(ids);
//       });

//     return () => unsubscribe();
//   }, []);

//   // Function to handle navigation to BookingDetailScreen
//   const handleBookingDetail = (bookingId) => {
//     navigation.navigate('BookingDetail', { bookingId });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.header}>BOOKINGS</Text>
//         <FlatList
//           data={bookingIds}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
//               <View style={styles.item}>
//                 <Text style={styles.itemText}>Booking Done</Text>
//                 {/* <Text style={styles.itemText}>{item.id}</Text> */}
//                 <Text style={styles.timeText}>{item.time}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={item => item.id}
//         />
//       </View>
//     </View>
//   );
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
//     backgroundColor: 'pink',
//     height: 500,
//     width: 300,
//     marginTop: -30,
//     paddingBottom: 25,
//     borderRadius: 10,
//   },
//   header: {
//     fontSize: 30,
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   item: {
//     marginTop: 5,
//     backgroundColor: 'lightblue',
//     height: 75,
//     width: 280,
//     borderRadius: 10,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     position: 'relative', // Use relative positioning for the container
//   },
//   itemText: {
//     fontSize: 16,
   
//   },
//   timeText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     position: 'absolute', // Use absolute positioning for the time text
//     bottom: 5, // Position it 5 units from the bottom
//     right: 10, // Position it 10 units from the right
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default MyBookingsScreen;

//console log number

// //gumagana iot 3-8-24
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import { firebase } from '../../config'; // Import your firebase object

// import { Ionicons } from '@expo/vector-icons';


// const MyBookingsScreen = () => {
//   const navigation = useNavigation(); // Initialize navigation object
//   const [bookingIds, setBookingIds] = useState([]);
//   const [userContact, setUserContact] = useState('');
  

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         // User is signed in.
//         setUserContact(user.phoneNumber);
//       } else {
//         // No user is signed in.
//         setUserContact('');
//       }
//     });

//     return () => unsubscribe();
//   }, []);



// // useEffect(() => {
// //     const unsubscribe = firebase.firestore().collection('booking')
// //       .orderBy('dateTime', 'desc')
// //       .onSnapshot(snapshot => {
// //         const ids = [];
// //         snapshot.forEach(doc => {
// //           const data = doc.data();
// //           const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
// //           const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
// //           // Check if userContact matches the contact number in the booking
// //           if (data.userContactNumber === userContact) {
// //             // ids.push({ id: doc.id, time: formattedTime }); //filter based on the contact number
// //             ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint });

// //           }
// //         });
// //         setBookingIds(ids);
// //       });
  
// //     return () => unsubscribe();
// //   }, [userContact]);
  

// useEffect(() => {
//   const unsubscribe = firebase.firestore().collection('booking')
//     .orderBy('dateTime', 'desc')
//     .onSnapshot(snapshot => {
//       const ids = [];
//       snapshot.forEach(doc => {
//         const data = doc.data();
//         const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
//         const now = new Date(); // Get current date
//         const isToday = now.toDateString() === dateTime.toDateString(); // Check if the booking is for today
//         let formattedTime;
//         if (isToday) {
//           formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
//         } else {
//           const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//           formattedTime = days[dateTime.getDay()]; // Get day of the week
//         }
//         // Check if userContact matches the contact number in the booking
//         if (data.userContactNumber === userContact) {
//           ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint });
//         }
//       });
//       setBookingIds(ids);
//     });

//   return () => unsubscribe();
// }, [userContact]);
  

//   // console.log("Currently logged in contact number:", userContact);

//   // Function to handle navigation to BookingDetailScreen
//   const handleBookingDetail = (bookingId) => {
//     navigation.navigate('BookingDetail', { bookingId });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//       <TouchableOpacity onPress={() => navigation.navigate('Tricycle')} style={styles.backButton}>
//           {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
//           <Ionicons name="arrow-back-sharp" size={35} color="black" />
//        </TouchableOpacity>
//         <Text style={styles.header}>BOOKINGS</Text>
//         <FlatList
//           data={bookingIds}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
//               <View style={styles.item}>
//                 {/* <Text style={styles.itemText}>Booking Done</Text> */}
//                 {/* <Text style={styles.itemText}>{item.id}</Text> */}
//                 <Text style={styles.dropOffText}> Drop-Off Point: {item.dropOffPoint}</Text>
//                 <Text style={styles.timeText}>{item.time}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={item => item.id}
//         />
//       </View>
//       {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
//           <Text style={styles.backButton}>Back to Admin</Text>
//        </TouchableOpacity> */}
//     </View>
//   );
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
//     paddingBottom: 25,
//     borderRadius: 10,
//   },
//   header: {
//     fontSize: 30,
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   item: {
//     marginTop: 5,
//     backgroundColor: 'lightblue',
//     height: 75,
//     width: 280,
//     borderRadius: 10,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     position: 'relative', // Use relative positioning for the container
//   },
//   itemText: {
//     fontSize: 14,
//     position: 'absolute',
//     bottom: 13,
//     left: 20,
//     fontWeight:'bold',
    
   
//   },
//   timeText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     position: 'absolute', // Use absolute positioning for the time text
//     bottom: 5, // Position it 5 units from the bottom
//     right: 10, // Position it 10 units from the right
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
//   dropOffText: {
//     fontSize: 16,
//    fontWeight:'bold',
//     position: 'absolute',
//     top: 28, // Position it 25 units from the bottom
//     left: 10, // Position it 10 units from the left
//     color: 'black',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//    },
// });

// export default MyBookingsScreen;




//galing kay ynna:

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import { firebase } from '../../config'; // Import your firebase object

// import { Ionicons } from '@expo/vector-icons';


// const MyBookingsScreen = () => {
//   const navigation = useNavigation(); // Initialize navigation object
//   const [bookingIds, setBookingIds] = useState([]);
//   const [userContact, setUserContact] = useState('');
  

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         // User is signed in.
//         setUserContact(user.phoneNumber);
//       } else {
//         // No user is signed in.
//         setUserContact('');
//       }
//     });

//     return () => unsubscribe();
//   }, []);



// // useEffect(() => {
// //     const unsubscribe = firebase.firestore().collection('booking')
// //       .orderBy('dateTime', 'desc')
// //       .onSnapshot(snapshot => {
// //         const ids = [];
// //         snapshot.forEach(doc => {
// //           const data = doc.data();
// //           const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
// //           const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
// //           // Check if userContact matches the contact number in the booking
// //           if (data.userContactNumber === userContact) {
// //             // ids.push({ id: doc.id, time: formattedTime }); //filter based on the contact number
// //             ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint });

// //           }
// //         });
// //         setBookingIds(ids);
// //       });
  
// //     return () => unsubscribe();
// //   }, [userContact]);
  

// useEffect(() => {
//   const unsubscribe = firebase.firestore().collection('booking')
//     .orderBy('dateTime', 'desc')
//     .onSnapshot(snapshot => {
//       const ids = [];
//       snapshot.forEach(doc => {
//         const data = doc.data();
//         const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
//         const now = new Date(); // Get current date
//         const isToday = now.toDateString() === dateTime.toDateString(); // Check if the booking is for today
//         let formattedTime;
//         if (isToday) {
//           formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
//         } else {
//           const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//           formattedTime = days[dateTime.getDay()]; // Get day of the week
//         }
//         // Check if userContact matches the contact number in the booking
//         if (data.userContactNumber === userContact) {
//           ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint, plateNumber: data.plateNumber, pickupPoint: data.pickupPoint });
//         }
//       });
//       setBookingIds(ids);
//     });

//   return () => unsubscribe();
// }, [userContact]);
  

//   // console.log("Currently logged in contact number:", userContact);

//   // Function to handle navigation to BookingDetailScreen
//   const handleBookingDetail = (bookingId) => {
//     navigation.navigate('BookingDetail', { bookingId });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//       <TouchableOpacity onPress={() => navigation.navigate('Tricycle')} style={styles.backButton}>
//           {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
//           <Ionicons name="arrow-back-sharp" size={35} color="black" />
//        </TouchableOpacity>
//         <Text style={styles.header}>BOOKINGS</Text>
//         <FlatList
//           data={bookingIds}
//           renderItem={({ item }) => (
//             <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
//               <View style={styles.item}>
//                 {/* <Text style={styles.itemText}>Booking Done</Text> */}
//                 {/* <Text style={styles.itemText}>{item.id}</Text> */}
//                 {/* <Text style={styles.itemText}>Pickup Point: {item.pickupPoint}</Text>
//                 <Text style={styles.dropOffText}> Drop-Off Point: {item.dropOffPoint}</Text> */}

//                 {/* <Text style={styles.itemText}>
//                 Pickup Point: {item.pickupPoint.length > 10 ? ${item.pickupPoint.slice(0, 10)}... : item.pickupPoint}
//             </Text>
//             <Text style={styles.dropOffText}>
//                 Drop-Off Point: {item.dropOffPoint.length > 10 ? ${item.dropOffPoint.slice(0, 10)}... : item.dropOffPoint}
//             </Text> */}
// {/* 
// <Text>
//     <Text style={styles.boldText}>Pickup Point:</Text> {item.pickupPoint.length > 10 ? ${item.pickupPoint.slice(0, 10)}... : item.pickupPoint}
// </Text>
// <Text>
//     <Text style={styles.boldText}>Drop-Off Point:</Text> {item.dropOffPoint.length > 10 ? ${item.dropOffPoint.slice(0, 10)}... : item.dropOffPoint}
// </Text> */}

// <Text>
//   <Text style={styles.boldText}>Pickup Point:</Text> {item.pickupPoint && item.pickupPoint.length > 10 ? `${item.pickupPoint.slice(0, 10)}...` : item.pickupPoint}
// </Text>
// <Text>
//   <Text style={styles.boldText}>Drop-Off Point:</Text> {item.dropOffPoint && item.dropOffPoint.length > 10 ? `${item.dropOffPoint.slice(0, 10)}...` : item.dropOffPoint}
// </Text>

//                 <Text style={styles.timeText}>{item.time}</Text>
//               </View>
//             </TouchableOpacity>
//           )}
//           keyExtractor={item => item.id}
//         />
//       </View>
//       {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
//           <Text style={styles.backButton}>Back to Admin</Text>
//        </TouchableOpacity> */}
//     </View>
//   );
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
//     paddingBottom: 25,
//     borderRadius: 10,
//   },
//   header: {
//     fontSize: 30,
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   item: {
//     marginTop: 5,
//     backgroundColor: 'lightblue',
//     height: 75,
//     width: 280,
//     borderRadius: 10,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     position: 'relative', // Use relative positioning for the container
//   },
//   itemText: {
//     fontSize: 16,
//     position: 'absolute',
//     bottom: 40,
//     left: 10,
//     // fontWeight:'bold',
    
   
//   },
//   timeText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     position: 'absolute', // Use absolute positioning for the time text
//     bottom: 5, // Position it 5 units from the bottom
//     right: 10, // Position it 10 units from the right
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
//   dropOffText: {
//     fontSize: 16,
//   //  fontWeight:'bold',
//     position: 'absolute',
//     top: 33, // Position it 25 units from the bottom
//     left: 10, // Position it 10 units from the left
//     color: 'black',
//   },
//   backButton: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//    },
//    // Other styles...
//    boldText: {
//     fontWeight: 'bold',
// },
// });

// export default MyBookingsScreen;
//working above 3-8-24
//may indicator

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
// import { firebase } from '../../config'; // Import your firebase object

// import { Ionicons } from '@expo/vector-icons';


// const MyBookingsScreen = () => {
//   const navigation = useNavigation(); // Initialize navigation object
//   const [bookingIds, setBookingIds] = useState([]);
//   const [userContact, setUserContact] = useState('');
//   const [loading, setLoading] = useState(true); // State variable to track loading status

//   useEffect(() => {
//     const unsubscribe = firebase.auth().onAuthStateChanged(user => {
//       if (user) {
//         // User is signed in.
//         setUserContact(user.phoneNumber);
//       } else {
//         // No user is signed in.
//         setUserContact('');
//       }
//     });

//     return () => unsubscribe();
//   }, []);

//   useEffect(() => {
//     const unsubscribe = firebase.firestore().collection('booking')
//       .orderBy('dateTime', 'desc')
//       .onSnapshot(snapshot => {
//         const ids = [];
//         snapshot.forEach(doc => {
//           const data = doc.data();
//           const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
//           const now = new Date(); // Get current date
//           const isToday = now.toDateString() === dateTime.toDateString(); // Check if the booking is for today
//           let formattedTime;
//           if (isToday) {
//             formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
//           } else {
//             const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
//             formattedTime = days[dateTime.getDay()]; // Get day of the week
//           }
//           // Check if userContact matches the contact number in the booking
//           if (data.userContactNumber === userContact) {
//             ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint, plateNumber: data.plateNumber, pickupPoint: data.pickupPoint });
//           }
//         });
//         setBookingIds(ids);
//         setLoading(false); // Set loading to false when data is fetched
//       });

//     return () => unsubscribe();
//   }, [userContact]);

//   // Function to handle navigation to BookingDetailScreen
//   const handleBookingDetail = (bookingId) => {
//     navigation.navigate('BookingDetail', { bookingId });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//       <TouchableOpacity onPress={() => navigation.navigate('Tricycle')} style={styles.backButton}>
//           <Ionicons name="arrow-back-sharp" size={35} color="black" />
//        </TouchableOpacity>
//         <Text style={styles.header}>BOOKINGS</Text>
//         {loading ? ( // Display loading indicator if loading is true
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : (
//           <FlatList
//             data={bookingIds}
//             renderItem={({ item }) => (
//               <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
//                 <View style={styles.item}>
//                   <Text>
//                     <Text style={styles.boldText}>Pickup Point:</Text> {item.pickupPoint && item.pickupPoint.length > 10 ? `${item.pickupPoint.slice(0, 10)}...` : item.pickupPoint}
//                   </Text>
//                   <Text>
//                     <Text style={styles.boldText}>Drop-Off Point:</Text> {item.dropOffPoint && item.dropOffPoint.length > 10 ? `${item.dropOffPoint.slice(0, 10)}...` : item.dropOffPoint}
//                   </Text>
//                   <Text style={styles.timeText}>{item.time}</Text>
//                 </View>
//               </TouchableOpacity>
//             )}
//             keyExtractor={item => item.id}
//           />
//         )}
//       </View>
//     </View>
//   );
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
//     paddingBottom: 25,
//     borderRadius: 10,
//   },
//   header: {
//     fontSize: 30,
//     marginBottom: 10,
//     marginTop: 20,
//   },
//   item: {
//     marginTop: 5,
//     backgroundColor: 'lightblue',
//     height: 75,
//     width: 280,
//     borderRadius: 10,
//     justifyContent: 'center',
//     paddingHorizontal: 20,
//     position: 'relative', // Use relative positioning for the container
//   },
//   timeText: {
//     fontSize: 12,
//     fontWeight: 'bold',
//     position: 'absolute', // Use absolute positioning for the time text
//     bottom: 5, // Position it 5 units from the bottom
//     right: 10, // Position it 10 units from the right
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//   },
//   boldText: {
//     fontWeight: 'bold',
//   },
// });

// export default MyBookingsScreen;



//backhandler

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ActivityIndicator, BackHandler } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { firebase } from '../../config'; // Import your firebase object
import { Ionicons } from '@expo/vector-icons';

const MyBookingsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object
  const [bookingIds, setBookingIds] = useState([]);
  const [userContact, setUserContact] = useState('');
  const [loading, setLoading] = useState(true); // State variable to track loading status

  useEffect(() => {
    // Handle hardware back button press
    const backAction = () => {
      navigation.goBack(); // Navigate to the previous screen
      return true; // Prevent default behavior
    };

    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, [navigation]);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in.
        setUserContact(user.phoneNumber);
      } else {
        // No user is signed in.
        setUserContact('');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.firestore().collection('booking')
      .orderBy('dateTime', 'desc')
      .onSnapshot(snapshot => {
        const ids = [];
        snapshot.forEach(doc => {
          const data = doc.data();
          const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
          const now = new Date(); // Get current date
          const isToday = now.toDateString() === dateTime.toDateString(); // Check if the booking is for today
          let formattedTime;
          if (isToday) {
            formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
          } else {
            const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            formattedTime = days[dateTime.getDay()]; // Get day of the week
          }
          // Check if userContact matches the contact number in the booking
          if (data.userContactNumber === userContact) {
            ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint, plateNumber: data.plateNumber, pickupPoint: data.pickupPoint });
          }
        });
        setBookingIds(ids);
        setLoading(false); // Set loading to false when data is fetched
      });

    return () => unsubscribe();
  }, [userContact]);

  // Function to handle navigation to BookingDetailScreen
  const handleBookingDetail = (bookingId) => {
    navigation.navigate('BookingDetail', { bookingId });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Tricycle')} style={styles.backButton}>
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
        <Text style={styles.header}>BOOKINGS</Text>
        {loading ? ( // Display loading indicator if loading is true
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={bookingIds}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
                <View style={styles.item}>
                  <Text>
                    <Text style={styles.boldText}>Pickup Point:</Text> {item.pickupPoint && item.pickupPoint.length > 10 ? `${item.pickupPoint.slice(0, 10)}...` : item.pickupPoint}
                  </Text>
                  <Text>
                    <Text style={styles.boldText}>Drop-Off Point:</Text> {item.dropOffPoint && item.dropOffPoint.length > 10 ? `${item.dropOffPoint.slice(0, 10)}...` : item.dropOffPoint}
                  </Text>
                  <Text style={styles.timeText}>{item.time}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
          />
        )}
      </View>
    </View>
  );
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
    paddingBottom: 25,
    borderRadius: 10,
  },
  header: {
    fontSize: 25,
    marginBottom: 10,
    marginTop: 20,
  },
  item: {
    marginTop: 5,
    backgroundColor: 'lightblue',
    height: 75,
    width: 280,
    borderRadius: 10,
    justifyContent: 'center',
    paddingHorizontal: 20,
    position: 'relative', // Use relative positioning for the container
  },
  timeText: {
    fontSize: 12,
    fontWeight: 'bold',
    position: 'absolute', // Use absolute positioning for the time text
    bottom: 5, // Position it 5 units from the bottom
    right: 10, // Position it 10 units from the right
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    marginTop: -50,
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
});

export default MyBookingsScreen;
