import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import asmLogo from '../img/srfc.png'; // Importer l'image locale

export default function SRFC() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={asmLogo} style={styles.logo} />
      </View>
      <Text style={styles.teamName}>Stade Rennais FC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02153C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  teamName: {
    color: '#CEFB03',
    fontSize: 24,
  },
});
