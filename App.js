import React, { useState, useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Account from './composant/Account';
import AccueilScreen from './composant/AccueilScreen';
import ClassementScreen from './composant/ClassementScreen';
import ShowPlayer from './composant/equipe/showPlayer';
import Equipetop from './composant/Equipetop';
import LoginScreen from './composant/LoginScreen';
import RegisterScreen from './composant/RegisterScreen';
import UserContext from './composant/UserContext';
import userIcon from './composant/img/user.png';
import ShowTeam from './composant/equipe/showTeam'; // Importez le composant ShowTeam
import logo_ligue1_verticale from './composant/img/logo_ligue1_verticale.png';
import Equipe from './composant/Equipe';
import UserMenu from './composant/UserMenu';
import StatScreen from './composant/StatScreen';
import VideoScreen from './composant/VideoScreen';
import MatchScreen from './composant/MatchScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const COLOR_BLACK = 'black';
const white = 'white';
const COLOR_CEFB03 = '#CEFB03';
const COLOR_02153C = '#02153C';

function CustomDrawerContent(props) {
  const { user } = useContext(UserContext);
  return (
    <DrawerContentScrollView style={{ backgroundColor: COLOR_02153C }} {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function CustomHeader({ navigation }) {
  const { user, setUser } = useContext(UserContext);
  return {
    headerTitle: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Accueil')}>
        <Image source={logo_ligue1_verticale} style={{ width: 32, height: 47, marginLeft: 115 }} />
      </TouchableOpacity>
    ),
    headerTitleStyle: { color: COLOR_BLACK },
    headerRight: () => (
      <UserMenu navigation={navigation} />
    ),
    headerStyle: {
      backgroundColor: COLOR_CEFB03,
    },
  };
}

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  );
}

function App() {
   const [user, setUser] = useState(UserContext);
  // const { user } = useContext(UserContext);

  return (
    <MenuProvider>
      
      <UserContext.Provider value={{ user, setUser }}>
        <NavigationContainer style={{ color: white }}>
          
          <View style={{ flex: 1 }}>
            <View style={{ height: 85 }}>
              <Equipetop />
            </View>
            <View style={{ flex: 1 }}>
              <Drawer.Navigator
                initialRouteName="Accueil"
                drawerContent={props => <CustomDrawerContent {...props} />}
                screenOptions={{
                  drawerLabelStyle: {
                    color: COLOR_CEFB03,
                  },
                }}
              >
                <Drawer.Screen
                  name="Accueil"
                  component={AccueilScreen}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                  })}
                />
                
                <Drawer.Screen
                  name="Classement"
                  component={ClassementScreen}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation })
                  })}
                />
                <Drawer.Screen
                  name="Equipe"
                  component={Equipe}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                  })}
                />
                <Drawer.Screen
                  name="Statistiques"
                  component={StatScreen}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                  })}
                />
                <Drawer.Screen
                  name="Résumé vidéo"
                  component={VideoScreen}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                  })}
                />
                <Drawer.Screen
                  name="Match"
                  component={MatchScreen}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                  })}
                />
                <Drawer.Screen
                  name="Auth"
                  component={AuthStack}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="ShowTeam"
                  component={ShowTeam}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
               />
               <Drawer.Screen
                  name="Account"
                  component={Account}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="ShowPlayer"
                  component={ShowPlayer}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
              </Drawer.Navigator>
            </View>
          </View>
        </NavigationContainer>
      </UserContext.Provider>
    </MenuProvider>
  );
}

export default App;
