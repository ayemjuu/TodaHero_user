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





// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const HomeScreen = () => {
//   const [queuingLists, setQueuingLists] = useState([]);

//   useEffect(() => {
    

//     // Get queuing list data from Firestore in real-time
//     const queuingListRef = firebase.firestore().collection('ActiveUsers');
//     const unsubscribe = queuingListRef
//       // .where('registeredOut', '==', false) // Filter based on users not registered out
//       // .where('removalDateTime', '==', null)
//       .orderBy('registrationDateTime', 'asc')
//       .onSnapshot((snapshot) => {
//         const queuingData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//         setQueuingLists(queuingData);
//       });

//     // Cleanup the listener when the component is unmounted
//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//         <View style={styles.seccontainer}>
        
//         <Text style={styles.text}> AVAILABLE DRIVERS:</Text>
//         {/* Display Queuing Lists */}
//         <FlatList
//           data={queuingLists}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.listItem}>
//               <Text style={styles.textItem}>{` Plate number: ${item.plateNumber}`}</Text>
//             </View>
//           )}
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
//     borderRadius:10
//   },
//   text: {
//     fontSize: 30,
//     marginTop:20,
//     marginBottom: 30,
//   },
//   listItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC',
   
    

//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },

//   textItem:{
//     fontSize:18
//   }
// });

// export default HomeScreen;




// //working below
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';
// import firebase from 'firebase/compat';
// import 'firebase/firestore';

// const HomeScreen = () => {
//   const [queuingLists, setQueuingLists] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const fetchQueuingLists = () => {
//       setLoading(true);
//       const queuingListRef = firebase.firestore().collection('ActiveUsers');
//       const unsubscribe = queuingListRef
//         .orderBy('registrationDateTime', 'asc')
//         .onSnapshot((snapshot) => {
//           const queuingData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//           setQueuingLists(queuingData);
//           setLoading(false);
//         });

//       return unsubscribe;
//     };

//     const unsubscribe = fetchQueuingLists();

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   const toggleLoading = () => {
//     setLoading(prevLoading => !prevLoading);
//   };

//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo} />
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}> AVAILABLE DRIVERS:</Text>
//         {/* <TouchableOpacity onPress={toggleLoading} style={styles.button}>
//           <Text style={styles.buttonText}>{loading ? 'Stop Loading' : 'Start Loading'}</Text>
//         </TouchableOpacity>
//         {loading && <ActivityIndicator size="large" color="green" />} */}
//         {/* Display Queuing Lists */}
//         <FlatList
//           data={queuingLists}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.listItem}>
//               <Text style={styles.textItem}>{` Plate number: ${item.plateNumber}`}</Text>
//             </View>
//           )}
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
//     backgroundColor: '#ffd702',
//     height: 500,
//     width: 300,
//     marginTop: -30,
//     borderRadius: 10,
//   },
//   text: {
//     fontSize: 25,
//     marginTop: 20,
//     marginBottom: 30,
//   },
//   listItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#CCCCCC',
//     backgroundColor:'lightblue',
//     width:260,
//     height:50,
//     marginBottom:5,
//     borderRadius:5
//   },
//   logo: {
//     width: 210,
//     height: 210,
//     marginBottom: 10,
//     marginTop: -50,
//   },
//   textItem: {
//     fontSize: 18,
//     textAlign:'center'

//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//   },
// });

// export default HomeScreen;


//scrollable na siya

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import firebase from 'firebase/compat';
import 'firebase/firestore';

const HomeScreen = () => {
  const [queuingLists, setQueuingLists] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchQueuingLists = () => {
      setLoading(true);
      const queuingListRef = firebase.firestore().collection('ActiveUsers');
      const unsubscribe = queuingListRef
        .orderBy('registrationDateTime', 'asc')
        .onSnapshot((snapshot) => {
          const queuingData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setQueuingLists(queuingData);
          setLoading(false);
        });

      return unsubscribe;
    };

    const unsubscribe = fetchQueuingLists();

    return () => {
      unsubscribe();
    };
  }, []);

  const toggleLoading = () => {
    setLoading(prevLoading => !prevLoading);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
        <Text style={styles.text}> AVAILABLE DRIVERS:</Text>
        {/* <TouchableOpacity onPress={toggleLoading} style={styles.button}>
          <Text style={styles.buttonText}>{loading ? 'Stop Loading' : 'Start Loading'}</Text>
        </TouchableOpacity>
        {loading && <ActivityIndicator size="large" color="green" />} */}
        {/* Display Queuing Lists */}
        <FlatList
          data={queuingLists}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              <Text style={styles.textItem}>{` Plate number: ${item.plateNumber}`}</Text>
            </View>
          )}
          contentContainerStyle={styles.list}
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
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
    marginTop: 20,
    marginBottom: 30,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    backgroundColor:'lightblue',
    width:260,
    height:50,
    marginBottom:5,
    borderRadius:5
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 10,
    marginTop: -50,
  },
  textItem: {
    fontSize: 18,
    textAlign:'center'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  list: {
    flexGrow: 1,
  },
});

export default HomeScreen;
