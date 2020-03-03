package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "experience")
public class ExperienceEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;

    @Column(name="title")
    private String title;

    @Column(name="description")
    private String description;

    @Column(name="start_date")
    private LocalDate startDate;

    @Column(name="end_date")
    private LocalDate endDate;
}
