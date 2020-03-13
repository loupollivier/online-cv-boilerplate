import Axios from 'axios';

import { Experience } from '../models/experience';
import { api } from '../constants/apiEndpoints';

export async function getExperiences(setState: any) {
  const getCallAPI = await Axios.get(api.experiences);
  const data: Experience[] = await getCallAPI.data;
  console.log("getExperiences: ", data)
  setState(data);
}