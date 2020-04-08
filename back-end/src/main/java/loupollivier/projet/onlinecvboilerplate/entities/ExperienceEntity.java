package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "experiences")
public class ExperienceEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="start_date")
    private LocalDate startDate;
    @Column(name="end_date")
    private LocalDate endDate;
    @OneToMany(mappedBy = "experience", cascade = CascadeType.ALL)
    @ToString.Exclude
    private List<ExperienceDetailsEntity> details;
}
