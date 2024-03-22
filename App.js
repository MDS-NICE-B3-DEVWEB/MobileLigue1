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
import Equipetop from './composant/Equipetop';
import LoginScreen from './composant/LoginScreen';
import RegisterScreen from './composant/RegisterScreen';
import UserContext from './composant/UserContext';
import userIcon from './composant/img/user.png';
import logo_ligue1_verticale from './composant/img/logo_ligue1_verticale.png';
import Equipe from './composant/Equipe'; // Importez le composant Equipe
import ASM from './composant/equipe/asm'; // Importez le composant ASM
import CM63 from './composant/equipe/cm63';
import FCL from './composant/equipe/fcl';
import FCM from './composant/equipe/fcm';
import FCN from './composant/equipe/fcn';
import HAC from './composant/equipe/hac';
import LOSC from './composant/equipe/losc';
import MHSC from './composant/equipe/mhsc';
import OGCN from './composant/equipe/ogcn';
import OL from './composant/equipe/ol';
import OM from './composant/equipe/om';
import PSG from './composant/equipe/psg';
import RCL from './composant/equipe/rcl';
import RCSA from './composant/equipe/rcsa';
import SB29 from './composant/equipe/sb29';
import SDR from './composant/equipe/sdr';
import SRFC from './composant/equipe/srfc';
import TFC from './composant/equipe/tfc';



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

function UserMenu({ navigation }) {
  const { user, setUser } = useContext(UserContext);

  return (
    <Menu>
      <MenuTrigger>
        <TouchableOpacity onPress={() => {
          if (user) {
            navigation.navigate('Account');
          } else {
            navigation.navigate('Auth', { screen: 'Login' });
          }
        }}>
          <Image source={userIcon} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </MenuTrigger>
      <MenuOptions>
        {!user && (
          <>
            <MenuOption onSelect={() => navigation.navigate('Auth', { screen: 'Login' })}>
              <Text style={{ color: COLOR_BLACK }}>Login</Text>
            </MenuOption>
            <MenuOption onSelect={() => navigation.navigate('Auth', { screen: 'Register' })}>
              <Text style={{ color: COLOR_BLACK }}>Register</Text>
            </MenuOption>
          </>
        )}
        {user && (
          <>
            <MenuOption onSelect={() => navigation.navigate('Account')}>
              <Text style={{ color: COLOR_BLACK }}>Account</Text>
            </MenuOption>
            <MenuOption onSelect={() => {
              setUser(null);
              // Supprimez le token du localStorage lors de la déconnexion
              localStorage.removeItem('token');
            }}>
              <Text style={{ color: COLOR_BLACK }}>Logout</Text>
            </MenuOption>
          </>
        )}
      </MenuOptions>
    </Menu>
  );
}

function App() {
  const [user, setUser] = useState(null);

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
                {/* Incluez uniquement l'écran "Equipe" */}
                <Drawer.Screen
                  name="Equipe"
                  component={Equipe}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                  })}
                />
                {/* Ajoutez d'autres écrans ici */}
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
                  name="ASM"
                  component={ASM}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="CM63"
                  component={CM63}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="FCL"
                  component={FCL}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="FCM"
                  component={FCM}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="FCN"
                  component={FCN}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="HAC"
                  component={HAC}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="LOSC"
                  component={LOSC}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="MHSC"
                  component={MHSC}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="OGCN"
                  component={OGCN}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="OL"
                  component={OL}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                />
                <Drawer.Screen
                  name="OM"
                  component={OM}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                <Drawer.Screen
                  name="PSG"
                  component={PSG}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                <Drawer.Screen
                  name="RCL"
                  component={RCL}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                <Drawer.Screen
                  name="RCSA"
                  component={RCSA}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                <Drawer.Screen
                  name="SB29"
                  component={SB29}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                <Drawer.Screen
                  name="SDR"
                  component={SDR}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                <Drawer.Screen
                  name="SRFC"
                  component={SRFC}
                  options={({ navigation }) => ({
                    ...CustomHeader({ navigation }),
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null
                  })}
                  />
                  <Drawer.Screen
                  name="TFC"
                  component={TFC}
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
