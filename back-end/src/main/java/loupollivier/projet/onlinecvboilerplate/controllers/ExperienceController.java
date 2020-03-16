package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.dto.ExperienceDto;
import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;
import loupollivier.projet.onlinecvboilerplate.services.ExperienceService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controllers that will interact with {@link ExperienceEntity} objects.
 */
@RestController
@RequestMapping("/experiences")
public class ExperienceController {

    private ExperienceService experienceService;
    private ModelMapper modelMapper;

    public ExperienceController(ExperienceService experienceService, ModelMapper modelMapper) {
        super();
        this.modelMapper = modelMapper;
        this.experienceService = experienceService;
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<ExperienceDto>> getAllExperiences() {
        List<ExperienceEntity> experienceList = experienceService.findAllByStartDateDesc();
        List<ExperienceDto> resultTrue = experienceList.stream().map(experience -> this.modelMapper.map(experience, ExperienceDto.class)).collect(Collectors.toList());
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
