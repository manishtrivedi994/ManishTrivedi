import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Octicons';
import {COLORS} from '../utils/colors';

export default function Hamburger() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.openDrawer()}>
      <Icon name="three-bars" size={25} color={COLORS.white} />
    </TouchableOpacity>
  );
}
