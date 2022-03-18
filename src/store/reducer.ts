import {combineReducers} from '@reduxjs/toolkit';
import {hotelReducer as wheatherReducer} from './weather';

export default combineReducers({
  wheather: wheatherReducer,
});
