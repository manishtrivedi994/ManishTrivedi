import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {DrawerContent} from './DrawerContent';
import About from '../../src/screens/about';
import Skills from '../../src/screens/skills';
import Experience from '../../src/screens/experience';
import Languages from '../../src/screens/languages';
import Projects from '../../src/screens/projects';
import Education from '../../src/screens/education';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerPosition="left"
      initialRouteName="about"
      screenOptions={{
        swipeEnabled: true,
        headerShown: false,
        drawerActiveBackgroundColor: 'red',
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="about" component={About} />
      <Drawer.Screen name="skills" component={Skills} />
      <Drawer.Screen name="experience" component={Experience} />
      <Drawer.Screen name="languages" component={Languages} />
      <Drawer.Screen name="projects" component={Projects} />
      <Drawer.Screen name="education" component={Education} />
    </Drawer.Navigator>
  );
}
