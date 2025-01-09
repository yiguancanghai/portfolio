package com.cursor.portfolio.dto;

import lombok.Data;
import java.time.LocalDateTime;
import java.util.Set;

@Data
public class BlogPostDTO {
    private Long id;
    private String title;
    private String content;
    private String summary;
    private LocalDateTime publishedDate;
    private Set<String> tags;
    private String imageUrl;
    private UserDTO author;
} 