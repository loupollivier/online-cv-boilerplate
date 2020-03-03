package loupollivier.projet.onlinecvboilerplate.controllers;

import loupollivier.projet.onlinecvboilerplate.dto.ToolDto;
import loupollivier.projet.onlinecvboilerplate.entities.ToolEntity;
import loupollivier.projet.onlinecvboilerplate.services.ToolService;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Controllers that will interact with tools objects.
 */
@RestController
public class ToolController {

    private ToolService toolService;
    private ModelMapper modelMapper;

    public ToolController(ToolService toolService, ModelMapper modelMapper) {
        super();
        this.toolService = toolService;
        this.modelMapper = modelMapper;
    }

    @GetMapping(value = "/search/tools")
    public ResponseEntity<List<ToolDto>> getAllTools() {
        List<ToolEntity> toolsList = toolService.findAll();
        List<ToolDto> resultTrue = toolsList.stream().map(tool -> this.modelMapper.map(tool, ToolDto.class)).collect(Collectors.toList());
        return new ResponseEntity<>(resultTrue, HttpStatus.OK);
    }
}
