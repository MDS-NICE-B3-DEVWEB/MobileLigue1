import React, { useState, useContext, useEffect } from 'react';
import { TouchableOpacity, TextInput, View, Alert, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UserContext from './UserContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  signUpText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 16,
  },
  signUpLink: {
    color: '#CEFB03',
    textDecorationLine: 'underline',
  },
});

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const { setUser } = useContext(UserContext);
  // const [User, setUser] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.get('https://api.ligue1.live/api/login', {
        params: {
          email,
          password,
        },
      });

      console.log(response.data);
      setUser(response.data.user);

      if (response.data.access_token) {
        await AsyncStorage.setItem('token', JSON.stringify(response.data.access_token));
        await AsyncStorage.setItem('name', response.data.user.name);
        await AsyncStorage.setItem('email', response.data.user.email);
      } else {
        console.error('Access token is missing in the response.');
        Alert.alert('Error', 'An error occurred while trying to log in.');
        return;
      }

      Alert.alert('Welcome', `Bonjour ${response.data.user.name}`);
      navigation.navigate('Accueil');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'An error occurred while trying to log in.');
    }
  };
  const token =  AsyncStorage.getItem('token');

  // const checkLoggedIn = async () => {
  //   try {
  //     const token = await AsyncStorage.getItem('token');
  //     console.log("token",token);

  //     if (token) {
  //       const response = await axios.get('http://164.90.163.120:8000/api/user', {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //       setUser(response.data);
  //       navigation.navigate('Accueil');
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };
 
  // useEffect(() => {
  //  checkLoggedIn();
  //  if(token){
  //   navigation.navigate('Accueil');
  //   console.log("token good")
  // }
  // }, []);

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
      <Text style={styles.signUpText}>
        Pas encore inscrit ?{' '}
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpLink}>S'inscrire</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

export default LoginScreen;
