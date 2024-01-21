// import React from 'react';
// import { View, Text, StyleSheet, Image } from 'react-native';

// const NotificationScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Image source={require('../../assets/logo.png')} style={styles.logo}/>
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>Notification</Text>

       

//       </View>
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
//     marginTop: 100,
//     marginBottom: 0
   
//   },
//   text: {
//     fontSize: 20, // Adjust the font size as needed
//   },
//   logo: {
//     width: 210, // Adjust width as needed
//     height: 210, // Adjust height as needed
//     marginBottom: -140,
//     marginTop: -50,
//   },
// });

// export default NotificationScreen;

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <View style={styles.seccontainer}>
        <Text style={styles.text}>NOTIFICATION</Text>

       
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
    fontSize: 30, // Adjust the font size as needed
    marginBottom: 30
  },



  logo: {
    width: 210, // Adjust width as needed
    height: 210, // Adjust height as needed
    marginBottom: 10,
    marginTop: -50,
  },
});

export default NotificationScreen;

