import {createActionTypes, createApiActions} from '../rootActions';

import {AxiosError} from 'axios';
import {Empty} from '../types';
import {getWheatheResponse, getWheatherRequest} from './types';

export const getWheatherListAction = createApiActions<
  Empty,
  getWheatheResponse,
  Empty
>(createActionTypes('WHEATHER/LIST'));
