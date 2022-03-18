import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

import {useTypedSelector} from '../../store/store';
import {getWheatherListAction} from '../../store/weather';
import {listWeather} from '../../store/weather/types';
import {stylesHome} from './style';
//import Wind from '../../icon/Wind.svg'
import CalendarPicker from 'react-native-calendar-picker';
import {theme} from '../../../theme';

const HomeScreen = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWheatherListAction.request({}));
  }, []);

  const [changeDay, setChangeDay] = useState(0);

  const wheatherList = useTypedSelector(s => s.wheather.wheatherList?.list!);

  let newWheather = wheatherList.slice(0, 14);

  // const omGoToInfHotel = (id: string) => {
  //   // @ts-ignore
  //   navigation.navigate('infHotel', {id});
  // };

  let data = new Date();

  let day = data.getDate();

  //здесь почемуто показывало что сейчас 2й месяц
  let mounth = data.getMonth() + 1;

  let year = data.getFullYear();

  // let dayName = [
  //   'Понедельник',
  //   'Вторник',
  //   'Среда',
  //   'Четверг',
  //   'Пятница',
  //   'Суббота',
  //   'Воскресенье',
  // ];

  // const getDayWeek = (status: number) => dayName[status];

  const toMathDay = (needDay: number) => {
    let fixDay = 0;

    if (mounth % 2 == 0) {
      return (fixDay = needDay > 30 ? needDay - 30 : needDay);
    } else {
      return (fixDay = needDay > 31 ? needDay - 31 : needDay);
    }
  };

  // const setDisableDate=()=>{
  //   let mass = [];

  // }

  // const disableDate =

  const onGoToInfDay = (selectDay: number) => {
    // @ts-ignore
    navigation.navigate('infoDay', {selectDay});
  };

  const renderItem = (item: listWeather, index: number) => {
    return (
      <View style={stylesHome.wheaterCard}>
        <View style={stylesHome.cardItem}>
          <Text>{theme.text.default.wheather}</Text>
          <Text style={stylesHome.tempCardText}>{item.temp.average} °C</Text>
        </View>
        <View style={stylesHome.cardItemDesc}>
          <Text>
            {theme.text.default.wind}:{item.wind_speed}
          </Text>

          <Text>
            {theme.text.default.pressure}:{item.pressure}
          </Text>

          <Text>
            {theme.text.default.humidity}:{item.humidity}
          </Text>
          <Text>{toMathDay(day + index) + '.' + mounth}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={stylesHome.main}>
      <View>
        <CalendarPicker
          onDateChange={dt => {
            onGoToInfDay(dt.date());
          }}
        />
      </View>
      <View style={stylesHome.weekWheather}>
        <FlatList
          horizontal
          data={newWheather}
          renderItem={({item, index}) => {
            return renderItem(item, index);
          }}
        />
      </View>
    </View>
  );
};
export default HomeScreen;
