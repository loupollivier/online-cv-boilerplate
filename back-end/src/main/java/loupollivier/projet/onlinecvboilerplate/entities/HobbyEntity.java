package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "hobbies")
public class HobbyEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="image_url")
    private String imageUrl;
    @OneToMany(mappedBy = "hobby")
    @ToString.Exclude
    private List<HobbyDetailsEntity> details;

}
