package com.cursor.portfolio.model;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Set;
import java.util.HashSet;

@Data
@Entity
@Table(name = "projects")
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 1000)
    private String description;

    private String githubUrl;
    
    private String liveUrl;
    
    private String imageUrl;
    
    private boolean featured;

    @ElementCollection
    @CollectionTable(name = "project_technologies")
    private Set<String> technologies = new HashSet<>();

    @ElementCollection
    @CollectionTable(name = "project_categories")
    private Set<String> categories = new HashSet<>();
} 