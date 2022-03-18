import {createReducer} from '@reduxjs/toolkit';
import {getWheatherListAction} from './action';
import {TInitialState} from './types';

const InitialState: TInitialState = {
  wheatherList: null,
};

export const hotelReducer = createReducer<TInitialState>(
  InitialState,
  builder => {
    builder.addCase(getWheatherListAction.success, (state, {payload}) => ({
      ...state,
      wheatherList: payload,
    }));
  },
);
