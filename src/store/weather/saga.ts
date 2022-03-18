import {RootState} from '../types';
import {takeLatest, select, put} from '@redux-saga/core/effects';
import axios, {AxiosError} from 'axios';
import {getWheatheResponse, getWheatherRequest} from './types';
import {getWheatherListAction} from './action';

function* getMyProfileWorker({
  payload: {},
}: ReturnType<typeof getWheatherListAction['request']>) {
  const url = `https://community-open-weather-map.p.rapidapi.com/climate/month?q=Sumy`;
  console.log(url);
  try {
    const response: {data: getWheatheResponse} = yield axios.get(url, {
      headers: {
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        'x-rapidapi-key': '15eb0cc3bdmshd825bdf0d676861p12e311jsna81031e2c13f',
      },
    });
    console.log('Reg: ', response);
    yield put(getWheatherListAction.success(response.data));
  } catch (e: any) {
    console.log({...e});
  }
}

export function* wheatherWatcher() {
  yield takeLatest(getWheatherListAction.request, getMyProfileWorker);
}
