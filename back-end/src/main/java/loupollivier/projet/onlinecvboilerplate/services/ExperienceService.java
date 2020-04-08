package loupollivier.projet.onlinecvboilerplate.services;

import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;

import java.util.List;

public interface ExperienceService {

    List<ExperienceEntity> findAllByStartDateDesc();
    void saveOne(ExperienceEntity experience);
}
