package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "project_details")
public class ProjectDetailsEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="title")
    private String title;
    @Column(name="description", length = 1000)
    private String description;
    @Column(name="position")
    private String position;
    @Column(name="language")
    private String language;
    @ManyToOne
    @JoinColumn(name="project_id")
    @ToString.Exclude
    private ProjectEntity project;
}