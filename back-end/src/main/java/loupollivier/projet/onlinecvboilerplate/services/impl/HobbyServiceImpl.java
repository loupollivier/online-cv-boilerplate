package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.HobbyDetailsEntity;
import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.HobbyRepository;
import loupollivier.projet.onlinecvboilerplate.services.HobbyService;
import org.springframework.stereotype.Service;

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
    public void saveOne(HobbyEntity hobby) {
        List<HobbyDetailsEntity> details = hobby.getDetails();
        for(HobbyDetailsEntity detail : details) {
            detail.setHobby(hobby);
        }
        hobby.setDetails(details);
        hobbyRepository.save(hobby);
    }
}
