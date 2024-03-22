import * as React from 'react';
import { Button, View } from 'react-native';
import { ScrollView, Image, StyleSheet } from 'react-native';

function AccueilScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Other components... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#02153C', // Set the background color here
  },
  // Other styles...
});

export default AccueilScreen;
