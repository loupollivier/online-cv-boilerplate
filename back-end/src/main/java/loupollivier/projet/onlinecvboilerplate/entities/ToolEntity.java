package loupollivier.projet.onlinecvboilerplate.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "tool")
public class ToolEntity implements Serializable {

    @Id
    @Column(name="id")
    private Integer id;

    @Column(name="name")
    private String name;
}
