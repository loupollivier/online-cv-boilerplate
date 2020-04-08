package loupollivier.projet.onlinecvboilerplate.repositories;

import loupollivier.projet.onlinecvboilerplate.entities.HobbyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HobbyRepository extends JpaRepository<HobbyEntity, Integer> {

}
