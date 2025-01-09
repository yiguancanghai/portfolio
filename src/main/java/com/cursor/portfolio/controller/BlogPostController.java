package com.cursor.portfolio.controller;

import com.cursor.portfolio.dto.BlogPostCreateDTO;
import com.cursor.portfolio.dto.BlogPostDTO;
import com.cursor.portfolio.service.BlogPostService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/blog")
public class BlogPostController {
    
    @Autowired
    private BlogPostService blogPostService;
    
    @GetMapping
    public ResponseEntity<Page<BlogPostDTO>> getAllPosts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String tag) {
        return ResponseEntity.ok(blogPostService.getAllPosts(page, size, tag));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<BlogPostDTO> getPostById(@PathVariable Long id) {
        return ResponseEntity.ok(blogPostService.getPostById(id));
    }
    
    @GetMapping("/search")
    public ResponseEntity<List<BlogPostDTO>> searchPosts(@RequestParam String keyword) {
        return ResponseEntity.ok(blogPostService.searchPosts(keyword));
    }
    
    @PostMapping
    public ResponseEntity<BlogPostDTO> createPost(@Valid @RequestBody BlogPostCreateDTO postDTO) {
        return ResponseEntity.ok(blogPostService.createPost(postDTO));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<BlogPostDTO> updatePost(
            @PathVariable Long id,
            @Valid @RequestBody BlogPostCreateDTO postDTO) {
        return ResponseEntity.ok(blogPostService.updatePost(id, postDTO));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        blogPostService.deletePost(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/tags")
    public ResponseEntity<List<String>> getAllTags() {
        return ResponseEntity.ok(blogPostService.getAllTags());
    }
} 