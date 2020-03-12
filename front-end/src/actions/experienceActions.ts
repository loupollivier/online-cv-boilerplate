import Axios from 'axios';

import { Experience } from '../models/experience';
import { api } from '../constants/apiEndpoints';

export async function getExperiences(setState: any) {
  const getCallAPI = await Axios.get(api.experiences, {});
  const data: Experience[] = await getCallAPI.data;
  setState(data);
}

export const editExperience = async (language: string, experience: Experience) => {
  //const postCallAPI = await Axios.post(api.setProject, { params: { language: language, project: project } });
}