import React, { useState, useContext } from 'react';
import { TouchableOpacity, TextInput, View, Alert, StyleSheet, Text } from 'react-native';
import axios from 'axios';
import UserContext from './UserContext'; // Assurez-vous que le chemin d'importation est correct

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#02153C',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 16,
    paddingLeft: 8,
    color: 'white',
  },
  button: {
    backgroundColor: '#CEFB03',
    padding: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
  },
});

function RegisterScreen({ navigation }) {
  const { setUser } = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Le mot de passe doit contenir au moins 8 caractères.";
    }
    if (!/[A-Z]/.test(password)) {
      return "Le mot de passe doit inclure une majuscule.";
    }
    if (!/[a-z]/.test(password)) {
      return "Le mot de passe doit inclure une minuscule.";
    }
    if (!/[0-9]/.test(password)) {
      return "Le mot de passe doit inclure un nombre.";
    }
    if (!/[^A-Za-z0-9]/.test(password)) {
      return "Le mot de passe doit inclure un caractère spécial.";
    }
    return "";
  };

  const handleSubmit = async () => {
    // Validate email
    if (!email.includes('@')) {
      Alert.alert('Error', 'Veuillez entrer une adresse email valide.');
      return;
    }

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      Alert.alert('Error', passwordError);
      return;
    }

    try {
      const response = await axios.post('https://api.ligue1.live/api/register', {
        name,
        email,
        password,
      });

      // Handle response here
      console.log(response.data);

      // Afficher un message de succès si l'inscription est réussie
      Alert.alert('Inscription réussie', 'Vous êtes maintenant inscrit.');

      // Naviguer vers la page de connexion
      navigation.navigate('Login');
    } catch (error) {
      // Handle error here
      console.error(error);
      if (error.response && error.response.status === 422 && error.response.data && error.response.data.errorsList && error.response.data.errorsList.email) {
        Alert.alert('Error', 'This email is already registered. Please use a different email address.');
      } else {
        Alert.alert('Error', 'An error occurred while trying to register.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="white"
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;