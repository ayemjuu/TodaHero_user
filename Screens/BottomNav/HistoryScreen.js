// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const HistoryScreen = () => {
//   return (
//     <View style={styles.container}>
//       <View style={styles.seccontainer}>
//         <Text style={styles.text}>History</Text>

       

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
   
//   },
//   text: {
//     fontSize: 20, // Adjust the font size as needed
//   },
// });

// export default HistoryScreen;

import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';

const HistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo}/>
      <View style={styles.seccontainer}>
        <Text style={styles.text}>HISTORY</Text>

       
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

export default HistoryScreen;