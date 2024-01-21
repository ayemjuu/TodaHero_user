

import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const UserScreen = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);



  useEffect(() => {
    // Fetch the currently logged-in user's contact number
    const currentUser = firebase.auth().currentUser;
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
        }
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
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
      {userData && (
        <View>
           <Text style={styles.title}>You are logged in as </Text>
          <Text style={styles.name}>{userData.name}</Text>
          <Text style={styles.address}>({userData.username}) </Text>
          <Text style={styles.contactNumber}>{userData.contactNumber}</Text>
          <Text style={styles.address}> {userData.address}</Text>
         
        </View>
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
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

  seccontainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
    height: 500,
    width: 300,
    marginTop: -30,
   
  },
  button: {
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 50,
    marginTop: 20,
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
  },
  contactNumber: {
    fontSize: 18,
  },
  address: {
    fontSize: 18,
  },
  title: {
    fontSize: 25
  },  
});

export default UserScreen;
