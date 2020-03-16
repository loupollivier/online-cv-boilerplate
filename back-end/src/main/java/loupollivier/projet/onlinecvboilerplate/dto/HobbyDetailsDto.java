package loupollivier.projet.onlinecvboilerplate.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

// peut-être à implémenter directement dans la classe HobbyDto, à voir si pas utilisé seul ailleur plus tard
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HobbyDetailsDto {

    @JsonProperty("name")
    private String name;
    @JsonProperty("description")
    private String description;
    @JsonProperty("language")
    private String language;
}
