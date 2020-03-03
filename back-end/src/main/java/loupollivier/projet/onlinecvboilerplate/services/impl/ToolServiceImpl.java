package loupollivier.projet.onlinecvboilerplate.services.impl;

import loupollivier.projet.onlinecvboilerplate.entities.ToolEntity;
import loupollivier.projet.onlinecvboilerplate.repositories.ToolRepository;
import loupollivier.projet.onlinecvboilerplate.services.ToolService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ToolServiceImpl implements ToolService {

    private ToolRepository toolRepository;

    public ToolServiceImpl(ToolRepository toolRepository) {
        this.toolRepository = toolRepository;
    }

    @Override
    public List<ToolEntity> findAll() {
        return this.toolRepository.findAll();
    }
}
