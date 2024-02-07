

  // import React, { useState, useEffect } from 'react';
  // import { View, Text, StyleSheet } from 'react-native';
  // import { firebase } from '../../config';

  // const NotificationDetailScreen = ({ route }) => {
  //   const { requestId } = route.params;
  //   const [requestData, setRequestData] = useState(null);

  //   useEffect(() => {
  //     const fetchRequestData = async () => {
  //       try {
  //         const doc = await firebase.firestore().collection('acceptedRequest').doc(requestId).get();
  //         if (doc.exists) {
  //           setRequestData(doc.data());
  //         } else {
  //           console.log("No such document!");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching document: ", error);
  //       }
  //     };

  //     fetchRequestData();

  //     // Cleanup function
  //     return () => {
  //       setRequestData(null); // Reset requestData when unmounting
  //     };
  //   }, [requestId]);



  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.text}>YOUR RIDE DETAILS:</Text>
  //       {requestData ? (
  //         <View>
  //           {/* <Text>Request ID: {requestId}</Text> */}
  //           <Text>Driver Name: {requestData.driverName}</Text>
  //           <Text>Driver Plate Number: {requestData.driverPlateNumber}</Text>
  //           <Text>Drop-off Point: {requestData.dropOffPoint}</Text>
  //           <Text>Pickup Point: {requestData.pickupPoint}</Text>
  //           {/* <Text>Requested By: {requestData.requestBy}</Text>
  //           <Text>Contact Number: {requestData.requestByContactNumber}</Text> */}


  //           <Text>Time Accepted: {requestData.timeAccepted}</Text>
  //           <Text>Time Requested: {requestData.timeRequested}</Text>


  //         </View>
  //       ) : (
  //         <Text>Loading...</Text>
  //       )}
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
  //     fontSize: 24,
  //     marginBottom: 20,
  //   },
  // });

  // export default NotificationDetailScreen;


//SAVEEE!!


  // import React, { useState, useEffect } from 'react';
  // import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
  // import { firebase } from '../../config';
 


  // const NotificationDetailScreen = ({ route }) => {
  //   const { requestId } = route.params;
  //   const [requestData, setRequestData] = useState(null);
  //   // const [buttonClicked, setButtonClicked] = useState(false); // State to track button click
  //   const [successfulButtonClicked, setSuccessfulButtonClicked] = useState(false);

  //   useEffect(() => {
  //     const fetchRequestData = async () => {
  //       try {
  //         const doc = await firebase.firestore().collection('acceptedRequest').doc(requestId).get();
  //         if (doc.exists) {
  //           setRequestData(doc.data());
  //         } else {
  //           console.log("No such document!");
  //         }
  //       } catch (error) {
  //         console.error("Error fetching document: ", error);
  //       }
  //     };

  //     fetchRequestData();

  //     // Cleanup function
  //     return () => {
  //       setRequestData(null); // Reset requestData when unmounting
  //     };
  //   }, [requestId]);

  //   useEffect(() => {
  //     console.log("successfulButtonClicked:", successfulButtonClicked);
  //   }, [successfulButtonClicked]);


  //   const formatTimestamp = timestamp => {
  //     if (!timestamp) return null;
  //     if (timestamp.toDate) {
  //       // Firestore Timestamp object
  //       const date = timestamp.toDate();
  //       // return date.toLocaleString(); // Adjust date formatting as needed
  //       return date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  //     } else if (timestamp instanceof Date) {
  //       // JavaScript Date object
  //       // return timestamp.toLocaleString(); // Adjust date formatting as needed
  //       return timestamp.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
  //     } else {
  //       // Some other format
  //       return String(timestamp); // Convert to string
  //     }
  //   };

  //   const saveToHistory = async () => {
  //     try {
  //       await firebase.firestore().collection('history').doc(requestId).set(requestData);
  //       console.log("Ride details saved to history collection.");
  //       setSuccessfulButtonClicked(true); // Set buttonClicked state to true after successful save
  //     } catch (error) {
  //       console.error("Error saving ride details to history collection: ", error);
  //     }
  //   };
    


  //   return (
  //     <View style={styles.container}>
  //       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
  //       <View style={styles.seccontainer}>


          
  //         <Text style={styles.text}>YOUR RIDE DETAILS:</Text>
  //       {requestData ? (
  //         <View>
  //           {/* <Text>Request ID: {requestId}</Text> */}
  //           <Text style={styles.details}>Driver Name: {requestData.driverName}</Text>
  //           <Text style={styles.details}>Driver Plate Number: {requestData.driverPlateNumber}</Text>
  //           <Text style={styles.details}>Drop-off Point: {requestData.dropOffPoint}</Text>
  //           <Text style={styles.details}>Pickup Point: {requestData.pickupPoint}</Text>
  //           <Text style={styles.details}>Requested By: {requestData.requestBy}</Text>
  //           {/* <Text>Contact Number: {requestData.requestByContactNumber}</Text> */}


  //           {/* <Text style={styles.details}>Time Accepted: {requestData.timeAccepted}</Text> */}
  //           <Text style={styles.details}>Time Requested: {requestData.timeRequested}</Text>
  //             <Text style={styles.details}>Time Accepted: {formatTimestamp(requestData.timeAccepted)}</Text>
  //           {/* <Text style={styles.details}>Time Requested: {formatTimestamp(requestData.timeRequested)}</Text> */}


  //         </View>
  //       ) : (
  //         <Text>Loading...</Text>
  //       )}
          

      
  //         {/* <View style={styles.buttonContainer}>
  //         {!successfulButtonClicked && ( 
  //           <TouchableOpacity style={styles.button} onPress={saveToHistory}>
  //             <Text style={styles.buttonText}>Successful</Text>
  //           </TouchableOpacity>
  //           )}
          
  //           <TouchableOpacity style={styles.button}>
  //             <Text style={styles.buttonText}>Report</Text>
  //           </TouchableOpacity>

  //         </View> */}

  //           <View style={styles.buttonContainer}>
  //             {!successfulButtonClicked && ( 
  //               <TouchableOpacity style={styles.button} onPress={saveToHistory}>
  //                 <Text style={styles.buttonText}>Successful</Text>
  //               </TouchableOpacity>
  //             )}
  //             {/* Report button */}
  //             <TouchableOpacity style={styles.button}>
  //               <Text style={styles.buttonText}>Report</Text>
  //             </TouchableOpacity>
  //           </View>
                    
      
        
         
  //         <Text >Check your items first before clicking succesful button:</Text>
  //       </View>
        
  //     </View>
  //   );
  // };

  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     // backgroundColor: '#B4CDE6',
  //     backgroundColor: 'white',
  //   },
  //   seccontainer: {
  //     // flex: 1,
  //     justifyContent: 'center',
  //     alignItems: 'center',
  //     backgroundColor: 'pink',
  //     height: 500,
  //     width: 300,
  //     marginTop: -30,
  //     padding:20
    
  //   },


  //   text: {
  //     fontSize: 25, // Adjust the font size as needed
  //     marginBottom: 30,
  //     marginTop:-150
  //   },



  //   logo: {
  //     width: 210, // Adjust width as needed
  //     height: 210, // Adjust height as needed
  //     marginBottom: 10,
  //     marginTop: -50,
  //   },

  //   details:{
  //     fontSize:15
  //   },

  //   buttonContainer: {
  //     flexDirection: 'row',
  //     marginTop: 20,
    
      
  //   },
  //   button: {
  //     backgroundColor: 'lightblue',
  //     padding: 10,
  //     marginHorizontal: 10,
  //     width:100,
    
  //   },

  //   buttonText:{
  //     textAlign:'center'
  //   }
  // });

  // export default NotificationDetailScreen;


  


  import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { firebase } from '../../config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


const NotificationDetailScreen = ({ route }) => {
  const { requestId } = route.params;
  const [requestData, setRequestData] = useState(null);
  const [successfulButtonClicked, setSuccessfulButtonClicked] = useState(false);
  const navigation = useNavigation();



  useEffect(() => {
    const fetchRequestData = async () => {
      try {
        const doc = await firebase.firestore().collection('acceptedRequest').doc(requestId).get();
        if (doc.exists) {
          setRequestData(doc.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching document: ", error);
      }
    };

    fetchRequestData();

    // Cleanup function
    return () => {
      setRequestData(null); // Reset requestData when unmounting
    };
  }, [requestId]);

  useEffect(() => {
    const checkButtonClicked = async () => {
      const clicked = await AsyncStorage.getItem(`successfulButtonClicked_${requestId}`); // Use unique key for each ride detail
      if (clicked === 'true') {
        setSuccessfulButtonClicked(true);
      }
    };

    checkButtonClicked();
  }, []);

  const formatTimestamp = timestamp => {
    if (!timestamp) return null;
    if (timestamp.toDate) {
      // Firestore Timestamp object
      const date = timestamp.toDate();
      return date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    } else if (timestamp instanceof Date) {
      // JavaScript Date object
      return timestamp.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
    } else {
      // Some other format
      return String(timestamp); // Convert to string
    }
  };

  // const saveToHistory = async () => {
  //   try {
  //     await firebase.firestore().collection('history').doc(requestId).set(requestData);
  //     console.log("Ride details saved to history collection.");
  //     await AsyncStorage.setItem(`successfulButtonClicked_${requestId}`, 'true'); // Set flag in AsyncStorage with a unique key
  //     setSuccessfulButtonClicked(true); // Set buttonClicked state to true after successful save
  //     // Alert when the successful button is clicked
  //     Alert.alert("Success", "Your ride is officially ended.");
      
  //   } catch (error) {
  //     console.error("Error saving ride details to history collection: ", error);
  //   }
  // };

  const saveToHistory = async () => {
    try {

          // Get the current timestamp
    const currentTime = firebase.firestore.Timestamp.now();
      // Show confirmation alert before saving
      Alert.alert(
        "Confirm",
        "Are you sure you want to end your ride?",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Confirm",
            onPress: async () => {
              // Save ride details to history collection
              // await firebase.firestore().collection('history').doc(requestId).set(requestData);
              await firebase.firestore().collection('history').doc(requestId).set({
                ...requestData,
                rideEnded: currentTime,  // Add rideEnded field with the current time\
                successful: true  //Add successful field w/ boolean
              });
              console.log("Ride details saved to history collection.");

              // Update the "successful" field in the "acceptedRequest" collection
              await firebase.firestore().collection('acceptedRequest').doc(requestId).update({
                successful: true
              });
  
              // Set flag in AsyncStorage with a unique key
              await AsyncStorage.setItem(`successfulButtonClicked_${requestId}`, 'true');
              
              // Set buttonClicked state to true after successful save
              setSuccessfulButtonClicked(true);
  
              // Show success alert
              Alert.alert("Success", "Your ride is officially ended.");
              // navigation.goBack();
              navigation.navigate('Notification')

              
            }
          }
        ],
        { cancelable: false }
      );
    } catch (error) {
      console.error("Error saving ride details to history collection: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <View style={styles.seccontainer}>
        <Text style={styles.text}>YOUR RIDE DETAILS:</Text>
        {requestData ? (
          <View>
            <Text style={styles.details}>Driver Name: {requestData.driverName}</Text>
            <Text style={styles.details}>Driver Plate Number: {requestData.driverPlateNumber}</Text>
            <Text style={styles.details}>Drop-off Point: {requestData.dropOffPoint}</Text>
            <Text style={styles.details}>Pickup Point: {requestData.pickupPoint}</Text>
            <Text style={styles.details}>Requested By: {requestData.requestBy}</Text>
            <Text style={styles.details}>Time Requested: {requestData.timeRequested}</Text>
            <Text style={styles.details}>Time Accepted: {formatTimestamp(requestData.timeAccepted)}</Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
        <View style={styles.buttonContainer}>
          {!successfulButtonClicked && ( 
            <TouchableOpacity style={styles.button} onPress={saveToHistory}>
              <Text style={styles.buttonText}>Successful</Text>
            </TouchableOpacity>
          )}
          {/* Report button */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Report</Text>
          </TouchableOpacity>
        </View>
        <Text>Check your items first before clicking successful button:</Text>
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
    padding:20,
    borderRadius:10
  },
  text: {
    fontSize: 25,
    marginBottom: 30,
    marginTop:-150
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    marginTop: -50,
  },
  details:{
    fontSize:15
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginHorizontal: 10,
    width:100,
  },
  buttonText:{
    textAlign:'center'
  }
});

export default NotificationDetailScreen;
