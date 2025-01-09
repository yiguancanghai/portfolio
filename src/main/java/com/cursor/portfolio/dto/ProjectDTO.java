package com.cursor.portfolio.dto;

import lombok.Data;
import java.util.Set;

@Data
public class ProjectDTO {
    private Long id;
    private String title;
    private String description;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl;
    private boolean featured;
    private Set<String> technologies;
    private Set<String> categories;
} 