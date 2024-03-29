import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrackScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>TrackScreen</Text>
      {/* Add your tracking functionality UI/components here */}
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
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TrackScreen;
