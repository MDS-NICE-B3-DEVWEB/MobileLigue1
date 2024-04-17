import React from 'react';
import { ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
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
// Importez les autres logos ici...

const Equipe = () => {
  const navigation = useNavigation();

  const handleTeamPress = (id_equipe) => {
    navigation.navigate('ShowTeam', { id_equipe: id_equipe });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => handleTeamPress(76)} style={[styles.teamContainer, {backgroundColor: '#db0632'}]}>
        <Image source={asmLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>ASM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(622)} style={[styles.teamContainer, {backgroundColor: '#002d6a'}]}>
        <Image source={cm63Logo} style={styles.teamLogo} />
        <Text style={styles.teamName}>CM63</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(545)} style={[styles.teamContainer, {backgroundColor: '#FF4A00'}]}>
        <Image source={fclLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>FCL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(120)} style={[styles.teamContainer, {backgroundColor: '#ffffff'}]}>
        <Image source={fcmLogo} style={styles.teamLogo} />
        <Text style={[styles.teamName, {color: '#02153C'}]}>FCM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(60)} style={[styles.teamContainer, {backgroundColor: '#00a558'}]}>
        <Image source={fcnLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>FCN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(625)} style={[styles.teamContainer, {backgroundColor: '#8cc2e6'}]}>
        <Image source={hacLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>HAC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(69)} style={[styles.teamContainer, {backgroundColor: '#e41b13'}]}>
        <Image source={loscLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>LOSC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(65)} style={[styles.teamContainer, {backgroundColor: '#07195E'}]}>
        <Image source={mhscLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>MHSC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(64)} style={[styles.teamContainer, {backgroundColor: '#D52027'}]}>
        <Image source={ogcnLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>OGCN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(59)} style={[styles.teamContainer, {backgroundColor: '#ffffff'}]}>
       <Image source={omLogo} style={styles.teamLogo} />
      <Text style={[styles.teamName, {color: '#02153C'}]}>OM</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(61)} style={[styles.teamContainer, {backgroundColor: '#0F23AA'}]}>
        <Image source={olLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>OL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(66)} style={[styles.teamContainer, {backgroundColor: '#ffffff'}]}>
        <Image source={psgLogo} style={styles.teamLogo} />
        <Text style={[styles.teamName, {color: '#02153C'}]}>PSG</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(546)} style={[styles.teamContainer, {backgroundColor: '#f6d410'}]}>
        <Image source={rclLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>RCL</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(68)} style={[styles.teamContainer, {backgroundColor: '#009ee2'}]}>
        <Image source={rcsaLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>RCSA</Text>
        </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(121)} style={[styles.teamContainer, {backgroundColor: '#e41a25'}]}>
        <Image source={sb29Logo} style={styles.teamLogo} />
        <Text style={styles.teamName}>SB29</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(72)} style={[styles.teamContainer, {backgroundColor: '#ffffff'}]}>
        <Image source={sdrLogo} style={styles.teamLogo} />
        <Text style={[styles.teamName, {color: '#02153C'}]}>SDR</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(67)} style={[styles.teamContainer, {backgroundColor: '#d82626'}]}>
        <Image source={srfcLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>SRFC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTeamPress(63)} style={[styles.teamContainer, {backgroundColor: '#3e2b57'}]}>
        <Image source={tfcLogo} style={styles.teamLogo} />
        <Text style={styles.teamName}>TFC</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row', // pour organiser les logos en grille
    flexWrap: 'wrap', // pour permettre le retour à la ligne automatique
    alignItems: 'center', // pour aligner les éléments au centre verticalement
    justifyContent: 'center', // pour centrer les éléments horizontalement
    backgroundColor: '#02153C', // couleur de fond du conteneur
  },
  teamContainer: {
    margin: 5,
    alignItems: 'center', // pour centrer le logo et le nom de l'équipe
    justifyContent: 'center', // pour centrer le contenu du bouton
    width: 150, // largeur fixe pour chaque élément de la grille
    height: 150, // hauteur fixe pour assurer que tous les logos aient la même taille
  },
  teamLogo: {
    width: 100, // largeur du logo
    height: 100, // hauteur du logo
    resizeMode: 'contain', // pour s'assurer que le logo s'adapte à l'espace disponible
  },
  teamName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white', // couleur du texte
    textAlign: 'center', // pour centrer le texte
  },
});
export default Equipe;