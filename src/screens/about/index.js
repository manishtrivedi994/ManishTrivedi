import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../utils/colors';
import Hamburger from '../../components/Hamburger';
import {globalStyles} from '../../utils/styles';

export default function About() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
      <Hamburger />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
