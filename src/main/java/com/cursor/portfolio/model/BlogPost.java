package com.cursor.portfolio.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;
import java.util.Set;
import java.util.HashSet;

@Data
@Entity
@Table(name = "blog_posts")
public class BlogPost {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(length = 10000)
    private String content;

    @Column(length = 500)
    private String summary;

    private LocalDateTime publishedDate = LocalDateTime.now();

    @ElementCollection
    @CollectionTable(name = "blog_tags")
    private Set<String> tags = new HashSet<>();

    private String imageUrl;
    
    @ManyToOne
    @JoinColumn(name = "author_id")
    private User author;
} 