package loupollivier.projet.onlinecvboilerplate.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import loupollivier.projet.onlinecvboilerplate.entities.TechnologyEntity;
import loupollivier.projet.onlinecvboilerplate.entities.ToolEntity;

import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProjectDto {

    @JsonProperty("id")
    private Integer id;
    @JsonProperty("client")
    private String client;
    @JsonProperty("startDate")
    private LocalDate startDate;
    @JsonProperty("endDate")
    private LocalDate endDate;
    @JsonProperty("teamSize")
    private Integer teamSize;
    @JsonProperty("technologies")
    private List<TechnologyEntity> technologies;
    @JsonProperty("tools")
    private List<ToolEntity> tools;
    @JsonProperty("details")
    private List<ProjectDetailsDto> details;
}
