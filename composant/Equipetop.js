import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'; // Import TouchableOpacity from react-native
import { useNavigation } from '@react-navigation/native';

// Importer les images locales
import asm from './img/asm.png';
import cm63 from './img/cm63.png';
import fcl from './img/fcl.png';
import fcm from './img/fcm.png';
import fcn from './img/fcn.png';
import hac from './img/hac.png';
import losc from './img/losc.png';
import mhsc from './img/mhsc.png';
import ogcn from './img/ogcn.png';
import ol from './img/ol.png';
import om from './img/om.png';
import psg from './img/psg.png';
import rcl from './img/rcl.png';
import rcsa from './img/rcsa.png';
import sb29 from './img/sb29.png';
import sdr from './img/sdr.png';
import srfc from './img/srfc.png';
import tfc from './img/tfc.png';

const images = [
  {source: asm, name: 'ASM'},
  {source: cm63, name: 'CM63'},
  {source: fcl, name: 'FCL'},
  {source: fcm, name: 'FCM'},
  {source: fcn, name: 'FCN'},
  {source: hac, name: 'HAC'},
  {source: losc, name: 'LOSC'},
  {source: mhsc, name: 'MHSC'},
  {source: ogcn, name: 'OGCN'},
  {source: ol, name: 'OL'},
  {source: om, name: 'OM'},
  {source: psg, name: 'PSG'},
  {source: rcl, name: 'RCL'},
  {source: rcsa, name: 'RCSA'},
  {source: sb29, name: 'SB29'},
  {source: sdr, name: 'SDR'},
  {source: srfc, name: 'SRFC'},
  {source: tfc, name: 'TFC'},  
];

const Equipetop = () => {
  const navigation = useNavigation();

  const handleImagePress = (teamName) => {
    navigation.navigate(teamName);
  };

  return (
    <ScrollView 
      horizontal 
      style={styles.container} 
      showsHorizontalScrollIndicator={false}
    >
        {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => handleImagePress(image.name)}>
          <Image source={image.source} style={styles.image} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 35,
    backgroundColor :'#02153C',
  },
  image: {
    width: 50, // Vous pouvez ajuster la largeur et la hauteur comme vous le souhaitez
    height: 50,
  },
});

export default Equipetop;