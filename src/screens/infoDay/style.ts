import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const stylesInfoDay = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  weekWheather: {
    height: '50%',
  },
  titleText: {
    fontSize: theme.fontSize.xl,
  },
});
