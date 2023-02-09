import {StyleSheet} from 'react-native';
import {COLORS} from './colors';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 20,
    backgroundColor: COLORS.backGroundColor,
  },
});
