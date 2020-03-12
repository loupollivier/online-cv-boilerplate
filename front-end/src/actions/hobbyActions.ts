import Axios from 'axios';

import { Hobby } from '../models/hobby';
import { api } from '../constants/apiEndpoints';

export const getHobbies = async (setState: any) => {
  const getCallAPI = await Axios.get(api.hobbies);
  const data: Hobby[] = await getCallAPI.data;
  setState(data)
}