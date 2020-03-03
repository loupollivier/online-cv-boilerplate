package loupollivier.projet.onlinecvboilerplate.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ToolDto {
    @JsonProperty("id")
    private Integer id;
    @JsonProperty("name")
    private String name;
}
