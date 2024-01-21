import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const TricycleScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <View style={styles.seccontainer}>
        <Text style={styles.text}>Book Now!</Text>

        <TextInput
                style={styles.input}
                placeholder="Pick-up Point"   
        />

        <TextInput
                style={styles.input}
                placeholder="Drop-Off Point"   
        />

        <Text style={styles.textDriver}>// Your driver: PLATE NUMBER //</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pasakay</Text>
        </TouchableOpacity>

        <Text style={styles.textNote}>Note: Half-payment must be done first!</Text>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#B4CDE6',
    backgroundColor: 'white',
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


  text: {
    fontSize: 20, // Adjust the font size as needed
    marginBottom: 30
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderStyle: 'solid',
    width: 250,
    height:50,
    backgroundColor: 'white',
    borderRadius: 50,
    marginBottom:30,
    paddingLeft: 20,
    fontSize: 15
  },

  button:{
    backgroundColor: 'lightblue',
    height: 50,
    width:180,
    borderRadius: 50,
    justifyContent: 'center',
     alignItems: 'center',
     borderWidth:1
  },

  buttonText:{

    // justifyContent: 'center',
    // alignItems: 'center',
    textAlign:'center',
    color: 'black',
    fontSize:18
  },

  textDriver: {
    fontSize: 15,
    backgroundColor: 'white',
    height: 50,
    width:250,
    borderRadius: 50,

    
    borderWidth:1,
    marginBottom: 30,
    textAlign:'center',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    paddingTop: 15

  },

  textNote: {

    fontSize: 15,
    marginTop: 30
  },

  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: 10,
    marginTop: -50,
  },
});

export default TricycleScreen;

