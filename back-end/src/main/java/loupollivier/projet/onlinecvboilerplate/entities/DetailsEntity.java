package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "details")
public class DetailsEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="title")
    private String title;
    @Column(name="description")
    private String description;
    @Column(name="position")
    private String position;
    @Column(name="language")
    private String language;
}
