import React from 'react';
import {View, Text, Image, StyleSheet, Platform} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../src/utils/colors';

export function DrawerContent(props) {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props} style={styles.container}>
      <View>
        <DrawerItem
          label="About"
          icon={() => (
            <Icon name="account-details" size={20} color={COLORS.white} />
          )}
          onPress={() => {
            navigation.navigate('about');
          }}
          labelStyle={styles.item}
        />
        <DrawerItem
          label="Skills"
          icon={() => <Icon name="tools" size={20} color={COLORS.white} />}
          onPress={() => {
            navigation.navigate('skills');
          }}
          labelStyle={styles.item}
        />
        <DrawerItem
          label="Experience"
          icon={() => <Icon name="console" size={20} color={COLORS.white} />}
          onPress={() => {
            navigation.navigate('experience');
          }}
          labelStyle={styles.item}
        />
        <DrawerItem
          label="Languages"
          icon={() => <Icons name="language" size={20} color={COLORS.white} />}
          onPress={() => {
            navigation.navigate('languages');
          }}
          labelStyle={styles.item}
        />
        <DrawerItem
          label="Education"
          icon={() => (
            <Icon
              name="book-education-outline"
              size={20}
              color={COLORS.white}
            />
          )}
          onPress={() => {
            navigation.navigate('education');
          }}
          labelStyle={styles.item}
        />
        <DrawerItem
          label="Projects"
          icon={() => (
            <Icon
              name="projector-screen-outline"
              size={20}
              color={COLORS.white}
            />
          )}
          onPress={() => {
            navigation.navigate('projects');
          }}
          labelStyle={styles.item}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.backGroundColor,
  },
  item: {
    color: COLORS.white,
  },
});
