//gumagana na ahahhahah ggs

import React, { useState, useEffect } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
  Image
} from 'react-native';
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha';
import { firebaseConfig } from '../config';
import firebase from 'firebase/compat/app';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const PassengerScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const recaptchaVerifier = React.useRef(null);
  const navigation = useNavigation();
  const [allContactNumbers, setAllContactNumbers] = useState([]);

 

  useEffect(() => {
    // Fetch all contact numbers from Firestore when the component mounts
    const usersCollection = firebase.firestore().collection('Users');

    usersCollection
      .get()
      .then((querySnapshot) => {
        const numbers = querySnapshot.docs.map((doc) => doc.data().contactNumber);
        setAllContactNumbers(numbers);
        console.log('All contact numbers:', numbers); // Log all contact numbers

        // Reset phone number and code when the component mounts
      setPhoneNumber('');
      setCode('');

      })
      .catch((error) => {
        console.error('Error fetching contact numbers:', error);
        alert('Error fetching contact numbers. Please try again.');
      });
  }, []);
  //

  // useEffect(() => {
  //   const checkAuthStatus = () => {
  //     firebase.auth().onAuthStateChanged((user) => {
  //       if (!user) {
  //         console.log('User logged out. Clearing input fields.');
  //         setPhoneNumber('');
  //         setCode('');
  //       }
  //     });
  //   };
  
  //   checkAuthStatus();
  // }, [setPhoneNumber, setCode]);
  
  // // Use another useEffect to watch changes in user state and clear input fields
  // useEffect(() => {
  //   if (!firebase.auth().currentUser) {
  //     console.log('User logged out. Clearing input fields.');
  //     setPhoneNumber('');
  //     setCode('');
  //   }
  // }, [firebase.auth().currentUser, setPhoneNumber, setCode]);


  //

  useFocusEffect(
    React.useCallback(() => {
      // Reset phone number and code when the component gains focus
      setPhoneNumber('');
      setCode('');
    }, [])
  );


  const sendVerification = async () => {
    setCode(''); // Reset the code state
    const phoneProvider = new firebase.auth.PhoneAuthProvider();

    

    try {
      const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber, recaptchaVerifier.current);
      setVerificationId(verificationId);
      // setPhoneNumber('');
      console.log('Entered number:', phoneNumber);
    } catch (error) {
      if (error.code === 'auth/cancelled-popup-request') {
        console.log('User cancelled the verification process.');
      } else {
        console.error('Error during verification:', error);
        alert('Error during verification. Please try again.');
      }
    }
  };

  // const confirmCode = () => {
  //   console.log('Entered phone number:', phoneNumber);

  //   // Check if the entered phone number matches any contactNumber in the fetched list
  //   if (allContactNumbers.includes(phoneNumber)) {
  //     console.log('Phone number is registered, Account Logged in');
  //     // ... rest of the code
  //     navigation.navigate('Admin');
  //   } else {
  //     console.log('Phone number is not registered');
  //     alert('Phone number is not registered. Please register first.');
  //   }
  // };

  const confirmCode = async () => {
    // setPhoneNumber(''); // Reset the phoneNumber state, tas tinaggal ko ito
    // setCode(''); // Reset the code state
    console.log('Entered phone number:', phoneNumber);

   
  
    // Check if the entered phone number matches any contactNumber in the fetched list
    if (allContactNumbers.includes(phoneNumber)) {
      console.log('Phone number is registered');
  
      try {
        const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
  
        // Sign in the user using the credential
        await firebase.auth().signInWithCredential(credential);
  
        console.log('Account Logged in');
        navigation.navigate('Admin');

         // Reset phone number and code after successful login
        setPhoneNumber(''); //INIBA KO ITO
        setCode(''); //DINAGDAG KO PALA SILA

      } catch (error) {
        console.error('Error during verification:', error);
        alert('Invalid verification code. Please try again.');
      } 
    } else {
      console.log('Phone number is not registered');
      alert('Phone number is not registered. Please register first.');
    }
  };
 

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')} // Change the path accordingly
        style={styles.logo}
      />

      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier}
        firebaseConfig={firebaseConfig}
      />
      <Text style={styles.otpText}>Enter your Phone Number</Text>
      <Text style={styles.otpTextDown}>We will send you the 6-digit verification code </Text>

      <TextInput
        placeholder="eg: +639185299899"
        onChangeText={(text) => setPhoneNumber(text)}
        keyboardType="phone-pad"
        autoComplete="tel"
        style={styles.textInput}
        maxLength={13}
      />

      <TouchableOpacity style={styles.sendVerification} onPress={sendVerification}>
        <Text style={styles.buttonText}>Generate OTP</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="6-Digit Code"
        onChangeText={setCode}
        keyboardType="number-pad"
        style={styles.textInput}
        maxLength={6}
      />

      <TouchableOpacity style={styles.sendCode} onPress={confirmCode}>
        <Text style={styles.buttonText}>Verify and Confirm </Text>
      </TouchableOpacity>
    </View>
  );
};

export default PassengerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    paddingTop: 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    fontSize: 18,
    borderBottomColor: 'blue',
    borderBottomWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
    color: 'blue',
    width: 250
   
  },
  sendVerification: {
    padding: 20,
    backgroundColor: '#5272F2',
    borderRadius: 10,
    width: 180
  },
  sendCode: {
    padding: 20,
    backgroundColor: '#5272F2',
    borderRadius: 10,
    width: 180
  },
  buttonText: {
    textAlign: 'center',
    color: '#072541',
    fontWeight: 'bold',
  },
  otpText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 20,
  },

  otpTextDown: {
    fontSize: 15,
    color: 'gray'

  },

  logo: {
    width: 250, // Adjust width as needed
    height: 250, // Adjust height as needed
   
    marginTop: -80,
  },
});
