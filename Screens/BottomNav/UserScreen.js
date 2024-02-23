//SAVE!!!!

// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';

// const UserScreen = () => {
//   const navigation = useNavigation();
//   const [userData, setUserData] = useState(null);



//   useEffect(() => {
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
//         }
//       })
//       .catch((error) => {
//         console.error('Error fetching user data:', error);
//       });

      
      
//   }, []);

//   const handleLogout = () => {
//     Alert.alert(
//       'Logout',
//       'Are you sure you want to logout?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'Logout',
//           onPress: async () => {
//             try {

      

//               await firebase.auth().signOut();
//               console.log('Logged Out');
            
//               navigation.navigate('Login');
//             } catch (error) {
//               console.error('Error during logout:', error);
//             }
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   return (
//     <View style={styles.container}>
//       {userData && (
//         <View>
//            <Text style={styles.title}>You are logged in as </Text>
//           <Text style={styles.name}>{userData.name}</Text>
//           <Text style={styles.address}>({userData.username}) </Text>
//           <Text style={styles.contactNumber}>{userData.contactNumber}</Text>
//           <Text style={styles.address}> {userData.address}</Text>
         
//         </View>
//       )}

//       <TouchableOpacity style={styles.button} onPress={handleLogout}>
//         <Text style={styles.buttonText}>Logout</Text>
//       </TouchableOpacity>
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

//   seccontainer: {
//     // flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'pink',
//     height: 500,
//     width: 300,
//     marginTop: -30,
   
//   },
//   button: {
//     backgroundColor: 'pink',
//     padding: 10,
//     borderRadius: 50,
//     marginTop: 20,
//     borderWidth: 1,
//     height: 50,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: 'black',
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//   },
//   contactNumber: {
//     fontSize: 18,
//   },
//   address: {
//     fontSize: 18,
//   },
//   title: {
//     fontSize: 25
//   },  
// });

// export default UserScreen;


//para gumana yung code kahit alang phone number na nakalogged in
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const UserScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUser = firebase.auth().currentUser;

    if (currentUser && currentUser.phoneNumber) {
      const contactNumber = currentUser.phoneNumber;
      const usersCollection = firebase.firestore().collection('Users');

      usersCollection
        .where('contactNumber', '==', contactNumber)
        .get()
        .then((querySnapshot) => {
          if (!querySnapshot.empty) {
            const user = querySnapshot.docs[0].data();
            setUserData(user);
          }
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } else {
      // If no phone number is present, set default userData
      setUserData({
        name: 'Kyle Vincent Manuel',
        username: 'kakak',
        contactNumber: '+639185299893',
        address: 'Sa bundok'
      });
    }
  }, []);

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          onPress: async () => {
            try {
              await firebase.auth().signOut();
              console.log('Logged Out');
              navigation.navigate('Login');
            } catch (error) {
              console.error('Error during logout:', error);
            }
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <View style={styles.seccontainer}>
        {userData && (
          <View>
            <Text style={styles.title}>USER ACCOUNT </Text>
            <Text style={styles.name}><AntDesign name="user" size={20} color="black" /> - {userData.name}</Text>
            <Text style={styles.address}>({userData.username}) </Text>
            <Text style={styles.contactNumber}><AntDesign name="phone" size={20} color="black" /> - {userData.contactNumber}</Text>
            <Text style={styles.address}><AntDesign name="home" size={20} color="black" /> - {userData.address}</Text>
          </View>
        )}

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
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
    height: 300,
    width: 300,
    marginTop: -30,
    borderRadius:10
  },
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 50,
    marginTop: 10,
    marginBottom: 20,

    borderWidth: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom:10
  },
  contactNumber: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom:10
  },
  address: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom:10
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
   marginTop:10,
   marginBottom:30
  },
  logo: {
    width: 210,
    height: 210,
    marginBottom: 120,
    marginTop: -200,
  },
});

export default UserScreen;
