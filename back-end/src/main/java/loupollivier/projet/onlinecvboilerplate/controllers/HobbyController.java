package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.dto.HobbyDto;
import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;
import loupollivier.projet.onlinecvboilerplate.services.HobbyService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Controllers that will interact with {@link HobbyEntity} objects.
 */
@RestController
@RequestMapping("/hobbies")
public class HobbyController {

    private HobbyService hobbyService;

    public HobbyController(HobbyService hobbyService) {
        super();
        this.hobbyService = hobbyService;
    }

    @GetMapping(value = "/getAll")
    public ResponseEntity<List<HobbyDto>> getAllHobbies() {
        List<HobbyEntity> hobbyList = hobbyService.findAll();
        List<HobbyDto> resultTrue = hobbyService.convertEntitiesToDto(hobbyList);
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }

}
