import {useNavigation} from '@react-navigation/core';
import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {theme} from '../../../theme';

const HeaderInfoDay: React.FC<{}> = ({}) => {
  // const Route = useRoute();
  // // @ts-ignore
  // const {day} = Route.params;

  let data = new Date();

  //здесь почемуто показывало что сейчас 2й месяц
  let mounth = data.getMonth() + 1;

  let year = data.getFullYear();

  return (
    <View style={styles.header}>
      <Text style={styles.title}>Погода Sumy</Text>
      {/* <Text style={styles.decs}>
        {day}.{mounth}.{year}
      </Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: theme.fontSize.xl,
  },
  decs: {
    fontSize: theme.fontSize.l,
  },
});

export default HeaderInfoDay;
