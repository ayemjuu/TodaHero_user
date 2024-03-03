// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HistoryDetailScreen = ({ route }) => {
//   const { itemId } = route.params; // Get the itemId passed from navigation params

//   // Dummy data, you can fetch actual data based on itemId from your database
//   const historyItem = {
//     id: itemId,
//     // Add other properties as needed
//     // For example:
//     // description: 'Some description',
//     // date: '2024-01-30',
//     // ...
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>History Detail</Text>
//       <View style={styles.detailContainer}>
//         <Text>ID: {historyItem.id}</Text>
//         {/* Render other details here */}
//         {/* For example: */}
//         {/* <Text>Description: {historyItem.description}</Text> */}
//         {/* <Text>Date: {historyItem.date}</Text> */}
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
//   text: {
//     fontSize: 30,
//     marginBottom: 20,
//   },
//   detailContainer: {
//     padding: 20,
//     backgroundColor: 'lightgray',
//     borderRadius: 10,
//   },
// });

// export default HistoryDetailScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';
// import { firebase } from '../../config';

// const HistoryDetailScreen = ({ route }) => {
//   const { itemId } = route.params; // Get the itemId passed from navigation params
//   const [historyItem, setHistoryItem] = useState(null);

//   useEffect(() => {
//     const fetchHistoryItem = async () => {
//       try {
//         const doc = await firebase.firestore().collection('history').doc(itemId).get();
//         if (doc.exists) {
//           const data = doc.data();
//           setHistoryItem(data);
//         } else {
//           console.log('No such document!');
//         }
//       } catch (error) {
//         console.error('Error fetching history item:', error);
//       }
//     };

//     fetchHistoryItem();
//   }, [itemId]);

//   const formatTimestamp = timestamp => {
//     if (!timestamp) return null;
//     if (timestamp.toDate) {
//       // Firestore Timestamp object
//       const date = timestamp.toDate();
//       return date.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
//     } else if (timestamp instanceof Date) {
//       // JavaScript Date object
//       return timestamp.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
//     } else {
//       // Some other format
//       return String(timestamp); // Convert to string
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <View  style={styles.seccontainer}>
//         <Text style={styles.text}>Completed ride:</Text>
//         {historyItem && (
//           <View>
//             <Text style={styles.details}>Driver Name: {historyItem.driverName}</Text>
//             <Text style={styles.details}>Driver Plate Number: {historyItem.driverPlateNumber}</Text>
//             <Text style={styles.details}>Drop-off Point: {historyItem.dropOffPoint}</Text>
//             <Text style={styles.details}>Pickup Point: {historyItem.pickupPoint}</Text>
//             <Text style={styles.details}>Requested By: {historyItem.requestBy}</Text>
//             <Text style={styles.details}>Time Requested: {historyItem.timeRequested}</Text>
//             <Text style={styles.details}>Time Accepted: {formatTimestamp(historyItem.timeAccepted)}</Text>
            
//             <Text style={styles.details}>Ride Ended: {formatTimestamp(historyItem.rideEnded)}</Text>
//           </View>
//       )}
//        </View>
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
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     marginTop:-40
    
//   },
//   details: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
// });

// export default HistoryDetailScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import { Ionicons } from '@expo/vector-icons';

const HistoryDetailScreen = ({ route }) => {
  const { itemId } = route.params; // Get the itemId passed from navigation params
  const [historyItem, setHistoryItem] = useState(null);
  const navigation = useNavigation(); // Initialize navigation

  useEffect(() => {
    const fetchHistoryItem = async () => {
      try {
        const doc = await firebase.firestore().collection('history').doc(itemId).get();
        if (doc.exists) {
          const data = doc.data();
          setHistoryItem(data);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error fetching history item:', error);
      }
    };

    fetchHistoryItem();
  }, [itemId]);

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

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <View  style={styles.seccontainer}>
      <TouchableOpacity onPress={() => navigation.navigate('History')} style={styles.backButton}>
          {/* <Text style={styles.backButton}>asd<Ionicons name="arrow-back-sharp" size={35} color="black" /></Text> */}
          <Ionicons name="arrow-back-sharp" size={35} color="black" />
       </TouchableOpacity>
        <Text style={styles.text}>Completed ride:</Text>
        {historyItem && (
          <View>
            <Text style={styles.details}>Driver Name: {historyItem.driverName}</Text>
            <Text style={styles.details}>Driver Plate Number: {historyItem.driverPlateNumber}</Text>
            <Text style={styles.details}>Drop-off Point: {historyItem.dropOffPoint}</Text>
            <Text style={styles.details}>Pickup Point: {historyItem.pickupPoint}</Text>
            <Text style={styles.details}>Requested By: {historyItem.requestBy}</Text>
            <Text style={styles.details}>Time Requested: {historyItem.timeRequested}</Text>
            <Text style={styles.details}>Time Accepted: {formatTimestamp(historyItem.timeAccepted)}</Text>
            <Text style={styles.details}>Ride Ended: {formatTimestamp(historyItem.rideEnded)}</Text>
          </View>
      )}
       </View>
       {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.backButton}><Ionicons name="arrow-back-sharp" size={24} color="black" /></Text>
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
    padding:20,
    borderRadius:10
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    marginTop:-40
  },
  details: {
    fontSize: 16,
    marginBottom: 5,
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

export default HistoryDetailScreen;
