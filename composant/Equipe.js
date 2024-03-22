import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Importez les images locales
import asmLogo from './img/asm.png'; 
import cm63Logo from './img/cm63.png';
import fclLogo from './img/fcl.png';
import fcmLogo from './img/fcm.png';
import fcnLogo from './img/fcn.png';
import hacLogo from './img/hac.png';
import loscLogo from './img/losc.png';
import mhscLogo from './img/mhsc.png';
import ogcnLogo from './img/ogcn.png';
import olLogo from './img/ol.png';
import omLogo from './img/om.png';
import psgLogo from './img/psg.png';
import rclLogo from './img/rcl.png';
import rcsaLogo from './img/rcsa.png';
import sb29Logo from './img/sb29.png';
import sdrLogo from './img/sdr.png';
import srfcLogo from './img/srfc.png';
import tfcLogo from './img/tfc.png';

const Equipe = () => {
  const navigation = useNavigation();

  const handleTeamPress = (teamName) => {
    navigation.navigate(teamName);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => handleTeamPress('ASM')} style={styles.teamContainer}>
        <Image source={asmLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>ASM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('CM63')} style={styles.teamContainer}>
        <Image source={cm63Logo} style={styles.teamLogo} />
        <Text style={styles.teamName}>CM63</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('FCL')} style={styles.teamContainer}>
        <Image source={fclLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>FCL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('FCM')} style={styles.teamContainer}>
        <Image source={fcmLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>FCM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('FCN')} style={styles.teamContainer}>
        <Image source={fcnLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>FCN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('HAC')} style={styles.teamContainer}>
        <Image source={hacLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>HAC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('LOSC')} style={styles.teamContainer}>
        <Image source={loscLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>LOSC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('MHSC')} style={styles.teamContainer}>
        <Image source={mhscLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>MHSC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('OGCN')} style={styles.teamContainer}>
        <Image source={ogcnLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>OGCN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('OL')} style={styles.teamContainer}>
        <Image source={olLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>OL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('OM')} style={styles.teamContainer}>
        <Image source={omLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>OM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('PSG')} style={styles.teamContainer}>
        <Image source={psgLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>PSG</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('RCL')} style={styles.teamContainer}>
        <Image source={rclLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>RCL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('RCSA')} style={styles.teamContainer}>
        <Image source={rcsaLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>RCSA</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('SB29')} style={styles.teamContainer}>
        <Image source={sb29Logo} style={styles.teamLogo} />
        <Text style={styles.teamName}>SB29</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('SDR')} style={styles.teamContainer}>
        <Image source={sdrLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>SDR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress('SRFC')} style={styles.teamContainer}>
        <Image source={srfcLogo} style={styles.teamLogo} />
<Text style={styles.teamName}>SRFC</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => handleTeamPress('TFC')} style={styles.teamContainer}>
        <Image source={tfcLogo} style={styles.teamLogo} />
<Text style={styles.teamName}>TFC</Text>
</TouchableOpacity>
</ScrollView>
);
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#02153C',
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 10,
  },
  teamLogo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  teamName: {
    fontSize: 20,
    color: '#CEFB03', // Couleur du texte
  },
});

export default Equipe;