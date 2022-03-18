import {StyleSheet} from 'react-native';
import {theme} from '../../../theme';

export const stylesHome = StyleSheet.create({
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  weekWheather: {
    height: '50%',
  },
  wheaterCard: {
    width: 150,
    height: 150,
    borderRadius: 20,
    borderWidth: 2,
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  cardItemDesc: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10,
  },
  tempCardText: {
    fontSize: theme.fontSize.l,
  },
});
