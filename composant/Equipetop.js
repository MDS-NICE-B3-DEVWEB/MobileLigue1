import React from 'react';
import { ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

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
  { source: asm, id_equipe: 76 },
  { source: cm63, id_equipe: 622 },
  { source: fcl, id_equipe: 545 },
  { source: fcm, id_equipe: 120 },
  { source: fcn, id_equipe: 60 },
  { source: hac, id_equipe: 625 },
  { source: losc, id_equipe: 69 },
  { source: mhsc, id_equipe: 65 },
  { source: ogcn, id_equipe: 64 },
  { source: ol, id_equipe: 61 },
  { source: om, id_equipe: 59 },
  { source: psg, id_equipe: 66 },
  { source: rcl, id_equipe: 546 },
  { source: rcsa, id_equipe: 68 },
  { source: sb29, id_equipe: 121 },
  { source: sdr, id_equipe: 72 },
  { source: srfc, id_equipe: 67 },
  { source: tfc, id_equipe: 63 },
];

const Equipetop = () => {
  const navigation = useNavigation();

  const handleImagePress = (id_equipe) => {
    navigation.navigate('ShowTeam', { id_equipe: id_equipe });
  };

  return (
    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
    >
      {images.map((image, index) => (
        <TouchableOpacity key={index} onPress={() => handleImagePress(image.id_equipe)}>
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
    backgroundColor: '#02153C',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default Equipetop;
