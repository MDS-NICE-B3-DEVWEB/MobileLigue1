import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; // Import RNPickerSelect

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
        padding: 16,
        backgroundColor: '#02153C',
        paddingBottom: 200,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 5,
        marginTop: 50,
    },
    tableHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    teamLogo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    teamName: {
        fontWeight: 'bold',
        color: 'white',
    },
    text: {
        color: 'white',
    },
    teamColumn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: '60%',
        color: 'white',
    },
    pointColumn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        color: 'white',
    },
    column: {
        width: '12.5%', // Adjust the width as needed
        color: 'white',
    },
    // Add more styles as needed
});

function ClassementScreen({ navigation }) {
    const [data, setData] = useState(null);
    const [selectedSeasonId, setSelectedSeasonId] = useState(null); // Add this line

    useEffect(() => {
        if (selectedSeasonId) { // Only fetch data if a season is selected
            fetch(`https://api.ligue1.live/api/classement?id_saison=${selectedSeasonId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }, [selectedSeasonId]); // Add selectedSeasonId as a dependency

    const renderItem = ({ item }) => (
        <View style={styles.tableRow}>
            <View style={styles.teamColumn}>
                {item.logo && <Image source={{ uri: item.logo }} style={styles.teamLogo} />}
                <Text style={[styles.teamName]}>{item.teamName}</Text>
            </View>
            <View style={styles.pointColumn}>
                <Text style={styles.column}>{item.matchesWon}</Text>
                <Text style={styles.column}>{item.matchesDrawn}</Text>
                <Text style={styles.column}>{item.matchesLost}</Text>
                <Text style={styles.column}>{item.points}</Text>
            </View>
        </View>
    );

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
            {data ? (
                <View>
                    
                    <Text style={styles.header}>{data.fullName}</Text>
                    <View style={styles.tableRow}>
                        <View style={styles.teamColumn}>
                            <Text style={styles.text}>Team</Text>
                        </View>
                        <View style={styles.pointColumn}>
                            <Text style={styles.text}>Won</Text>
                            <Text style={styles.text}>Drawn</Text>
                            <Text style={styles.text}>Lost</Text>
                            <Text style={styles.text}>Points</Text>
                        </View>
                    </View>
                    <FlatList
                        data={data.teams}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                </View>
            ) : (
                <Text style={styles.text}>Loading...</Text>
            )}
        </View>
    );
}

export default ClassementScreen;