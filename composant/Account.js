import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import UserContext from './UserContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#02153C',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    marginTop: 40,
  },
  userInfo: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#CEFB03',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 40,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

const Account = () => {
  const { user, setUser } = useContext(UserContext);
  const navigation = useNavigation(); // Utilisation de useNavigation pour obtenir l'objet de navigation

  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        if (token) {
          // L'utilisateur est connecté, effectuez les actions nécessaires
        }
      } catch (error) {
        console.error(error);
      }
    };

    checkLoggedIn();

  }, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setUser(null);
      // Après la déconnexion, naviguer vers l'écran de connexion
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mon Compte</Text>
      <Text style={styles.userInfo}>Nom: {user ? user.name : ''}</Text>
      <Text style={styles.userInfo}>Email: {user ? user.email : ''}</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Déconnexion</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
