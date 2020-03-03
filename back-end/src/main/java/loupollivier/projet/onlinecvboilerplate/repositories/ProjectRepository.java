package loupollivier.projet.onlinecvboilerplate.repositories;

import loupollivier.projet.onlinecvboilerplate.entities.ProjectEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<ProjectEntity, Integer> {

//    @Query("select project from ProjectEntity project join project.project_details pd where 'en' in (select name from LanguageEntity language where language.name like 'en')")
//    List<ProjectEntity> findDetailsByLanguage(@Param("language") String language);

    @Query("select project from ProjectEntity project  ")
    List<ProjectEntity>  findByDetails_Language(String language);

}
