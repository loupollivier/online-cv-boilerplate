package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.dto.ExperienceDto;
import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;
import loupollivier.projet.onlinecvboilerplate.services.ExperienceService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controllers that will interact with {@link ExperienceEntity} objects.
 */
@RestController
@RequestMapping("/experiences")
public class ExperienceController {

    private ExperienceService experienceService;

    public ExperienceController(ExperienceService experienceService) {
        super();
        this.experienceService = experienceService;
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<ExperienceDto>> getAllExperiences() {
        List<ExperienceEntity> experienceList = experienceService.findAllByStartDateDesc();
        List<ExperienceDto> resultTrue = experienceService.convertEntitiesToDto(experienceList);
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
