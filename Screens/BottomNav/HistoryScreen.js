
// import React from 'react';
// import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

// const HistoryScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>HISTORY</Text>

       
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

// export default HistoryScreen;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { firebase } from '../../config';
import { useNavigation } from '@react-navigation/native';

const HistoryScreen = () => {
  const [historyData, setHistoryData] = useState([]);
  const [userData, setUserData] = useState(null);
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

            //     // Sort data based on rideEnded field
            // data.sort((a, b) => {
            //   const rideEndedA = a.rideEnded.toDate();
            //   const rideEndedB = b.rideEnded.toDate();
            //   return rideEndedB - rideEndedA; // Sorting in descending order
            // });

              // Sort data based on timeAccepted
            data.sort((a, b) => b.rideEnded - a.rideEnded);
            // console.log(data);

              setHistoryData(data);

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

  const handleListItemPress = (id) => {
    // Navigate to HistoryDetail screen, pass id or any necessary data as params
    navigation.navigate('HistoryDetail', { itemId: id });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
        <Text style={styles.text}>HISTORY</Text>
        <ScrollView style={styles.scroll}>
          {historyData.map(historyItem => (
            // <View key={historyItem.id} style={styles.lists}>
            //   <TouchableOpacity key={historyItem.id} onPress={() => handleListItemPress(historyItem.id)}></TouchableOpacity>
            //     <Text style={styles.itemText}>ID: {historyItem.id}</Text>

            //     <Text style={styles.itemText}>{historyItem.description}</Text>
            // </View>
            <TouchableOpacity key={historyItem.id} onPress={() => handleListItemPress(historyItem.id)}>
              <View style={styles.lists}>
                {/* <Text style={styles.itemText}>ID: {historyItem.id}</Text> */}
                <Text style={styles.itemText}>Ride Complete!</Text>

                  <View style={styles.driverContainer}>
                    <Text style={styles.driverName}>{historyItem.driverName} (Driver name)</Text>
                  </View>

                  <View style={styles.timeContainer}>
                    <Text style={styles.time}>{formatTimestamp(historyItem.rideEnded)}</Text>
                  </View>

                  <View style={styles.indicator} />

                <Text style={styles.itemText}>{historyItem.description}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

// const formatTimestamp = timestamp => {
//   if (!timestamp) return null;
//   if (timestamp.toDate) {
//     const date = timestamp.toDate();
//     return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
//   } else if (timestamp instanceof Date) {
//     return timestamp.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
//   } else {
//     return String(timestamp);
//   }
// };

const formatTimestamp = timestamp => {
  if (!timestamp) return null;

  const rideEndedDate = timestamp.toDate ? timestamp.toDate() : timestamp;

  const today = new Date();
  const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const rideEndedDay = new Date(rideEndedDate.getFullYear(), rideEndedDate.getMonth(), rideEndedDate.getDate());

  if (rideEndedDay < todayDate) {
    // If ride ended time is not today, return day name
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[rideEndedDay.getDay()];
  } else {
    // If ride ended time is today, return time
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
    backgroundColor: 'pink',
    height: 500,
    width: 300,
    marginTop: -30,
    paddingBottom:25,
    borderRadius:10
  },
  text: {
    // fontSize: 30,
    // marginBottom: 30,
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
  lists: {
    marginTop: 5,
    backgroundColor: 'lightblue',
    height: 75,
    width: 280,
    borderRadius: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  itemText: {
    textAlign: 'center',
    marginTop: 35,
   
    marginRight:155
  },

  timeContainer: {
    position: 'absolute',
    bottom: 10, // Adjust as needed
    right: 10, // Adjust as needed
  },
  time: {
    fontWeight: 'bold', // Example styling
    marginLeft: 10, // Example positioning
    fontSize:12
  },

  driverContainer: {
    position: 'absolute',
    top: 10, // Adjust as needed
    left: 10, // Adjust as needed
  },
  driverName: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight:'bold'
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

export default HistoryScreen;
