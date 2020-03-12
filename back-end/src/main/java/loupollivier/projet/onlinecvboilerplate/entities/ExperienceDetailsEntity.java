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
@Table(name = "experience_details")
public class ExperienceDetailsEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="title")
    private String title;
    @Column(name="description", length = 1000)
    private String description;
    @Column(name="language")
    private String language;
    @ManyToOne
    @JoinColumn(name="experience_id")
    @ToString.Exclude
    private ExperienceEntity experience;
}
