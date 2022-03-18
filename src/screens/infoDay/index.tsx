import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../store/store';
import {getWheatherListAction} from '../../store/weather';
import {listWeather} from '../../store/weather/types';
import {stylesInfoDay} from './style';
//import wind from './../../icon/windIcon.png'
import CalendarPicker from 'react-native-calendar-picker';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {theme} from '../../../theme';

const InfoDay = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  const Route = useRoute();

  const [isNull, setIsNull] = useState(true);

  let data = new Date();

  let day = data.getDate();

  // @ts-ignore
  const {selectDay} = Route.params;

  const needDay = selectDay == day ? selectDay - day + 1 : selectDay - day;

  // useEffect(() => {
  //   dispatch(getWheatherListAction.request({}));
  // }, []);

  const [changeDay, setChangeDay] = useState(0);

  const wheatherList = useTypedSelector(s => s.wheather.wheatherList?.list!);

  useEffect(() => {
    if (wheatherList == null) {
      console.log('зашло');
      setIsNull(false);
    }
  }, [wheatherList]);

  const statDay = wheatherList[needDay - 1];

  //здесь почемуто показывало что сейчас 2й месяц
  let mounth = data.getMonth();

  let mounthName = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Майа',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  const getNameMounth = (status: number) => mounthName[status];

  return (
    <View style={stylesInfoDay.main}>
      <View>
        <Text style={stylesInfoDay.titleText}>
          Погода в Сумах на {selectDay} {getNameMounth(mounth)}
        </Text>
      </View>

      <View>
        <Text>
          {theme.text.default.average} {theme.text.default.temp}:{' '}
          {statDay.temp.average}
        </Text>

        <Text>
          {theme.text.default.averageMax} {theme.text.default.temp}:{' '}
          {statDay.temp.average_max}
        </Text>

        <Text>
          {theme.text.default.averageMin} {theme.text.default.temp}:{' '}
          {statDay.temp.average_min}
        </Text>

        <Text>
          {theme.text.default.recordMax} {theme.text.default.temp}:{' '}
          {statDay.temp.record_max}
        </Text>

        <Text>
          {theme.text.default.recordMin} {theme.text.default.temp}:{' '}
          {statDay.temp.record_min}
        </Text>

        <Text>
          {theme.text.default.pressure}: {statDay.pressure}
        </Text>

        <Text>
          {theme.text.default.humidity}: {statDay.humidity}
        </Text>

        <Text>
          {theme.text.default.wind}: {statDay.wind_speed}
        </Text>
      </View>
    </View>
  );
};
export default InfoDay;
