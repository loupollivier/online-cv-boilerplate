package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.ProjectRepository;
import loupollivier.projet.onlinecvboilerplate.services.ProjectService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectServiceImpl implements ProjectService {

    private ProjectRepository projectRepository;

    public ProjectServiceImpl(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    @Override
    public List<ProjectEntity> findAll() {
        return this.projectRepository.findAll();
    }

    @Override
    public List<ProjectEntity> findAllByLanguage(String language) {
        return this.projectRepository.findAllByLanguage("fr");
    }
}
