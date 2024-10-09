import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; // Import RNPickerSelect


const MatchScreen = () => {
  const [matches, setMatches] = useState([]);
  const [selectedMatchday, setSelectedMatchday] = useState(null);
  const [selectedSeasonId, setSelectedSeasonId] = useState('358'); // État initialisé avec l'ID de la saison par défaut
  const seasons = [ // Tableau des saisons et leurs IDs
    { name: '2018-19', id: '4' },
    { name: '2019-20', id: '23' },
    { name: '2020-21', id: '55' },
    { name: '2021-22', id: '110' },
    { name: '2022-23', id: '167' },
    { name: '2023-24', id: '269' },
    { name: '2024-25', id: '358' },
    // Ajoutez d'autres saisons ici
  ];

  useEffect(() => {
    fetchMatches();
  }, [selectedSeasonId]);

  const fetchMatches = async () => {
    try {
      const response = await fetch(`https://api.ligue1.live/api/match?id_saison=${selectedSeasonId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      if (data && data.items && data.items.calendar && data.items.calendar.matchdays) {
        setMatches(data.items.calendar.matchdays);
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
      <RNPickerSelect
        onValueChange={(value) => setSelectedSeasonId(value)}
        items={[
          { label: '2018-19', value: '4' },
          { label: '2019-20', value: '23' },
          { label: '2020-21', value: '55' },
          { label: '2021-22', value: '110' },
          { label: '2022-23', value: '167' },
          { label: '2023-24', value: '269' },
          { label: '2024-25', value: '358' },
        ]}
        placeholder={{ label: 'Select a season', value: null }}
        style={{ ...pickerSelectStyles }}
      />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {renderMatchdays()}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {renderMatches()}
      </ScrollView>
    </View>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
   
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'white',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#02153C',
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