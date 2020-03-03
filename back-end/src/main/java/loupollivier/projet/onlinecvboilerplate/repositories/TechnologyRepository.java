package loupollivier.projet.onlinecvboilerplate.repositories;

import loupollivier.projet.onlinecvboilerplate.entities.TechnologyEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TechnologyRepository extends JpaRepository<TechnologyEntity, Integer> {

}
