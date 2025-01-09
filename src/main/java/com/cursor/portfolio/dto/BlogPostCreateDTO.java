package com.cursor.portfolio.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;
import java.util.Set;

@Data
public class BlogPostCreateDTO {
    @NotBlank(message = "Title is required")
    private String title;
    
    @NotBlank(message = "Content is required")
    private String content;
    
    private String summary;
    private String imageUrl;
    private Set<String> tags;
} 