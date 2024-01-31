
// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView  } from 'react-native';

// const NotificationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>NOTIFICATION</Text>

       
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
   
//   },


//   text: {
//     fontSize: 30, // Adjust the font size as needed
//     marginBottom: 30
//   },



//   logo: {
//     width: 210, // Adjust width as needed
//     height: 210, // Adjust height as needed
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default NotificationScreen;



// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
// import { firebase } from '../../config'; // Import your firebase config

// const NotificationScreen = () => {
//   const [acceptedRequests, setAcceptedRequests] = useState([]);

//   useEffect(() => {
//     const unsubscribe = firebase.firestore().collection('acceptedRequest').onSnapshot(snapshot => {
//       const data = [];
//       snapshot.forEach(doc => {
//         data.push({ id: doc.id, ...doc.data() });
//       });
//       console.log(data); // Log the data fetched from Firestore
//       setAcceptedRequests(data);
//     });
  
//     return () => {
//       unsubscribe(); // Unsubscribe from snapshot listener when component unmounts
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>NOTIFICATION</Text>
//         <ScrollView>
//           {acceptedRequests.map(request => (
//             // <Text key={request.id}>{request.id}</Text>
//             <Text key={request.id}>{request.id}</Text>
//           ))}
//         </ScrollView>
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
//     fontSize: 30,
//     marginBottom: 30,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default NotificationScreen;









import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook from React Navigation

const NotificationScreen = () => {
  const navigation = useNavigation(); // Initialize navigation hook
  const [acceptedRequests, setAcceptedRequests] = useState([]);
  const [userData, setUserData] = useState(null);


 
  

  // useEffect(() => {


  //   const fetchUserData = async () => {
  //     const contactNumber = firebase.auth().currentUser.phoneNumber; 
  //     const usersCollection = firebase.firestore().collection('Users');

  //     try {
  //       const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
  //       if (!querySnapshot.empty) {
  //         const user = querySnapshot.docs[0].data();
  //         setUserData(user);
  //         console.log('NNCurrently logged-in user:', user.name); // Log the currently logged-in user's name
  //       }
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchUserData(); 


  //   const unsubscribe = firebase.firestore().collection('acceptedRequest').onSnapshot(snapshot => {
  //     const data = [];
  //     snapshot.forEach(doc => {
  //       // data.push({ id: doc.id, ...doc.data() });
  //       const requestData = doc.data();
  //       // Check if the item name matches the currently logged-in user's name
  //       if (userData && requestData.itemName === userData.name) {
  //         data.push({ id: doc.id, ...requestData });
  //       }

  //     });
  //     console.log(data);
  //     setAcceptedRequests(data);
  //   });
  
  //   return () => {
  //     unsubscribe();
  //   };
  // }, [userData]);



  useEffect(() => {
    const fetchUserData = async () => {
      const contactNumber = firebase.auth().currentUser.phoneNumber; 
      const usersCollection = firebase.firestore().collection('Users');

      try {
        const querySnapshot = await usersCollection.where('contactNumber', '==', contactNumber).get();
        if (!querySnapshot.empty) { 
          const user = querySnapshot.docs[0].data();
          setUserData(user);
          console.log('Currently logged-in user:', user.name); // Log the currently logged-in user's name

         // Inside the useEffect hook
          const unsubscribe = firebase.firestore().collection('acceptedRequest')
          .where('requestBy', '==', user.name) // Query based on requestBy field
          
          .onSnapshot(snapshot => {
            const data = [];
            snapshot.forEach(doc => {
              const requestData = doc.data();
              data.push({ id: doc.id, ...requestData });
            });
            
            // Sort data based on timeAccepted
            data.sort((a, b) => b.timeAccepted - a.timeAccepted);
            // console.log(data);
            setAcceptedRequests(data);
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


  // const handleItemClick = (id) => {
  //   // Navigate to NotificationDetailScreen with the ID parameter
  //   navigation.navigate('NotificationDetail', { requestId: id });
  // };

  const handleItemClick = async (id) => {
    try {
      // Update the document in the "acceptedRequest" collection with the current timestamp
      await firebase.firestore().collection('acceptedRequest').doc(id).update({
        rideEnded: firebase.firestore.FieldValue.serverTimestamp() // Server timestamp to ensure accuracy
      });
      // Navigate to NotificationDetailScreen with the ID parameter
      navigation.navigate('NotificationDetail', { requestId: id });
    } catch (error) {
      console.error('Error updating timeClicked:', error);
    }
  };

 
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      
      <View style={styles.seccontainer}>
        <Text style={styles.text}>NOTIFICATION</Text>
        
        <ScrollView style={styles.scroll}>
          {acceptedRequests.map(request => (
            <TouchableOpacity key={request.id} style={styles.lists} onPress={() => handleItemClick(request.id)}>
              {/* <Text>{request.id}</Text> */}
              {/* <Text style={styles.notif}>Your booking is accepted! <Text style={styles.time}>{formatTimestamp(request.timeAccepted)}</Text></Text> */}
              <Text style={styles.notif}>Your booking is accepted! </Text>

              <View style={styles.driverContainer}>
                   <Text style={styles.driverName}>{request.driverName} (Driver name) </Text>
              </View>

              <View style={styles.timeContainer}>
                  <Text style={styles.time}>{formatTimestamp(request.timeAccepted)}</Text>
             </View>

              <View style={styles.indicator} />

              
           
            


            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const formatTimestamp = timestamp => {
  if (!timestamp) return null;
  if (timestamp.toDate) {
    const date = timestamp.toDate();
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  } else if (timestamp instanceof Date) {
    return timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  } else {
    return String(timestamp);
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
    backgroundColor: 'pink',
    height: 500,
    width: 300,
    marginTop: -30,
    paddingBottom:25,
    borderRadius:10
    
  },
  text: {
    fontSize: 30,
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

  lists:{
    marginTop:5,
    backgroundColor:'lightblue',
    height:75,
    width:280,
    borderRadius:10
  },

  notif:{

    textAlign:'center',
    marginTop:35,
   marginLeft:-95
  },

  time: {
    fontWeight: 'bold', // Example styling
    marginLeft: 10, // Example positioning
    fontSize:12
 
  },
  timeContainer: {
    position: 'absolute',
    bottom: 10, // Adjust as needed
    right: 10, // Adjust as needed
  },

  driverContainer: {
    position: 'absolute',
    top: 10, // Adjust as needed
    left: 10, // Adjust as needed
  },
  driverName: {
    fontWeight: 'bold', // Example styling
    // Additional styling for the driver name if needed
  },

  indicator: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 10,
    height: 10,
    backgroundColor: 'red',
    borderRadius: 5,
  },
  
});

export default NotificationScreen;
