import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import iconsanstete from './img/iconsanstete.png';

const StatScreen = () => {
  const [goalScorers, setGoalScorers] = useState([]);
  const [assistProviders, setAssistProviders] = useState([]);
  const [ownGoalScorers, setOwnGoalScorers] = useState([]);
  const [penaltyScorers, setPenaltyScorers] = useState([]);

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const goalScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=1');
        const goalScorersData = await goalScorersResponse.json();
        if (goalScorersData && goalScorersData.items && goalScorersData.items.season && goalScorersData.items.season.players) {
          setGoalScorers(goalScorersData.items.season.players);
        } else {
          console.error('Error: Goal scorers data not found in response');
        }

        // Fetch for assist providers
        const assistProvidersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=2');
        const assistProvidersData = await assistProvidersResponse.json();
        if (assistProvidersData && assistProvidersData.items && assistProvidersData.items.season && assistProvidersData.items.season.players) {
          setAssistProviders(assistProvidersData.items.season.players);
        } else {
          console.error('Error: Assist providers data not found in response');
        }

        // Fetch for own goal scorers
        const ownGoalScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=3');
        const ownGoalScorersData = await ownGoalScorersResponse.json();
        if (ownGoalScorersData && ownGoalScorersData.items && ownGoalScorersData.items.season && ownGoalScorersData.items.season.players) {
          setOwnGoalScorers(ownGoalScorersData.items.season.players);
        } else {
          console.error('Error: Own goal scorers data not found in response');
        }

        // Fetch for penalty scorers
        const penaltyScorersResponse = await fetch('https://api.ligue1.live/api/stat?id_saison=269&id_event=4');
        const penaltyScorersData = await penaltyScorersResponse.json();
        if (penaltyScorersData && penaltyScorersData.items && penaltyScorersData.items.season && penaltyScorersData.items.season.players) {
          setPenaltyScorers(penaltyScorersData.items.season.players);
        } else {
          console.error('Error: Penalty scorers data not found in response');
        }
      } catch (error) {
        console.error('Error fetching player data:', error);
      }
    };

    fetchPlayers();
  }, []);

  const renderGoalScorers = (goalScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {goalScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              {player.photo ? (
                    <Image source={{ uri: player.photo }} style={styles.playerImage} />
                  ) : (
                    <Image source={iconsanstete} style={styles.playerImage} />
                  )}
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de buts: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    );
  };

  const renderAssistProviders = (assistProviders) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {assistProviders.map((player, index) => (
            <View key={index} style={styles.player}>
              {player.photo ? (
                    <Image source={{ uri: player.photo }} style={styles.playerImage} />
                  ) : (
                    <Image source={iconsanstete} style={styles.playerImage} />
                  )}
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de passes décisives: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    );
  };

  const renderOwnGoalScorers = (ownGoalScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {ownGoalScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              {player.photo ? (
                    <Image source={{ uri: player.photo }} style={styles.playerImage} />
                  ) : (
                    <Image source={iconsanstete} style={styles.playerImage} />
                  )}
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de CSC: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
        <View style={styles.divider}></View>
      </View>
    );
  };

  const renderPenaltyScorers = (penaltyScorers) => {
    return (
      <View>
        <ScrollView horizontal={true} style={styles.playerContainer}>
          {penaltyScorers.map((player, index) => (
            <View key={index} style={styles.player}>
              {player.photo ? (
                    <Image source={{ uri: player.photo }} style={styles.playerImage} />
                  ) : (
                    <Image source={iconsanstete} style={styles.playerImage} />
                  )}
              <Text style={styles.playerName}>{player.fullname}</Text>
              <Text style={styles.playerInfo}>Équipe: {player.teamname}</Text>
              <Text style={styles.playerInfo}>Nombre de penalties: {player.eventCount}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={styles.heading}>Meilleurs buteurs</Text>
        {renderGoalScorers(goalScorers)}
        <Text style={styles.heading}>Meilleurs passeurs</Text>
        {renderAssistProviders(assistProviders)}
        <Text style={styles.heading}>Buts contre son camp</Text>
        {renderOwnGoalScorers(ownGoalScorers)}
        <Text style={styles.heading}>Meilleurs tireurs de penalty</Text>
        {renderPenaltyScorers(penaltyScorers)}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#02153C', // Fond en #02153C
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20, // Plus d'espace après chaque titre
    textAlign: 'center', // Titre centré
    color: '#FFFFFF', // Couleur du texte en blanc
  },
  playerContainer: {
    marginBottom: 20,
  },
  player: {
    marginRight: 10,
    alignItems: 'center',
  },
  playerImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  playerName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#FFFFFF', // Couleur du texte en blanc
  },
  playerInfo: {
    fontSize: 16,
    color: '#FFFFFF', // Couleur du texte en blanc
  },
  divider: {
    height: 20, // Hauteur du séparateur entre chaque section
  },
});

export default StatScreen;
