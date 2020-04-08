package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.ExperienceDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.ExperienceRepository;
import loupollivier.projet.onlinecvboilerplate.services.ExperienceService;
import org.springframework.stereotype.Service;

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
    public void saveOne(ExperienceEntity experience) {
        List<ExperienceDetailsEntity> details = experience.getDetails();
        for(ExperienceDetailsEntity detail : details) {
            detail.setExperience(experience);
        }
        experience.setDetails(details);
        experienceRepository.save(experience);
    }
}
