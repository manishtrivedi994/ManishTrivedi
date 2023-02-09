import React from 'react';
import {View} from 'react-native';
import Hamburger from '../../components/Hamburger';
import {globalStyles} from '../../utils/styles';

export default function Languages() {
  return (
    <View style={globalStyles.container}>
      <Hamburger />
    </View>
  );
}
