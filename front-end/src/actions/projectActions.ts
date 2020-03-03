import Axios from 'axios';

import { Project } from '../models/project';
import { api } from '../constants/apiEndpoints';

export const getProjectsByLanguage = async (language: string, setState: any) => {
  const getCallAPI = await Axios.get(api.getProjects, { params: { language: language } });
  const data: Project[] = await getCallAPI.data;
  setState(data)
}

export const editProject = async (language: string, project: Project) => {
  const postCallAPI = await Axios.post(api.setProject, { params: { language: language, project: project } });

}