
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const TricycleScreen = () => {
//   const [plateNumber, setPlateNumber] = useState('');

//   useEffect(() => {

//   const collectionRef = firebase.firestore().collection('ActiveUsers');
//   const unsubscribe = collectionRef
//     .orderBy('registrationDateTime', 'asc') // Order by 'registrationDateTime' in ascending order
//     .limit(1) // Limit the result to the first document
//     .onSnapshot((snapshot) => {
//       if (!snapshot.empty) {
//         const firstDocument = snapshot.docs[0];
//         const data = firstDocument.data();
//         const firstPlateNumber = data.plateNumber;
//         setPlateNumber(firstPlateNumber);
//       } else {
//         // Handle empty collection
//         setPlateNumber('No active drivers');
//       }
//     });

//       // Clean up the subscription when the component unmounts
//       return () => unsubscribe();
//       }, []);

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>Book Now!</Text>

//         <TextInput style={styles.input} placeholder="Pick-up Point" />

//         <TextInput style={styles.input} placeholder="Drop-Off Point" />

//         <Text style={styles.textDriver}>{`Plate Number: ${plateNumber}`}</Text>

//         <TouchableOpacity style={styles.button}>
//           <Text style={styles.buttonText}>Pasakay</Text>
//         </TouchableOpacity>

//         <Text style={styles.textNote}>Note: Half-payment must be done first!
//         Cancellation of booking is not allowed!
//         </Text>
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
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     width: 250,
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 50,
//     marginBottom: 30,
//     paddingLeft: 20,
//     fontSize: 15,
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     height: 50,
//     width: 180,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: 'black',
//     fontSize: 18,
//   },
//   textDriver: {
//     fontSize: 15,
//     backgroundColor: 'white',
//     height: 50,
//     width: 250,
//     borderRadius: 50,
//     borderWidth: 1,
//     marginBottom: 30,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 15,
//   },
//   textNote: {
//     fontSize: 15,
//     marginTop: 30,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default TricycleScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const TricycleScreen = () => {
//   const [plateNumber, setPlateNumber] = useState('');
//   const [pickupPoint, setPickupPoint] = useState('');
//   const [dropOffPoint, setDropOffPoint] = useState('');
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     // Fetch plateNumber from Firestore (similar to your existing code)
//     const collectionRef = firebase.firestore().collection('ActiveUsers');
//     const unsubscribe = collectionRef
//       .orderBy('registrationDateTime', 'asc')
//       .limit(1)
//       .onSnapshot((snapshot) => {
//         if (!snapshot.empty) {
//           const firstDocument = snapshot.docs[0];
//           const data = firstDocument.data();
//           const firstPlateNumber = data.plateNumber;
//           setPlateNumber(firstPlateNumber);
//         } else {
//           setPlateNumber('No active drivers');
//         }
//       });

//     // Clean up the subscription when the component unmounts
//     return () => unsubscribe();
//   }, []);

  

//   const handlePasakay = () => {
//     // Check if both pickup and drop-off points are provided
//     if (!pickupPoint || !dropOffPoint) {
//       alert('Please provide both pickup and drop-off points.');
//       return;
//     }

//     setLoading(true); // Set loading state to true

//     // Get the current date and time
//     // const currentDate = new Date();
//     const currentDate = firebase.firestore.Timestamp.fromDate(new Date());

//     // Save data to Firestore
//     firebase.firestore().collection('BookNow').add({
//       plateNumber,
//       pickupPoint,
//       dropOffPoint,
//       // dateTime: formatDateTime(currentDate),
//       dateTime: currentDate,

//     })
//     .then(() => {
//       alert('Booking saved successfully!');
//       // Optionally, you can reset the input fields after successful booking
//       setPickupPoint('');
//       setDropOffPoint('');
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     })
//     .finally(() => {
//       setLoading(false); // Set loading state to false after the operation is complete
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>Book Now!</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Pick-up Point"
//           value={pickupPoint}
//           onChangeText={(text) => setPickupPoint(text)}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Drop-Off Point"
//           value={dropOffPoint}
//           onChangeText={(text) => setDropOffPoint(text)}
//         />

//         <Text style={styles.textDriver}>{`Plate Number: ${plateNumber}`}</Text>

//         <TouchableOpacity style={styles.button} onPress={handlePasakay}>
//           {loading ? (
//             <ActivityIndicator size="small" color="black" />
//           ) : (
//             <Text style={styles.buttonText}>Pasakay</Text>
//           )}
//         </TouchableOpacity>

//         <Text style={styles.textNote}>Note: Half-payment must be done first! Cancellation of booking is not allowed!</Text>
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
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     width: 250,
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 50,
//     marginBottom: 30,
//     paddingLeft: 20,
//     fontSize: 15,
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     height: 50,
//     width: 180,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: 'black',
//     fontSize: 18,
//   },
//   textDriver: {
//     fontSize: 15,
//     backgroundColor: 'white',
//     height: 50,
//     width: 250,
//     borderRadius: 50,
//     borderWidth: 1,
//     marginBottom: 30,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 15,
//   },
//   textNote: {
//     fontSize: 15,
//     marginTop: 30,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default TricycleScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const TricycleScreen = () => {
//   const [plateNumber, setPlateNumber] = useState('');
//   const [pickupPoint, setPickupPoint] = useState('');
//   const [dropOffPoint, setDropOffPoint] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [userData, setUserData] = useState(null); // State to hold user data

//   useEffect(() => {
//     // Fetch plateNumber from Firestore (similar to your existing code)
//     const collectionRef = firebase.firestore().collection('ActiveUsers');
//     const unsubscribe = collectionRef
//       .orderBy('registrationDateTime', 'asc')
//       .limit(1)
//       .onSnapshot((snapshot) => {
//         if (!snapshot.empty) {
//           const firstDocument = snapshot.docs[0];
//           const data = firstDocument.data();
//           const firstPlateNumber = data.plateNumber;
//           setPlateNumber(firstPlateNumber);
//         } else {
//           setPlateNumber('No active drivers');
//         }
//       });

//     // Fetch the currently logged-in user's contact number
//     const currentUser = firebase.auth().currentUser;
//     const contactNumber = currentUser.phoneNumber;

//     // Fetch user data from Firestore based on contact number
//     const usersCollection = firebase.firestore().collection('Users');

//     usersCollection
//       .where('contactNumber', '==', contactNumber)
//       .get()
//       .then((querySnapshot) => {
//         if (!querySnapshot.empty) {
//           // Assuming only one user with the given contact number exists
//           const user = querySnapshot.docs[0].data();
//           setUserData(user);

//           // Log currently logged-in user's name and contactNumber
//           console.log('Currently logged-in user:', user.name);
//           console.log('Contact number:', user.contactNumber);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });

//     // Clean up the subscriptions when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handlePasakay = () => {
//     // Check if both pickup and drop-off points are provided
//     if (!pickupPoint || !dropOffPoint) {
//       alert('Please provide both pickup and drop-off points.');
//       return;
//     }

//     setLoading(true); // Set loading state to true

//     // Log user data to console
//     console.log('Currently logged in user:', userData.name);
//     console.log('Contact number:', userData.contactNumber);

//     // Get the current date and time
//     const currentDate = firebase.firestore.Timestamp.fromDate(new Date());

//     // Save data to Firestore
//     firebase.firestore().collection('BookNow').add({
//       plateNumber,
//       pickupPoint,
//       dropOffPoint,
//       dateTime: currentDate,
//     })
//     .then(() => {
//       alert('Booking saved successfully!');
//       // Optionally, you can reset the input fields after successful booking
//       setPickupPoint('');
//       setDropOffPoint('');
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     })
//     .finally(() => {
//       setLoading(false); // Set loading state to false after the operation is complete
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>Book Now!</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Pick-up Point"
//           value={pickupPoint}
//           onChangeText={(text) => setPickupPoint(text)}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Drop-Off Point"
//           value={dropOffPoint}
//           onChangeText={(text) => setDropOffPoint(text)}
//         />

//         <Text style={styles.textDriver}>{`Plate Number: ${plateNumber}`}</Text>

//         <TouchableOpacity style={styles.button} onPress={handlePasakay}>
//           {loading ? (
//             <ActivityIndicator size="small" color="black" />
//           ) : (
//             <Text style={styles.buttonText}>Pasakay</Text>
//           )}
//         </TouchableOpacity>

//         <Text style={styles.textNote}>Note: Half-payment must be done first! Cancellation of booking is not allowed!</Text>
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
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     width: 250,
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 50,
//     marginBottom: 30,
//     paddingLeft: 20,
//     fontSize: 15,
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     height: 50,
//     width: 180,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: 'black',
//     fontSize: 18,
//   },
//   textDriver: {
//     fontSize: 15,
//     backgroundColor: 'white',
//     height: 50,
//     width: 250,
//     borderRadius: 50,
//     borderWidth: 1,
//     marginBottom: 30,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 15,
//   },
//   textNote: {
//     fontSize: 15,
//     marginTop: 30,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default TricycleScreen;

//SAVE!!!!

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const TricycleScreen = () => {
//   const [plateNumber, setPlateNumber] = useState('');
//   const [pickupPoint, setPickupPoint] = useState('');
//   const [dropOffPoint, setDropOffPoint] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [userData, setUserData] = useState(null); // State to hold user data

//   useEffect(() => {
//     // Fetch plateNumber from Firestore (similar to your existing code)
//     const collectionRef = firebase.firestore().collection('ActiveUsers');
//     const unsubscribe = collectionRef
//       .orderBy('registrationDateTime', 'asc')
//       .limit(1)
//       .onSnapshot((snapshot) => {
//         if (!snapshot.empty) {
//           const firstDocument = snapshot.docs[0];
//           const data = firstDocument.data();
//           const firstPlateNumber = data.plateNumber;
//           setPlateNumber(firstPlateNumber);
//         } else {
//           setPlateNumber('No active drivers');
//         }
//       });

//     // Fetch the currently logged-in user's contact number
//     const currentUser = firebase.auth().currentUser;
//     const contactNumber = currentUser.phoneNumber;

//     // Fetch user data from Firestore based on contact number
//     const usersCollection = firebase.firestore().collection('Users');

//     usersCollection
//       .where('contactNumber', '==', contactNumber)
//       .get()
//       .then((querySnapshot) => {
//         if (!querySnapshot.empty) {
//           // Assuming only one user with the given contact number exists
//           const user = querySnapshot.docs[0].data();
//           setUserData(user);

//           // Log currently logged-in user's name and contactNumber
//           console.log('Currently logged-in user:', user.name);
//           console.log('Contact number:', user.contactNumber);
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });

//     // Clean up the subscriptions when the component unmounts
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const handlePasakay = () => {
//     // Check if both pickup and drop-off points are provided
//     if (!pickupPoint || !dropOffPoint) {
//       alert('Please provide both pickup and drop-off points.');
//       return;
//     }

//     setLoading(true); // Set loading state to true

//     // Get the currently logged-in user's name and contact number
//     const userName = userData ? userData.name : 'Unknown';
//     const userContactNumber = userData ? userData.contactNumber : 'Unknown';

//     // Get the current date and time
//     const currentDate = firebase.firestore.Timestamp.fromDate(new Date());

//     // Save data to Firestore
//     firebase.firestore().collection('BookNow').add({
//       plateNumber,
//       pickupPoint,
//       dropOffPoint,
//       userName, // Add user's name to the document
//       userContactNumber, // Add user's contact number to the document
//       dateTime: currentDate,
//     })
//     .then(() => {
//       alert('Booking saved successfully!');
//       // Optionally, you can reset the input fields after successful booking
//       setPickupPoint('');
//       setDropOffPoint('');
//     })
//     .catch((error) => {
//       console.error('Error adding document: ', error);
//     })
//     .finally(() => {
//       setLoading(false); // Set loading state to false after the operation is complete
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>Book Now!</Text>

//         <TextInput
//           style={styles.input}
//           placeholder="Pick-up Point"
//           value={pickupPoint}
//           onChangeText={(text) => setPickupPoint(text)}
//         />

//         <TextInput
//           style={styles.input}
//           placeholder="Drop-Off Point"
//           value={dropOffPoint}
//           onChangeText={(text) => setDropOffPoint(text)}
//         />

//         <Text style={styles.textDriver}>{`Plate Number: ${plateNumber}`}</Text>

//         <TouchableOpacity style={styles.button} onPress={handlePasakay}>
//           {loading ? (
//             <ActivityIndicator size="small" color="black" />
//           ) : (
//             <Text style={styles.buttonText}>Pasakay</Text>
//           )}
//         </TouchableOpacity>

//         <Text style={styles.textNote}>Note: Half-payment must be done first! Cancellation of booking is not allowed!</Text>
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
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 30,
//   },
//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     borderStyle: 'solid',
//     width: 250,
//     height: 50,
//     backgroundColor: 'white',
//     borderRadius: 50,
//     marginBottom: 30,
//     paddingLeft: 20,
//     fontSize: 15,
//   },
//   button: {
//     backgroundColor: 'lightblue',
//     height: 50,
//     width: 180,
//     borderRadius: 50,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderWidth: 1,
//   },
//   buttonText: {
//     textAlign: 'center',
//     color: 'black',
//     fontSize: 18,
//   },
//   textDriver: {
//     fontSize: 15,
//     backgroundColor: 'white',
//     height: 50,
//     width: 250,
//     borderRadius: 50,
//     borderWidth: 1,
//     marginBottom: 30,
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingTop: 15,
//   },
//   textNote: {
//     fontSize: 15,
//     marginTop: 30,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default TricycleScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import firebase from 'firebase/compat';
import 'firebase/firestore';

const TricycleScreen = () => {
  const [plateNumber, setPlateNumber] = useState('');
  const [pickupPoint, setPickupPoint] = useState('');
  const [dropOffPoint, setDropOffPoint] = useState('');
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null); // State to hold user data

  useEffect(() => {
    // Fetch plateNumber from Firestore (similar to your existing code)
    const collectionRef = firebase.firestore().collection('ActiveUsers');
    const unsubscribe = collectionRef
      .orderBy('registrationDateTime', 'asc')
      .limit(1)
      .onSnapshot((snapshot) => {
        if (!snapshot.empty) {
          const firstDocument = snapshot.docs[0];
          const data = firstDocument.data();
          const firstPlateNumber = data.plateNumber;
          setPlateNumber(firstPlateNumber);
        } else {
          setPlateNumber('No active drivers');
        }
      });

    // Fetch the currently logged-in user's contact number
    const currentUser = firebase.auth().currentUser;

    if (currentUser && currentUser.phoneNumber) {
      const contactNumber = currentUser.phoneNumber;

      // Fetch user data from Firestore based on contact number
      const usersCollection = firebase.firestore().collection('Users');

      usersCollection
        .where('contactNumber', '==', contactNumber)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            // Assuming only one user with the given contact number exists
            const user = querySnapshot.docs[0].data();
            setUserData(user);

            // Log currently logged-in user's name and contactNumber
            console.log('Currently logged-in user:', user.name);
            console.log('Contact number:', user.contactNumber);
          } else {
            // If no user found, set default user data
            setUserData({
              name: 'Kyle Vincent Manuel',
              contactNumber: '+639185299893',
            });
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      // If no phone number is present, set default userData
      setUserData({
        name: 'Kyle Vincent Manuel',
        contactNumber: '+639185299893',
      });
    }

    // Clean up the subscriptions when the component unmounts
    return () => {
      unsubscribe();
    };
  }, []);

  const handlePasakay = () => {
    // Check if both pickup and drop-off points are provided
    if (!pickupPoint || !dropOffPoint) {
      alert('Please provide both pickup and drop-off points.');
      return;
    }

    setLoading(true); // Set loading state to true

    // Get the currently logged-in user's name and contact number
    const userName = userData ? userData.name : 'Unknown';
    const userContactNumber = userData ? userData.contactNumber : 'Unknown';

    // Get the current date and time
    const currentDate = firebase.firestore.Timestamp.fromDate(new Date());

    // Save data to Firestore
    firebase.firestore().collection('BookNow').add({
      plateNumber,
      pickupPoint,
      dropOffPoint,
      userName, // Add user's name to the document
      userContactNumber, // Add user's contact number to the document
      dateTime: currentDate,
    })
    .then(() => {
      alert('Booking saved successfully!');
      // Optionally, you can reset the input fields after successful booking
      setPickupPoint('');
      setDropOffPoint('');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    })
    .finally(() => {
      setLoading(false); // Set loading state to false after the operation is complete
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
        <Text style={styles.text}>BOOK NOW!</Text>

        <TextInput
          style={styles.input}
          placeholder="Pick-up Point"
          value={pickupPoint}
          onChangeText={(text) => setPickupPoint(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Drop-Off Point"
          value={dropOffPoint}
          onChangeText={(text) => setDropOffPoint(text)}
        />

        <Text style={styles.textDriver}>{`Plate Number: ${plateNumber}`}</Text>

        <TouchableOpacity style={styles.button} onPress={handlePasakay}>
          {loading ? (
            <ActivityIndicator size="small" color="black" />
          ) : (
            <Text style={styles.buttonText}>Pasakay</Text>
          )}
        </TouchableOpacity>

        <Text style={styles.textNote}>Note: Half-payment must be done first! Cancellation of booking is not allowed!</Text>
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
    backgroundColor: 'pink',
    height: 500,
    width: 300,
    marginTop: -30,
    borderRadius:10
  },
  text: {
    fontSize: 30,
    marginBottom: 40,
    marginTop:-20
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 250,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom: 30,
    paddingLeft: 20,
    fontSize: 15,
  },
  button: {
    backgroundColor: 'lightblue',
    height: 50,
    width: 180,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 18,
  },
  textDriver: {
    fontSize: 15,
    backgroundColor: 'white',
    height: 50,
    width: 250,
    borderRadius: 50,
    borderWidth: 1,
    marginBottom: 30,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  textNote: {
    fontSize: 15,
    marginTop: 30,
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    marginTop: -50,
  },
});

export default TricycleScreen;
