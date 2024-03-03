// import React from 'react';
// import { View, Text, StyleSheet, TextInput } from 'react-native';


// const ReportScreen = ({ route }) => {
//     const { driverName, driverPlateNumber } = route.params;
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Report Screen</Text>
//       <Text>Driver Name: {driverName}</Text>
//       {/* <Text>Driver Plate Number: {driverPlateNumber}</Text> */}
//       <TextInput
//         style={styles.input}
//         placeholder="Write your report here"
//         multiline
//         value={report}
//         onChangeText={handleReportChange}
//       />
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
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
// });

// export default ReportScreen;



// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button, Alert, Image } from 'react-native';
// import { firebase } from '../../config'; // Import Firebase configuration

// const ReportScreen = ({ route }) => {
//   const { driverName, driverPlateNumber } = route.params;
//   const [report, setReport] = useState('');

//   const handleReportChange = (text) => {
//     setReport(text);
//   };

//   const handleReportSubmit = async () => {
//     Alert.alert(
//       "Confirm Report",
//       "Are you sure you want to submit this report?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel"
//         },
//         {
//           text: "Submit",
//           onPress: async () => {
//             try {
//               // Save report data to Firebase Firestore
//               await firebase.firestore().collection('Report').add({
//                 driverName,
//                 driverPlateNumber,
//                 report,
//                 timestamp: firebase.firestore.Timestamp.now(),
//               });
//               Alert.alert('Success', 'Report submitted successfully.');
//               // Clear input field after submission
//               setReport('');
//             } catch (error) {
//               console.error('Error saving report: ', error);
//               Alert.alert('Error', 'Failed to submit report. Please try again later.');
//             }
//           }
//         }
//       ],
//       { cancelable: false }
//     );
//   };
  

//   return (
//     <View style={styles.container}>
//           <Image source={require('../../assets/logo.png')} style={styles.logo} />
//         <View style={styles.seccontainer}>
//       <Text style={styles.text}>Report Screen</Text>
//       <Text>Driver Name: {driverName}</Text>
//       <Text>Driver Plate Number: {driverPlateNumber}</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Write your report here"
//         multiline
//         value={report}
//         onChangeText={handleReportChange}
//         textAlignVertical="top"
//       />
//       <Button title="Report" onPress={handleReportSubmit} />
//     </View>
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
//     padding:20,
//     borderRadius:10
//   },
//   text: {
//     fontSize: 25,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '95%',
//     height: 300,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20,
//     marginBottom: 20,
//     backgroundColor:'white'
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default ReportScreen;




// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, Button, Alert, Image, ActivityIndicator } from 'react-native';
// import { firebase } from '../../config'; // Import Firebase configuration

// const ReportScreen = ({ route }) => {
//   const { driverName, driverPlateNumber } = route.params;
//   const [report, setReport] = useState('');
//   const [isLoading, setIsLoading] = useState(false); // Loading state for report submission

//   const handleReportChange = (text) => {
//     setReport(text);
//   };

//   const handleReportSubmit = async () => {
//     Alert.alert(
//       "Confirm Report",
//       "Are you sure you want to submit this report?",
//       [
//         {
//           text: "Cancel",
//           style: "cancel"
//         },
//         {
//           text: "Submit",
//           onPress: async () => {
//             try {
//               setIsLoading(true); // Set loading to true when submitting report
//               // Save report data to Firebase Firestore
//               await firebase.firestore().collection('Report').add({
//                 driverName,
//                 driverPlateNumber,
//                 report,
//                 timestamp: firebase.firestore.Timestamp.now(),
//               });
//               Alert.alert('Success', 'Report submitted successfully.');
//               // Clear input field after submission
//               setReport('');
//             } catch (error) {
//               console.error('Error saving report: ', error);
//               Alert.alert('Error', 'Failed to submit report. Please try again later.');
//             } finally {
//               setIsLoading(false); // Set loading to false after submission
//             }
//           }
//         }
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>Report Screen</Text>
//         <Text>Driver Name: {driverName}</Text>
//         <Text>Driver Plate Number: {driverPlateNumber}</Text>
//         <TextInput
//           style={styles.input}
//           placeholder="Write your report here"
//           multiline
//           value={report}
//           onChangeText={handleReportChange}
//           textAlignVertical="top" // Align text to the top left
//         />
//         {isLoading ? (
//           <ActivityIndicator size="large" color="#0000ff" />
//         ) : (
//           <Button title="Report" onPress={handleReportSubmit} />
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
//     padding: 20,
//     borderRadius: 10
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   input: {
//     width: '95%',
//     height: 300,
//     borderWidth: 1,
//     borderColor: 'gray',
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20,
//     marginBottom: 20,
//     backgroundColor: 'white'
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default ReportScreen;




import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert, Image, ActivityIndicator, TouchableOpacity } from 'react-native';
import { firebase } from '../../config'; // Import Firebase configuration
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';



const ReportScreen = ({ route }) => {
  const { driverName, driverPlateNumber, userName } = route.params;
  const [report, setReport] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for report submission
  const [currentUser, setCurrentUser] = useState(null); // State to store current user data
  const navigation = useNavigation(); // Initialize navigation


  useEffect(() => {
    // Fetch currently logged-in user's information
    const fetchCurrentUser = async () => {
      try {
        const user = firebase.auth().currentUser;
        if (user) {
          // User is signed in
          setCurrentUser(user);
          console.log('Current User Name:', user.displayName);
          console.log('Current User Contact Number:', user.phoneNumber);
        } else {
          // No user is signed in
          console.log('No user signed in.');
        }
      } catch (error) {
        console.error('Error fetching user data: ', error);
      }
    };
  
    fetchCurrentUser();
  }, []);
  

  const handleReportChange = (text) => {
    setReport(text);
  };

  const handleReportSubmit = async () => {
    // Check if user is logged in
    if (currentUser) {
        // console.log('Current User Name:', currentUser.displayName || 'Display Name Not Available');
        console.log('Current User Contact Number:', currentUser.phoneNumber);
      Alert.alert(
        "Confirm Report",
        "Are you sure you want to submit this report?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Submit",
            onPress: async () => {
              try {
                setIsLoading(true); // Set loading to true when submitting report
                // Save report data to Firebase Firestore
                await firebase.firestore().collection('Report').add({
                  // driverName,
                  reported: driverName, 
                  // driverPlateNumber,
                  report,
                  timeReported: firebase.firestore.Timestamp.now(),
                //   userName: currentUser.displayName, // Add current user's name to the report
                  // userContact: currentUser.phoneNumber, // Add current user's contact number to the report
                  reportedBy: userName 
                });
                Alert.alert('Success', 'Report submitted successfully.');
                // Clear input field after submission
                setReport('');
              } catch (error) {
                console.error('Error saving report: ', error);
                Alert.alert('Error', 'Failed to submit report. Please try again later.');
              } finally {
                setIsLoading(false); // Set loading to false after submission
              }
            }
          }
        ],
        { cancelable: false }
      );
    } else {
      // User is not logged in
      Alert.alert('Error', 'You need to be logged in to submit a report.');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('NotificationDetail')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
        <Text style={styles.text}>Report Screen</Text>
        <Text>Driver Name: {driverName}</Text>
        <Text>Driver Plate Number: {driverPlateNumber}</Text>
        {/* <Text>User's Name: {userName}</Text> */}
        <TextInput
          style={styles.input}
          placeholder="Write your report here"
          multiline
          value={report}
          onChangeText={handleReportChange}
          textAlignVertical="top" // Align text to the top left
        />
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <Button title="Report" onPress={handleReportSubmit} disabled={!report.trim()} />
        )}
      </View>
      {/* <TouchableOpacity onPress={() => navigation.navigate('Notification')}>
          <Text style={styles.backButton}>Back to Admin</Text>
       </TouchableOpacity> */}
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
    padding: 20,
    borderRadius: 10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '95%',
    height: 300,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: 'white'
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
});

export default ReportScreen;
