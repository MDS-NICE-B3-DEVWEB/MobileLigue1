import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import iconsanstete from '../img/iconsanstete.png';

const ShowTeam = (props) => {
  const [teamData, setTeamData] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch(`https://api.ligue1.live/api/equipe?id_saison=269&id_equipe=${props.route.params.id_equipe}`);
        const data = await response.json();
        setTeamData(data.items.team);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, [props.route.params.id_equipe]);

  const handlePlayerPress = (playerID) => {
    navigation.navigate('ShowPlayer', { playerID: playerID });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        {teamData ? (
          <>
            <View style={styles.logoContainer}>
              {teamData.logo && <Image source={{ uri: teamData.logo }} style={styles.logo} />}
            </View>
            <Text style={styles.teamName}>{teamData.teamName}</Text>
            <Text style={styles.stadium}>{teamData.homeVenue.name}</Text>
            <View style={styles.playersContainer}>
              {teamData.players && teamData.players.map((player) => (
                <TouchableOpacity key={player.playerID} style={styles.player} onPress={() => handlePlayerPress(player.playerID)}>
                  {player.photo ? (
                    <Image source={{ uri: player.photo }} style={styles.playerImage} />
                  ) : (
                    <Image source={iconsanstete} style={styles.playerImage} />
                  )}
                  <Text style={styles.playerName}>{player.fullName}</Text>
                  <Text style={styles.playerNumber}>#{player.playerNumber}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <Text style={styles.errorText}>Chargement des données de l'équipe...</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#02153C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  teamName: {
    color: '#CEFB03',
    fontSize: 24,
    marginBottom: 10,
  },
  stadium: {
    color: '#CEFB03',
    fontSize: 18,
    marginBottom: 20,
  },
  playersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  player: {
    alignItems: 'center',
    margin: 10,
  },
  playerImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  playerImagePlaceholder: {
    width: 80,
    height: 80,
    marginBottom: 5,
    backgroundColor: '#02153C', // Couleur de fond pour l'image de remplacement
  },
  playerName: {
    color: 'white',
    marginBottom: 2,
  },
  playerNumber: {
    color: 'white',
  },
  errorText: {
    color: 'white',
    fontSize: 18,
  }
});

export default ShowTeam;
