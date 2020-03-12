package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import loupollivier.projet.onlinecvboilerplate.services.ProjectService;
import loupollivier.projet.onlinecvboilerplate.dto.ProjectDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controllers that will interact with projects objects.
 */
@RestController
@RequestMapping("/projects")
public class ProjectController {

    private ProjectService projectService;

    public ProjectController(ProjectService projectService) {
        super();
        this.projectService = projectService;
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<ProjectDto>> getAllProjects() {
        List<ProjectEntity> projectList = projectService.findAll();
        List<ProjectDto> resultTrue = projectService.convertEntitiesToDto(projectList);
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }

    @GetMapping(value = "/getByLanguage")
    public ResponseEntity<List<ProjectDto>> getProjectsByLanguage(@RequestParam String language) {
        List<ProjectEntity> projectList = projectService.findAllByLanguage(language);
        List<ProjectDto> resultTrue = projectService.convertEntitiesToDto(projectList);
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
