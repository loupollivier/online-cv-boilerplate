package loupollivier.projet.onlinecvboilerplate.controllers;

import com.sun.org.apache.xpath.internal.operations.Mod;
import loupollivier.projet.onlinecvboilerplate.dto.ExperienceDto;
import loupollivier.projet.onlinecvboilerplate.dto.HobbyDto;
import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;
import loupollivier.projet.onlinecvboilerplate.services.HobbyService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controllers that will interact with {@link HobbyEntity} objects.
 */
@RestController
@RequestMapping("/hobbies")
public class HobbyController {

    private HobbyService hobbyService;
    private ModelMapper modelMapper;

    public HobbyController(HobbyService hobbyService, ModelMapper modelMapper) {
        super();
        this.modelMapper = modelMapper;
        this.hobbyService = hobbyService;
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<HobbyDto>> getAllHobbies() {
        List<HobbyEntity> hobbyList = hobbyService.findAll();
        List<HobbyDto> resultTrue = hobbyList.stream().map(hobby -> this.modelMapper.map(hobby, HobbyDto.class)).collect(Collectors.toList());
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }

}
