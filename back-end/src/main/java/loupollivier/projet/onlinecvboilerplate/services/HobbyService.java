package loupollivier.projet.onlinecvboilerplate.services;

import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;

import java.util.List;

public interface HobbyService {

    List<HobbyEntity> findAll();

    void saveOne(HobbyEntity hobby);
}
