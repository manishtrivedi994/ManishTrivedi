import 'react-native-gesture-handler';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import NotificationScreen from './src/Notification';
import About from './src/screens/about';
import DrawerNavigator from './navigation/drawer-navigator';
import {COLORS} from './src/utils/colors';

const App: () => Node = () => {
  const SuperStack = createStackNavigator();
  const Drawer = createDrawerNavigator();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: COLORS.backGroundColor,
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={'light-content'} />

      <NavigationContainer>
        <SuperStack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName={'About'}>
          <SuperStack.Screen
            name="DrawerNavigator"
            component={DrawerNavigator}
          />
        </SuperStack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
