package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.dto.HobbyDto;
import loupollivier.projet.onlinecvboilerplate.entities.HobbyDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.HobbyRepository;
import loupollivier.projet.onlinecvboilerplate.services.HobbyService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HobbyServiceImpl implements HobbyService {

    private HobbyRepository hobbyRepository;

    public HobbyServiceImpl(HobbyRepository hobbyRepository) {
        this.hobbyRepository = hobbyRepository;
    }

    @Override
    public List<HobbyEntity> findAll() {
        return hobbyRepository.findAll();
    }

    @Override
    public List<HobbyDto> convertEntitiesToDto(List<HobbyEntity> hobbies) {
        List<HobbyDto> dtoExperiences = new ArrayList<>();
        for(HobbyEntity hobby : hobbies) {
            for(HobbyDetailsEntity details : hobby.getDetails()) {
                HobbyDto hobbyDto = new HobbyDto();
                hobbyDto.setId(hobby.getId());
                hobbyDto.setImageUrl(hobby.getImageUrl());
                hobbyDto.setName(details.getName());
                hobbyDto.setDescription(details.getDescription());
                hobbyDto.setLanguage(details.getLanguage());
                dtoExperiences.add(hobbyDto);
            }
        }
        return dtoExperiences;
    }
}
