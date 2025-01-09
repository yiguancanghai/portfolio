package com.cursor.portfolio.repository;

import com.cursor.portfolio.model.BlogPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface BlogPostRepository extends JpaRepository<BlogPost, Long> {
    List<BlogPost> findByTagsContaining(String tag);
    List<BlogPost> findByOrderByPublishedDateDesc();
    List<BlogPost> findByTitleContainingIgnoreCase(String keyword);
    @Query("SELECT DISTINCT t FROM BlogPost b JOIN b.tags t")
    List<String> findAllTags();
    Page<BlogPost> findByTagsContaining(String tag, Pageable pageable);
} 