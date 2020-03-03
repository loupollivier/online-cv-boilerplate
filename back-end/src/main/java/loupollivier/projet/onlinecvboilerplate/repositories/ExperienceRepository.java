package loupollivier.projet.onlinecvboilerplate.repositories;

import loupollivier.projet.onlinecvboilerplate.entities.ExperienceEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRepository extends JpaRepository<ExperienceEntity, Integer> {

}
