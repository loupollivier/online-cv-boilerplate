package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.dto.ExperienceDto;
import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;
import loupollivier.projet.onlinecvboilerplate.services.ExperienceService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Controllers that will interact with experiences objects.
 */
@RestController
public class ExperienceController {

    private ExperienceService experienceService;
    private ModelMapper modelMapper;

    public ExperienceController(ExperienceService experienceService, ModelMapper modelMapper) {
        super();
        this.experienceService = experienceService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/search/experiences")
    public ResponseEntity<List<ExperienceDto>> getAllExperiences() {
        List<ExperienceEntity> experienceList = experienceService.findAll();
        List<ExperienceDto> resultTrue = experienceList.stream().map(experience -> this.modelMapper.map(experience, ExperienceDto.class)).collect(Collectors.toList());
        Collections.reverse(resultTrue);
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
