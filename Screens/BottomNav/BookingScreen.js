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

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { firebase } from '../../config'; // Import your firebase object

const MyBookingsScreen = () => {
  const navigation = useNavigation(); // Initialize navigation object
  const [bookingIds, setBookingIds] = useState([]);
  const [userContact, setUserContact] = useState('');

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



// useEffect(() => {
//     const unsubscribe = firebase.firestore().collection('booking')
//       .orderBy('dateTime', 'desc')
//       .onSnapshot(snapshot => {
//         const ids = [];
//         snapshot.forEach(doc => {
//           const data = doc.data();
//           const dateTime = data.dateTime.toDate(); // Convert Timestamp to Date object
//           const formattedTime = dateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' }); // Format time as 10:30 AM
//           // Check if userContact matches the contact number in the booking
//           if (data.userContactNumber === userContact) {
//             // ids.push({ id: doc.id, time: formattedTime }); //filter based on the contact number
//             ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint });

//           }
//         });
//         setBookingIds(ids);
//       });
  
//     return () => unsubscribe();
//   }, [userContact]);
  

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
          ids.push({ id: doc.id, time: formattedTime, dropOffPoint: data.dropOffPoint });
        }
      });
      setBookingIds(ids);
    });

  return () => unsubscribe();
}, [userContact]);
  

  // console.log("Currently logged in contact number:", userContact);

  // Function to handle navigation to BookingDetailScreen
  const handleBookingDetail = (bookingId) => {
    navigation.navigate('BookingDetail', { bookingId });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
        <Text style={styles.header}>BOOKINGS</Text>
        <FlatList
          data={bookingIds}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handleBookingDetail(item.id)}>
              <View style={styles.item}>
                {/* <Text style={styles.itemText}>Booking Done</Text> */}
                {/* <Text style={styles.itemText}>{item.id}</Text> */}
                <Text style={styles.dropOffText}> Drop-Off Point: {item.dropOffPoint}</Text>
                <Text style={styles.timeText}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
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
    fontSize: 30,
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
  itemText: {
    fontSize: 14,
    position: 'absolute',
    bottom: 13,
    left: 20,
    fontWeight:'bold',
    
   
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
  dropOffText: {
    fontSize: 16,
   fontWeight:'bold',
    position: 'absolute',
    top: 28, // Position it 25 units from the bottom
    left: 10, // Position it 10 units from the left
    color: 'black',
  },
});

export default MyBookingsScreen;
