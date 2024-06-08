import { View, Text, Image, Linking, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';

// Importer les images
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
import tfc from './img/ftc.png';
import diapo1 from './img/diapo1.jpg';
import diapo2 from './img/diapo2.jpg';
import diapo3 from './img/diapo3.jpg';
import diapo4 from './img/diapo4.jpg';
import imghome1 from './img/imghome1.jpg';
import imghome2 from './img/imghome2.jpg';
// ... importez les autres images ici

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#02153C',
    flex: 1,
    padding: 10,
  },
  rowText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', // ajoutez cette ligne
    marginBottom: 10,
    marginTop: 15,
    marginRight: 10,
    marginLeft: 10,

  },
  text: {
    flex: 1,
    marginRight: 10, 
    color: 'white' ,
  },
  imagehome: {
    width: 150, // ajustez la largeur comme vous le souhaitez
    height: 100, // ajustez la hauteur comme vous le souhaitez
    marginLeft: 10,
    marginRight: 10,
  },
  row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      marginRight: 30,
      marginLeft: 30,
  },
  image: {
    width: 70, // ajustez la largeur comme vous le souhaitez
    height: 70, // ajustez la hauteur comme vous le souhaitez
  },
});

const AccueilSceen = () => {

  return (
    <ScrollView>
      <View style={styles.container}>
  <View style={styles.rowText}>
    <Text style={styles.text}>Le Championnat de France de Football, également connu sous le nom de Ligue 1, est la plus haute division du football français. Fondé en 1932, le championnat a connu une riche histoire et est considéré comme l'un des championnats nationaux les plus compétitifs d'Europe. Avec des clubs légendaires tels que le Paris Saint-Germain, l'Olympique de Marseille et l'Olympique Lyonnais, la Ligue 1 attire l'attention des amateurs de football du monde entier.
</Text>
    <Image source={imghome1} style={styles.imagehome} />
  </View>
  <View >
    <Text style={styles.text}> Au fil des ans, le championnat a vu émerger des joueurs emblématiques tels que Zinedine Zidane, Thierry Henry et Michel Platini, qui ont contribué à façonner le football français et à élever le niveau de compétition. En plus de son histoire riche en talent, la Ligue 1 est également réputée pour ses clubs emblématiques, ses stades historiques et son atmosphère électrique lors des matches.</Text>
  </View>
  <View style={styles.rowText}>
    <Image source={imghome2} style={styles.imagehome} />
    <Text style={styles.text}>Le Championnat de France de Football ne se limite pas à être une compétition sportive de haut niveau, il joue également un rôle majeur dans l'économie et la culture françaises. Avec des millions de fans à travers le monde et des contrats de diffusion internationaux lucratifs, la Ligue 1 génère des revenus considérables pour les clubs, les sponsors et l'industrie du divertissement en général.
       
        </Text>
  </View>
  <View >
    <Text style={styles.text}>  En plus de son impact économique, la Ligue 1 contribue également à la richesse culturelle de la France. Les clubs de football sont souvent des symboles de fierté régionale, avec des supporters passionnés qui soutiennent leurs équipes à travers le pays. Les matches de football sont des événements sociaux majeurs, réunissant des personnes de tous âges et de tous horizons pour célébrer leur amour du jeu.</Text>
  </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.asmonaco.com/')}>
          <Image style={styles.image} source={asm} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.clermontfoot.com/')}>
          <Image style={styles.image}  source={cm63} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.fclweb.fr/')}>
          <Image style={styles.image}  source={fcl} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.fcmetz.com/')}>
          <Image style={styles.image}  source={fcm} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.fcnantes.com/')}>
          <Image style={styles.image}  source={fcn} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.hac-foot.com/')}>
          <Image style={styles.image} source={hac} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.losc.fr/')}>
          <Image style={styles.image}  source={losc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.mhscfoot.com/')}>
          <Image style={styles.image} source={mhsc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.ogcnice.com/')}>
          <Image style={styles.image}  source={ogcn} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.ol.fr/')}>
          <Image style={styles.image}  source={ol} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.om.fr/')}>
          <Image style={styles.image}  source={om} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.psg.fr/')}>
          <Image style={styles.image}  source={psg} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.rclens.fr/')}>
          <Image style={styles.image}  source={rcl} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.rcstrasbourgalsace.fr/')}>
          <Image style={styles.image}  source={rcsa} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.sb29.bzh/')}>
          <Image style={styles.image}  source={sb29} />
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.stade-de-reims.com/')}>
          <Image style={styles.image}  source={sdr} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.staderennais.com/')}>
          <Image style={styles.image}  source={srfc} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.toulousefc.com/')}>
          <Image style={styles.image}  source={tfc} />
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
}

export default AccueilSceen;