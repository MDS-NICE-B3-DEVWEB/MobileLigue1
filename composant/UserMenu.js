import React, { useContext } from 'react';
import { View, Image, Text } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { MenuProvider, Menu, MenuOptions, MenuOption, MenuTrigger } from 'react-native-popup-menu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './UserContext';
import userIcon from './img/user.png';

const COLOR_BLACK = 'black';
const COLOR_CEFB03 = '#CEFB03';

function UserMenu({ navigation }) {
    const { user, setUser } = useContext(UserContext);
 
    return (
      <Menu>
        <MenuTrigger>
          <TouchableOpacity onPress={() => {
            if (user) {
              navigation.navigate('Account');
            } else {
              navigation.navigate('Auth', { screen: 'Accueil' });
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
                AsyncStorage.removeItem('token');
              }}>
                <Text style={{ color: COLOR_BLACK }}>Logout</Text>
              </MenuOption>
            </>
          )}
        </MenuOptions>
      </Menu>
    );
  }

  export default UserMenu;
