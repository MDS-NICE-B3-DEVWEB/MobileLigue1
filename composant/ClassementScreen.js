import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, FlatList } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#02153C',
        paddingBottom: 50,
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

    useEffect(() => {
        const id_saison = '269';
        fetch(`https://api.ligue1.live/api/classement?id_saison=${id_saison}`, {
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
    }, []);

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