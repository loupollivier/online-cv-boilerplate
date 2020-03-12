package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.dto.ExperienceDto;
import loupollivier.projet.onlinecvboilerplate.entities.ExperienceDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.ExperienceRepository;
import loupollivier.projet.onlinecvboilerplate.services.ExperienceService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    private ExperienceRepository experienceRepository;

    public ExperienceServiceImpl(ExperienceRepository experienceRepository) {
        this.experienceRepository = experienceRepository;
    }

    @Override
    public List<ExperienceEntity> findAllByStartDateDesc() {
        return this.experienceRepository.findAllByOrderByStartDateDesc();
    }

    @Override
    public List<ExperienceDto> convertEntitiesToDto(List<ExperienceEntity> experiences) {
        List<ExperienceDto> dtoExperiences = new ArrayList<>();
        for(ExperienceEntity experience : experiences) {
            for(ExperienceDetailsEntity details : experience.getDetails()) {
                ExperienceDto experienceDto = new ExperienceDto();
                experienceDto.setId(experience.getId());
                experienceDto.setStartDate(experience.getStartDate());
                experienceDto.setEndDate(experience.getEndDate());
                experienceDto.setTitle(details.getTitle());
                experienceDto.setDescription(details.getDescription());
                experienceDto.setLanguage(details.getLanguage());
                dtoExperiences.add(experienceDto);
            }
        }
        return dtoExperiences;
    }
}
