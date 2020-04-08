import Axios from 'axios';

import { Project } from '../models/project';
import { api } from '../constants/apiEndpoints';

export async function getProjects(setState: any) {
  const getCallAPI = await Axios.get(api.projects);
  const data: Project[] = await getCallAPI.data;
  console.log("getProjects: ", data)
  setState(data);
}

export async function saveProject(project: Project) {
  console.log("send project: ", project)
  const postCallAPI = await Axios.put(api.updateProject, project);
  console.log('response status: ', postCallAPI.status);
}