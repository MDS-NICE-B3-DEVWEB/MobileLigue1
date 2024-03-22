import React, { useState, useContext } from 'react';
import { TouchableOpacity, TextInput, View, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from './UserContext';
import axios from 'axios';

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

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      const response = await axios.get('http://164.90.163.120:8000/api/login', {
        params: {
          email,
          password,
        },
      });

      console.log(response.data);
      setUser(response.data.user);
      Alert.alert('Welcome', `Bonjour ${response.data.user.name}`);
      navigation.navigate('Accueil');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while trying to log in.');
    }
  };

  return (
    <View style={styles.container}>
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
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;