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
@Table(name = "tools")
public class ToolEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;
    @Column(name="name")
    private String name;
}
