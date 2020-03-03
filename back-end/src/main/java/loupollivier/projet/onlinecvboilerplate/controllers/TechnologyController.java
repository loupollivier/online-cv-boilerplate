package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.dto.TechnologyDto;
import loupollivier.projet.onlinecvboilerplate.entities.TechnologyEntity;
import loupollivier.projet.onlinecvboilerplate.services.TechnologyService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controllers that will interact with technologies objects.
 */
@RestController
public class TechnologyController {

    private TechnologyService technologyService;
    private ModelMapper modelMapper;

    public TechnologyController(TechnologyService technologyService, ModelMapper modelMapper) {
        super();
        this.technologyService = technologyService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/search/technologies")
    public ResponseEntity<List<TechnologyDto>> getAllTechnologies() {
        List<TechnologyEntity> technologyList = technologyService.findAll();
        List<TechnologyDto> resultTrue = technologyList.stream().map(technology -> this.modelMapper.map(technology, TechnologyDto.class)).collect(Collectors.toList());
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
