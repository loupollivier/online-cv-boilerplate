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
@Table(name = "hobby_details")
public class HobbyDetailsEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="name")
    private String name;
    @Column(name="description", length = 1000)
    private String description;
    @Column(name="language")
    private String language;
    @ManyToOne
    @JoinColumn(name="hobby_id")
    @ToString.Exclude
    private HobbyEntity hobby;

}
