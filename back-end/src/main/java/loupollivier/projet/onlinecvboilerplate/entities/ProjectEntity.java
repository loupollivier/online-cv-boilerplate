package loupollivier.projet.onlinecvboilerplate.entities;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import loupollivier.projet.onlinecvboilerplate.dto.ProjectDto;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "projects")
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
    @OneToMany(mappedBy = "project", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<ProjectDetailsEntity> details;
    @ManyToMany
    @JoinTable
    private List<TechnologyEntity> technologies;
    @ManyToMany
    @JoinTable
    private List<ToolEntity> tools;
}
