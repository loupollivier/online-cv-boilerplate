package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import loupollivier.projet.onlinecvboilerplate.dto.ProjectDto;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project")
public class ProjectEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="client")
    private String client;
    @Column(name="start_date")
    private LocalDate startDate;
    @Column(name="end_date")
    private LocalDate endDate;
    @Column(name="team_size")
    private Integer teamSize;
    @JoinTable
    @OneToMany
    private List<DetailsEntity> details;
    @JoinTable
    @OneToMany
    private List<TechnologyEntity> technologies;
    @JoinTable
    @OneToMany
    private List<ToolEntity> tools;

    public ProjectDto convertEntityToDto () {
        DetailsEntity projectDetails = this.details.get(0);

        ProjectDto projectDto = new ProjectDto();
        projectDto.setId(this.id);
        projectDto.setClient(this.client);
        projectDto.setStartDate(this.startDate);
        projectDto.setEndDate(this.endDate);
        projectDto.setTeamSize(this.teamSize);
        projectDto.setTechnologies(this.technologies);
        projectDto.setTools(this.tools);
        projectDto.setDescription(projectDetails.getDescription());
        projectDto.setPosition(projectDetails.getPosition());
        projectDto.setTitle(projectDetails.getTitle());

        return projectDto;
    }
}
