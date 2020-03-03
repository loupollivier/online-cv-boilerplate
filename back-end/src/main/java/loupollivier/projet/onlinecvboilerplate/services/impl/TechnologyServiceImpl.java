package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.TechnologyEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.TechnologyRepository;
import loupollivier.projet.onlinecvboilerplate.services.TechnologyService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TechnologyServiceImpl implements TechnologyService {

    private TechnologyRepository technologyRepository;

    public TechnologyServiceImpl(TechnologyRepository technologyRepository) {
        this.technologyRepository = technologyRepository;
    }

    @Override
    public List<TechnologyEntity> findAll() {
        return this.technologyRepository.findAll();
    }
}
