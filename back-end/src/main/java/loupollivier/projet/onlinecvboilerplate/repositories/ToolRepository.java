package loupollivier.projet.onlinecvboilerplate.repositories;

import loupollivier.projet.onlinecvboilerplate.entities.ToolEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToolRepository extends JpaRepository<ToolEntity, Integer> {

}
