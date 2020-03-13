import Axios from 'axios';

import { Project } from '../models/project';
import { api } from '../constants/apiEndpoints';

export async function getProjects(setState: any) {
  const getCallAPI = await Axios.get(api.projects);
  const data: Project[] = await getCallAPI.data;
  console.log("getProjects: ", data)
  setState(data);
}

export const editProject = async (language: string, project: Project) => {
  //const postCallAPI = await Axios.post(api.setProject, { params: { language: language, project: project } });
}