package com.cursor.portfolio.service;

import com.cursor.portfolio.dto.BlogPostDTO;
import com.cursor.portfolio.model.BlogPost;
import com.cursor.portfolio.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.transaction.annotation.Transactional;
import java.time.LocalDateTime;
import com.cursor.portfolio.dto.BlogPostCreateDTO;
import org.springframework.http.HttpStatus;
import com.cursor.portfolio.exception.ApiException;

@Service
public class BlogPostService {
    
    @Autowired
    private BlogPostRepository blogPostRepository;
    
    public Page<BlogPostDTO> getAllPosts(int page, int size, String tag) {
        Pageable pageable = PageRequest.of(page, size);
        Page<BlogPost> posts = tag != null 
            ? blogPostRepository.findByTagsContaining(tag, pageable)
            : blogPostRepository.findAll(pageable);
        return posts.map(this::convertToDTO);
    }
    
    public BlogPostDTO getPostById(Long id) {
        BlogPost post = blogPostRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Blog post not found"));
        return convertToDTO(post);
    }
    
    public List<BlogPostDTO> searchPosts(String keyword) {
        return blogPostRepository.findByTitleContainingIgnoreCase(keyword)
                .stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }
    
    private BlogPostDTO convertToDTO(BlogPost post) {
        BlogPostDTO dto = new BlogPostDTO();
        dto.setId(post.getId());
        dto.setTitle(post.getTitle());
        dto.setContent(post.getContent());
        dto.setSummary(post.getSummary());
        dto.setPublishedDate(post.getPublishedDate());
        dto.setTags(post.getTags());
        dto.setImageUrl(post.getImageUrl());
        // Convert author to DTO if needed
        return dto;
    }
    
    @Transactional
    public BlogPostDTO createPost(BlogPostCreateDTO createDTO) {
        BlogPost post = new BlogPost();
        post.setTitle(createDTO.getTitle());
        post.setContent(createDTO.getContent());
        post.setSummary(createDTO.getSummary());
        post.setImageUrl(createDTO.getImageUrl());
        post.setTags(createDTO.getTags());
        post.setPublishedDate(LocalDateTime.now());
        
        BlogPost savedPost = blogPostRepository.save(post);
        return convertToDTO(savedPost);
    }
    
    @Transactional
    public BlogPostDTO updatePost(Long id, BlogPostCreateDTO updateDTO) {
        BlogPost post = blogPostRepository.findById(id)
            .orElseThrow(() -> new ApiException("Blog post not found", HttpStatus.NOT_FOUND));
        
        post.setTitle(updateDTO.getTitle());
        post.setContent(updateDTO.getContent());
        post.setSummary(updateDTO.getSummary());
        post.setImageUrl(updateDTO.getImageUrl());
        post.setTags(updateDTO.getTags());
        
        BlogPost updatedPost = blogPostRepository.save(post);
        return convertToDTO(updatedPost);
    }
    
    @Transactional
    public void deletePost(Long id) {
        if (!blogPostRepository.existsById(id)) {
            throw new ApiException("Blog post not found", HttpStatus.NOT_FOUND);
        }
        blogPostRepository.deleteById(id);
    }
    
    public List<String> getAllTags() {
        return blogPostRepository.findAllTags();
    }
} 