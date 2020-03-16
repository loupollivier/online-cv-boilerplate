package loupollivier.projet.onlinecvboilerplate.services;

import loupollivier.projet.onlinecvboilerplate.dto.ProjectDto;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;

import java.util.List;

public interface ProjectService {

    List<ProjectEntity> findAll();
    List<ProjectEntity> findAllByLanguage(String language);
}
