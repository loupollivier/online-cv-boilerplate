package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.DetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.ProjectRepository;
import loupollivier.projet.onlinecvboilerplate.services.ProjectService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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
        List<ProjectEntity> projects = this.projectRepository.findAll();
        List<ProjectEntity> validProjects = projects.stream().map(project -> {
            List<DetailsEntity> validDetails = project.getDetails().stream().filter(detail -> detail.getLanguage().equals(language)).collect(Collectors.toList());
            project.setDetails(validDetails);
            return project;
        }).collect(Collectors.toList());
        return validProjects;
    }
}
