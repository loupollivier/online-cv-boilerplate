package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import loupollivier.projet.onlinecvboilerplate.services.ProjectService;
import loupollivier.projet.onlinecvboilerplate.dto.ProjectDto;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controllers that will interact with projects objects.
 */
@RestController
public class ProjectController {

    private ProjectService projectService;
    private ModelMapper modelMapper;

    public ProjectController(ProjectService projectService, ModelMapper modelMapper) {
        super();
        this.projectService = projectService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/search/projects/all")
    public ResponseEntity<List<ProjectDto>> getAllProjects() {
        List<ProjectEntity> projectList = projectService.findAll();
        List<ProjectDto> resultTrue = projectList.stream().map(project -> this.modelMapper.map(project, ProjectDto.class)).collect(Collectors.toList());
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }

    @GetMapping(value = "/search/projects")
    public ResponseEntity<List<ProjectDto>> getProjectsByLanguage(@RequestParam String language) {
        List<ProjectEntity> projectList = projectService.findAllByLanguage(language);
        List<ProjectDto> resultTrue = projectList.stream().map(project -> project.convertEntityToDto()).collect(Collectors.toList());
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
