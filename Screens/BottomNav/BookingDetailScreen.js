// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import { firebase } from '../../config'; // Import your firebase object

// const BookingDetailScreen = ({ route }) => {
//   const [bookingDetails, setBookingDetails] = useState(null);

//   useEffect(() => {
//     const { bookingId } = route.params; // Get the booking ID from route params

//     // Fetch booking details from Firestore based on the booking ID
//     const unsubscribe = firebase.firestore().collection('booking').doc(bookingId)
//       .onSnapshot(doc => {
//         if (doc.exists) {
//           const data = doc.data();
//           setBookingDetails(data);
//         } else {
//           console.log('No such document!');
//           setBookingDetails(null);
//         }
//       });

//     return () => unsubscribe();
//   }, [route.params]); // Re-run effect when route params change

//   return (
//     <View style={styles.container}>
//       {bookingDetails ? (
//         <>
//           <Text style={styles.label}>Booking ID:</Text>
//           <Text style={styles.value}>{route.params.bookingId}</Text>
//           <Text style={styles.label}>Plate Number:</Text>
//           <Text style={styles.value}>{bookingDetails.plateNumber}</Text>
//           <Text style={styles.label}>Pickup Point:</Text>
//           <Text style={styles.value}>{bookingDetails.pickupPoint}</Text>
//           <Text style={styles.label}>Drop-Off Point:</Text>
//           <Text style={styles.value}>{bookingDetails.dropOffPoint}</Text>
//           {/* Add more details to display as needed */}
//         </>
//       ) : (
//         <Text>No booking details found.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
// });

// export default BookingDetailScreen;


// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import { firebase } from '../../config'; // Import your firebase object

// const BookingDetailScreen = ({ route, navigation }) => {
//   const [bookingDetails, setBookingDetails] = useState(null);

//   useEffect(() => {
//     const { bookingId } = route.params; // Get the booking ID from route params

//     // Fetch booking details from Firestore based on the booking ID
//     const unsubscribe = firebase.firestore().collection('booking').doc(bookingId)
//       .onSnapshot(doc => {
//         if (doc.exists) {
//           const data = doc.data();
//           setBookingDetails(data);
//         } else {
//           console.log('No such document!');
//           setBookingDetails(null);
//         }
//       });

//     return () => unsubscribe();
//   }, [route.params]); // Re-run effect when route params change

//   // Function to handle cancellation
//   const handleCancel = () => {
//     if (!bookingDetails) return;

//     // Remove the booking from the 'BookNow' collection
//     firebase.firestore().collection('BookNow').doc(route.params.bookingId)
//       .delete()
//       .then(() => {
//         console.log('Booking successfully cancelled');
//         // Navigate back to the previous screen
//         navigation.goBack();
//       })
//       .catch(error => {
//         console.error('Error cancelling booking:', error);
//         Alert.alert('Error', 'Failed to cancel booking. Please try again later.');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       {bookingDetails ? (
//         <>
//           <Text style={styles.label}>Booking ID:</Text>
//           <Text style={styles.value}>{route.params.bookingId}</Text>
//           <Text style={styles.label}>Plate Number:</Text>
//           <Text style={styles.value}>{bookingDetails.plateNumber}</Text>
//           <Text style={styles.label}>Pickup Point:</Text>
//           <Text style={styles.value}>{bookingDetails.pickupPoint}</Text>
//           <Text style={styles.label}>Drop-Off Point:</Text>
//           <Text style={styles.value}>{bookingDetails.dropOffPoint}</Text>
//           {/* Add more details to display as needed */}
//           <Button title="Cancel Booking" onPress={handleCancel} />
//         </>
//       ) : (
//         <Text>No booking details found.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
// });

// export default BookingDetailScreen;



// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import { firebase } from '../../config'; // Import your firebase object

// const BookingDetailScreen = ({ route, navigation }) => {
//   const [bookingDetails, setBookingDetails] = useState(null);

//   useEffect(() => {
//     const { bookingId } = route.params; // Get the booking ID from route params

//     // Fetch booking details from Firestore based on the booking ID
//     const unsubscribe = firebase.firestore().collection('booking').doc(bookingId)
//       .onSnapshot(doc => {
//         if (doc.exists) {
//           const data = doc.data();
//           setBookingDetails(data);
//         } else {
//           console.log('No such document!');
//           setBookingDetails(null);
//         }
//       });

//     return () => unsubscribe();
//   }, [route.params]); // Re-run effect when route params change

//   // Function to handle cancellation
//   const handleCancel = () => {
//     if (!bookingDetails) return;

//     // Update status field to true in the 'booking' collection
//     firebase.firestore().collection('booking').doc(route.params.bookingId)
//       .update({ status: true })
//       .then(() => {
//         console.log('Booking status updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating booking status:', error);
//       });

//     // Remove the booking from the 'BookNow' collection
//     firebase.firestore().collection('BookNow').doc(route.params.bookingId)
//       .delete()
//       .then(() => {
//         console.log('Booking successfully cancelled');
//         // Navigate back to the previous screen
//         navigation.goBack();
//       })
//       .catch(error => {
//         console.error('Error cancelling booking:', error);
//         Alert.alert('Error', 'Failed to cancel booking. Please try again later.');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       {bookingDetails ? (
//         <>
//           <Text style={styles.label}>Booking ID:</Text>
//           <Text style={styles.value}>{route.params.bookingId}</Text>
//           <Text style={styles.label}>Plate Number:</Text>
//           <Text style={styles.value}>{bookingDetails.plateNumber}</Text>
//           <Text style={styles.label}>Pickup Point:</Text>
//           <Text style={styles.value}>{bookingDetails.pickupPoint}</Text>
//           <Text style={styles.label}>Drop-Off Point:</Text>
//           <Text style={styles.value}>{bookingDetails.dropOffPoint}</Text>
//           {/* Add more details to display as needed */}
//           <Button title="Cancel Booking" onPress={handleCancel} />
//         </>
//       ) : (
//         <Text>No booking details found.</Text>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
// });

// export default BookingDetailScreen;

//latest

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, Alert } from 'react-native';
// import { firebase } from '../../config'; // Import your firebase object

// const BookingDetailScreen = ({ route, navigation }) => {
//   const [bookingDetails, setBookingDetails] = useState(null);

//   useEffect(() => {
//     const { bookingId } = route.params; // Get the booking ID from route params

//     // Fetch booking details from Firestore based on the booking ID
//     const unsubscribe = firebase.firestore().collection('booking').doc(bookingId)
//       .onSnapshot(doc => {
//         if (doc.exists) {
//           const data = doc.data();
//           setBookingDetails(data);
//         } else {
//           console.log('No such document!');
//           setBookingDetails(null);
//         }
//       });

//     return () => unsubscribe();
//   }, [route.params]); // Re-run effect when route params change

//   // Function to handle cancellation
//   const handleCancel = () => {
//     if (!bookingDetails) return;

//     // Update status field to true in the 'booking' collection
//     firebase.firestore().collection('booking').doc(route.params.bookingId)
//       .update({ status: true })
//       .then(() => {
//         console.log('Booking status updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating booking status:', error);
//       });

//     // Remove the booking from the 'BookNow' collection
//     firebase.firestore().collection('BookNow').doc(route.params.bookingId)
//       .delete()
//       .then(() => {
//         console.log('Booking successfully cancelled');
//         // Navigate back to the previous screen
//         navigation.goBack();
//       })
//       .catch(error => {
//         console.error('Error cancelling booking:', error);
//         Alert.alert('Error', 'Failed to cancel booking. Please try again later.');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       {bookingDetails ? (
//         <>
//           <Text style={styles.label}>Booking ID:</Text>
//           <Text style={styles.value}>{route.params.bookingId}</Text>
//           <Text style={styles.label}>Plate Number:</Text>
//           <Text style={styles.value}>{bookingDetails.plateNumber}</Text>
//           <Text style={styles.label}>Pickup Point:</Text>
//           <Text style={styles.value}>{bookingDetails.pickupPoint}</Text>
//           <Text style={styles.label}>Drop-Off Point:</Text>
//           <Text style={styles.value}>{bookingDetails.dropOffPoint}</Text>
//           <Text style={styles.label}>Status:</Text>
//           <Text style={styles.value}>{bookingDetails.status ? 'Cancelled' : 'Active'}</Text>
//           {/* Add more details to display as needed */}
//           {!bookingDetails.status && (
//             <Button title="Cancel Booking" onPress={handleCancel} />
//           )}
//         </>
//       ) : (
//         <Text>No booking details found.</Text>
//       )}
//     </View>
//   );
  
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
// });

// export default BookingDetailScreen;


// //working to ah 3-8-24
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native';
// import { firebase } from '../../config'; // Import your firebase object
// import { useNavigation } from '@react-navigation/native';

// import { Ionicons } from '@expo/vector-icons';



// const BookingDetailScreen = ({ route, navigation }) => {
  
//   const [bookingDetails, setBookingDetails] = useState(null);
//   const [bookingCanceled, setBookingCanceled] = useState(false); // State to track if booking is canceled
//   // const navigation = useNavigation(); // Initialize navigation


//   useEffect(() => {
//     const { bookingId } = route.params; // Get the booking ID from route params

//     // Fetch booking details from Firestore based on the booking ID
//     const unsubscribe = firebase.firestore().collection('booking').doc(bookingId)
//       .onSnapshot(doc => {
//         if (doc.exists) {
//           const data = doc.data();
//           setBookingDetails(data);
//         } else {
//           console.log('No such document!');
//           setBookingDetails(null);
//         }
//       });

//     // Check if booking exists in the BookNow collection
//     firebase.firestore().collection('BookNow').doc(bookingId).get()
//       .then(docSnapshot => {
//         if (!docSnapshot.exists) {
//           setBookingCanceled(true); // Set bookingCanceled to true if booking not found
//         }
//       })
//       .catch(error => {
//         console.error('Error checking booking status:', error);
//       });

//     return () => unsubscribe();
//   }, [route.params]); // Re-run effect when route params change

//   // Function to handle cancellation
//   const handleCancel = () => {
//     if (!bookingDetails) return;

//     // Update status field to true in the 'booking' collection
//     firebase.firestore().collection('booking').doc(route.params.bookingId)
//       .update({ status: true })
//       .then(() => {
//         console.log('Booking status updated successfully');
//       })
//       .catch(error => {
//         console.error('Error updating booking status:', error);
//       });

//     // Remove the booking from the 'BookNow' collection
//     firebase.firestore().collection('BookNow').doc(route.params.bookingId)
//       .delete()
//       .then(() => {
//         console.log('Booking successfully cancelled');
//         // Navigate back to the previous screen
//         navigation.goBack();
//       })
//       .catch(error => {
//         console.error('Error cancelling booking:', error);
//         Alert.alert('Error', 'Failed to cancel booking. Please try again later.');
//       });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />

//       <View style={styles.seccontainer}>

//       <TouchableOpacity onPress={() => navigation.navigate('Bookings')} style={styles.backButton}>
//           {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
//           <Ionicons name="arrow-back-sharp" size={35} color="black" />
//        </TouchableOpacity>
//           {bookingDetails ? (
//             <>
//               {/* <Text style={styles.label}>Booking ID:</Text>
//               <Text style={styles.value}>{route.params.bookingId}</Text> */}
//               {/* <Text style={styles.label}>Plate Number:</Text>
//               <Text style={styles.value}>{bookingDetails.plateNumber}</Text> */}
//               <Text style={styles.label}>Pickup Point:</Text>
//               <Text style={styles.value}>{bookingDetails.pickupPoint}</Text>
//               <Text style={styles.label}>Drop-Off Point:</Text>
//               <Text style={styles.value}>{bookingDetails.dropOffPoint}</Text>

//               {/* <Text style={styles.label}>number:</Text>
//               <Text style={styles.value}>{bookingDetails.userContactNumber}</Text> */}

//               {/* <Text style={styles.label}>Status:</Text> */}
//               {/* <Text style={styles.value}>{bookingDetails.status ? 'Cancelled' : 'Complete'}</Text> */}
//               {/* Add more details to display as needed */}
//               {!bookingDetails.status && !bookingCanceled && ( // Render the button only if booking is not canceled
//                 <Button title="Cancel Booking" onPress={handleCancel} />
//               )}
//               <Text>You can only cancel if the driver is not accecpting you request.</Text>
//             </>
//           ) : (
//             <Text>No booking details found.</Text>
//           )}
//         </View>
//         {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//           <Text style={styles.backButton}>Back to Admin</Text>
//        </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   seccontainer:{
//     backgroundColor:'#ffd702',
//     height: '40%',
//     width: '90%',
//     // marginTop:20,
//     padding:40
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   value: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   backButton: {
//     fontSize: 18,
//     color: 'blue',
//     marginTop: 20,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 0,
//     marginTop: -50,
//   },
//   backButton: {
//     position: 'absolute',
//     top: 5,
//     left: 5,
//    },
// });

// export default BookingDetailScreen;




//galing kay ynna 'yo


import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native';
import { firebase } from '../../config'; // Import your firebase object
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';



const BookingDetailScreen = ({ route, navigation }) => {
  
  const [bookingDetails, setBookingDetails] = useState(null);
  const [bookingCanceled, setBookingCanceled] = useState(false); // State to track if booking is canceled
  // const navigation = useNavigation(); // Initialize navigation

// Function to format the date and time
const formatDateTime = timestamp => {
  const date = new Date(timestamp.seconds * 1000);
  const options = {
  
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
   
    hour12: true
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
};


  useEffect(() => {
    const { bookingId } = route.params; // Get the booking ID from route params

    // Fetch booking details from Firestore based on the booking ID
    const unsubscribe = firebase.firestore().collection('booking').doc(bookingId)
      .onSnapshot(doc => {
        if (doc.exists) {
          const data = doc.data();
          console.log('Booking Details:', data);
          setBookingDetails(data);
        } else {
          console.log('No such document!');
          setBookingDetails(null);
        }
      });

    // Check if booking exists in the BookNow collection
    firebase.firestore().collection('BookNow').doc(bookingId).get()
      .then(docSnapshot => {
        if (!docSnapshot.exists) {
          setBookingCanceled(true); // Set bookingCanceled to true if booking not found
        }
      })
      .catch(error => {
        console.error('Error checking booking status:', error);
      });



    return () => unsubscribe();
  }, [route.params]); // Re-run effect when route params change


// Log the dateTime separately
console.log('Booking DateTime:', bookingDetails ? formatDateTime(bookingDetails.dateTime) : 'No booking details');
  // Function to handle cancellation
  // const handleCancel = () => {
  //   if (!bookingDetails) return;

  //   // Update status field to true in the 'booking' collection
  //   firebase.firestore().collection('booking').doc(route.params.bookingId)
  //     .update({ status: true })
  //     .then(() => {
  //       console.log('Booking status updated successfully');
  //     })
  //     .catch(error => {
  //       console.error('Error updating booking status:', error);
  //     });

  //   // Remove the booking from the 'BookNow' collection
  //   firebase.firestore().collection('BookNow').doc(route.params.bookingId)
  //     .delete()
  //     .then(() => {
  //       console.log('Booking successfully cancelled');
  //       // Navigate back to the previous screen
  //       navigation.goBack();
  //     })
  //     .catch(error => {
  //       console.error('Error cancelling booking:', error);
  //       Alert.alert('Error', 'Failed to cancel booking. Please try again later.');
  //     });
  // };

  // Function to handle cancellation
const handleCancel = () => {
  if (!bookingDetails) return;

  // Show confirmation dialog
  Alert.alert(
      'Cancel Booking',
      'Are you sure you want to cancel this booking?',
      [
          {
              text: 'Cancel',
              style: 'cancel',
          },
          {
              text: 'Confirm',
              onPress: () => {
                  // Update status field to true in the 'booking' collection
                  firebase.firestore().collection('booking').doc(route.params.bookingId)
                      .update({ status: true })
                      .then(() => {
                          console.log('Booking status updated successfully');
                      })
                      .catch(error => {
                          console.error('Error updating booking status:', error);
                      });

                  // Remove the booking from the 'BookNow' collection
                  firebase.firestore().collection('BookNow').doc(route.params.bookingId)
                      .delete()
                      .then(() => {
                          console.log('Booking successfully cancelled');
                          // Navigate back to the previous screen
                          navigation.goBack();
                      })
                      .catch(error => {
                          console.error('Error cancelling booking:', error);
                          Alert.alert('Error', 'Failed to cancel booking. Please try again later.');
                      });
              },
          },
      ],
      { cancelable: true },
  );
};


  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />

      <View style={styles.seccontainer}>

      <TouchableOpacity onPress={() => navigation.navigate('Bookings')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
          {bookingDetails ? (
            <>
              {/* <Text style={styles.label}>Booking ID:</Text>
              <Text style={styles.value}>{route.params.bookingId}</Text> */}
              {/* <Text style={styles.label}>Plate Number:</Text>
              <Text style={styles.value}>{bookingDetails.plateNumber}</Text> */}
              <Text style={styles.label}>Pickup Point:</Text>
              <Text style={styles.value}>{bookingDetails.pickupPoint}</Text>
              <Text style={styles.label}>Drop-Off Point:</Text>
              <Text style={styles.value}>{bookingDetails.dropOffPoint}</Text>
              <Text style={styles.label}>Time requested:</Text>
          <Text style={styles.value}>{bookingDetails.dateTime ? formatDateTime(bookingDetails.dateTime) : 'N/A'}</Text>

              {/* <Text style={styles.label}>Date & Time:</Text>
            <Text style={styles.value}>{bookingDetails.dateTime ? new Date(bookingDetails.dateTime.seconds * 1000).toLocaleString() : 'N/A'}</Text> */}

              {/* <Text style={styles.label}>number:</Text>
              <Text style={styles.value}>{bookingDetails.userContactNumber}</Text> */}

              {/* <Text style={styles.label}>Status:</Text> */}
              {/* <Text style={styles.value}>{bookingDetails.status ? 'Cancelled' : 'Complete'}</Text> */}
              {/* Add more details to display as needed */}
              {/* {!bookingDetails.status && !bookingCanceled && ( // Render the button only if booking is not canceled
                <Button title="Cancel Booking" onPress={handleCancel}  style={{ marginTop: 60 }}/>
              )} */}

            {/* {!bookingDetails.status && !bookingCanceled && ( // Render the button only if booking is not canceled
                <View style={{ marginTop: 60 }}>
                    <TouchableOpacity onPress={handleCancel} style={styles.button}>
                        <Text style={styles.textbutton}>Cancel Booking</Text>
                    </TouchableOpacity>
                </View>
            )}

              <Text style={styles.message}>You can only cancel if the driver is not accecpting you request.</Text>
            </>
          ) : (
            <Text>No booking details found.</Text>
          )} */}
            {/* </View> */}


{!bookingDetails.status && !bookingCanceled ? (
            <View style={{ marginTop: 60 }}>
              <TouchableOpacity onPress={handleCancel} style={styles.button}>
                <Text style={styles.textbutton}>Cancel Booking</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={styles.messagecancel}>Cancelled</Text>
          )}
          <Text style={styles.message}>You can only cancel if the driver is not accepting your request.</Text>
        </>
      ) : (
        <Text>No booking details found.</Text>
      )}

        </View>
        {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButton}>Back to Admin</Text>
       </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  seccontainer:{
    backgroundColor:'#ffd702',
    height: '55%',
    width: '90%',
    // marginTop:20,
    padding:40,
    paddingTop: 50,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    marginBottom: 15,
  },
  backButton: {
    fontSize: 18,
    color: 'blue',
    marginTop: 20,
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 0,
    marginTop: -50,
  },
  backButton: {
    position: 'absolute',
    top: 5,
    left: 5,
   },
   button : {
    backgroundColor:'lightblue',
    height:40,
    width:210,
    justifyContent:'center',
    alignContent:'center',
    marginBottom:15,
   },
   textbutton : {
    fontSize:20,
    textAlign:'center'
   },

   message: {
    textAlign:'center',
   },

   messagecancel: {
    textAlign:'center',
    fontSize:18,
    fontWeight:'bold',
    marginBottom:20,
    marginTop:20,
   }
});

export default BookingDetailScreen;