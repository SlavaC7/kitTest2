import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/index';
import InfoDay from '../screens/infoDay';
import HeaderInfoDay from '../../component/headers/infoDay';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />

        <Stack.Screen
          name="infoDay"
          component={InfoDay}
          options={{
            headerTitle: () => <HeaderInfoDay />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
