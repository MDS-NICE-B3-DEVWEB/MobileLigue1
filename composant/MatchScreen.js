import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';

const MatchScreen = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchday, setSelectedMatchday] = useState(null);

  useEffect(() => {
    fetchMatches();
  }, []);

  const fetchMatches = async () => {
    try {
      const response = await fetch('http://164.90.163.120:8000/api/match?id_saison=269', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data && data.items && data.items.calendar && data.items.calendar.matchdays) {
        setMatches(data.items.calendar.matchdays);
        // Sélectionner la première journée de match par défaut
        if (data.items.calendar.matchdays.length > 0) {
          setSelectedMatchday(data.items.calendar.matchdays[0].matchdayID);
        }
      } else {
        console.error('Error: Match data not found in response');
      }
    } catch (error) {
      console.error('Error fetching match data:', error);
    }
  };

  const renderMatchdays = () => {
    return matches.map((matchday, index) => (
      <TouchableOpacity
        key={index}
        style={[styles.matchdayButton, matchday.matchdayID === selectedMatchday && styles.selectedMatchdayButton]}
        onPress={() => setSelectedMatchday(matchday.matchdayID)}>
        <Text style={styles.matchdayText}>Jour {index + 1}</Text>
      </TouchableOpacity>
    ));
  };

  const renderMatches = () => {
    if (!selectedMatchday) return null;

    const selectedMatchdayData = matches.find(matchday => matchday.matchdayID === selectedMatchday);
    if (!selectedMatchdayData) return null;

    return (
      <View style={styles.matchesContainer}>
        {selectedMatchdayData.matches.map((match, idx) => (
          <View key={idx} style={styles.matchContainer}>
            <View style={styles.teamContainer}>
              <Image source={{ uri: match.homeParticipant.logo }} style={styles.teamLogo} />
              <Text style={styles.teamName}>{match.homeParticipant.participantName}</Text>
            </View>
            <View style={styles.scoreContainer}>
              <Text style={styles.scoreText}>{match.homeParticipant.score}</Text>
              <Text style={styles.scoreText}>-</Text>
              <Text style={styles.scoreText}>{match.awayParticipant.score}</Text>
            </View>
            <View style={styles.teamContainer}>
              <Image source={{ uri: match.awayParticipant.logo }} style={styles.teamLogo} />
              <Text style={styles.teamName}>{match.awayParticipant.participantName}</Text>
            </View>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topSection}></View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderMatchdays()}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {renderMatches()}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02153C',
  },
  topSection: {
    height: 20,
    backgroundColor: '#02153C', // Même couleur que le background
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  matchdayButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  selectedMatchdayButton: {
    backgroundColor: '#ccc',
  },
  matchdayText: {
    color: '#fff', // Couleur du texte blanc
  },
  matchesContainer: {
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  matchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  teamContainer: {
    alignItems: 'center',
    flex: 1,
  },
  teamLogo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginBottom: 5,
  },
  teamName: {
    fontSize: 16,
    textAlign: 'center',
    flexWrap: 'wrap',
    color: '#fff', // Couleur du texte blanc
  },
  scoreContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 5,
    color: '#fff', // Couleur du texte blanc
  },
});

export default MatchScreen;
