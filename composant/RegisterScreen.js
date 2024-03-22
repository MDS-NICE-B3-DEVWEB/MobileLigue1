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

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://164.90.163.120:8000/api/register', {
        name,
        email,
        password,
      });

      // Handle response here
      console.log(response.data);

      // Set the user in context and navigate to the home page
      setUser(response.data);
      navigation.navigate('Accueil');
    } catch (error) {
      // Handle error here
      console.error(error);
      Alert.alert('Error', 'An error occurred while trying to register.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Name"
        placeholderTextColor="white" // Set placeholder text color to white
      />
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
        placeholderTextColor="white" // Set placeholder text color to white
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry
        placeholderTextColor="white" // Set placeholder text color to white
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Inscription</Text>
      </TouchableOpacity>
    </View>
  );
}

export default RegisterScreen;