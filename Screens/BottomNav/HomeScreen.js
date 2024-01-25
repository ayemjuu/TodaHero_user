// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#B4CDE6',
//   },
//   text: {
//     fontSize: 20, // Adjust the font size as needed
//   },
// });

// export default HomeScreen;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const HomeScreen = () => {
//   const [queuingLists, setQueuingLists] = useState([]);

//   useEffect(() => {
   
//     // Get queuing list data from Firestore
//     const fetchQueuingLists = async () => {
//       const queuingListRef = firebase.firestore().collection('Toda');
//       const snapshot = await queuingListRef.get();

//       const queuingData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//       setQueuingLists(queuingData);
//     };

//     fetchQueuingLists();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Home Screen</Text>

//       {/* Display Queuing Lists */}
//       <FlatList
//         data={queuingLists}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.listItem}>
//             <Text>{` plate number: ${item.plateNumber}`}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#B4CDE6',
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   listItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC',
//   },
// });

// export default HomeScreen;



import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import firebase from 'firebase/compat';
import 'firebase/firestore';

const HomeScreen = () => {
  const [queuingLists, setQueuingLists] = useState([]);

  useEffect(() => {
    

    // Get queuing list data from Firestore in real-time
    const queuingListRef = firebase.firestore().collection('ActiveUsers');
    const unsubscribe = queuingListRef
      // .where('registeredOut', '==', false) // Filter based on users not registered out
      // .where('removalDateTime', '==', null)
      .orderBy('registrationDateTime', 'asc')
      .onSnapshot((snapshot) => {
        const queuingData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setQueuingLists(queuingData);
      });

    // Cleanup the listener when the component is unmounted
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>

      {/* Display Queuing Lists */}
      <FlatList
        data={queuingLists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{` plate number: ${item.plateNumber}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B4CDE6',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
});

export default HomeScreen;
