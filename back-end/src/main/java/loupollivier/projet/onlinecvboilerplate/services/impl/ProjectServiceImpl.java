package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.HobbyDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectDetailsEntity;
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

    @Override
    public void saveOne(ProjectEntity project) {
        List<ProjectDetailsEntity> details = project.getDetails();
        for(ProjectDetailsEntity detail : details) {
            detail.setProject(project);
        }
        project.setDetails(details);
        projectRepository.save(project);
    }
}
