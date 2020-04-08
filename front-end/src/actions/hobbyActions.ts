import Axios from 'axios';

import { Hobby } from '../models/hobby';
import { api } from '../constants/apiEndpoints';

export async function getHobbies(setState: any) {
  const getCallAPI = await Axios.get(api.hobbies);
  const data: Hobby[] = await getCallAPI.data;
  console.log("getHobbies: ", data)
  setState(data)
}

export async function saveHobby(hobby: Hobby) {
  console.log("send hobby: ", hobby)
  const postCallAPI = await Axios.put(api.updateHobby, hobby);
  console.log('response status: ', postCallAPI.status);
}