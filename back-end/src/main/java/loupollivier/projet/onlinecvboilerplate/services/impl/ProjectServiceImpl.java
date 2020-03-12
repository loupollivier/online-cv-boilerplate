package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.dto.ProjectDto;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.ProjectRepository;
import loupollivier.projet.onlinecvboilerplate.services.ProjectService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public List<ProjectDto> convertEntitiesToDto (List<ProjectEntity> projects) {
        List<ProjectDto> dtoProjects = new ArrayList<>();
        for(ProjectEntity project : projects) {
            for(ProjectDetailsEntity details : project.getDetails()) {
                ProjectDto projectDto = new ProjectDto();
                projectDto.setId(project.getId());
                projectDto.setClient(project.getClient());
                projectDto.setStartDate(project.getStartDate());
                projectDto.setEndDate(project.getEndDate());
                projectDto.setTeamSize(project.getTeamSize());
                projectDto.setTechnologies(project.getTechnologies());
                projectDto.setTools(project.getTools());
                projectDto.setTitle(details.getTitle());
                projectDto.setDescription(details.getDescription());
                projectDto.setPosition(details.getPosition());
                projectDto.setLanguage(details.getLanguage());
                dtoProjects.add(projectDto);
            }
        }
        return dtoProjects;
    }
}
