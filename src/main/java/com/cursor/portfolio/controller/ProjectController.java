package com.cursor.portfolio.controller;

import com.cursor.portfolio.dto.ProjectCreateDTO;
import com.cursor.portfolio.dto.ProjectDTO;
import com.cursor.portfolio.service.ProjectService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    
    @Autowired
    private ProjectService projectService;
    
    @GetMapping
    public ResponseEntity<List<ProjectDTO>> getAllProjects(
            @RequestParam(required = false) String category,
            @RequestParam(required = false) String technology) {
        if (category != null) {
            return ResponseEntity.ok(projectService.getProjectsByCategory(category));
        }
        if (technology != null) {
            return ResponseEntity.ok(projectService.getProjectsByTechnology(technology));
        }
        return ResponseEntity.ok(projectService.getAllProjects());
    }
    
    @GetMapping("/featured")
    public ResponseEntity<List<ProjectDTO>> getFeaturedProjects() {
        return ResponseEntity.ok(projectService.getFeaturedProjects());
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ProjectDTO> getProjectById(@PathVariable Long id) {
        return ResponseEntity.ok(projectService.getProjectById(id));
    }
    
    @PostMapping
    public ResponseEntity<ProjectDTO> createProject(@Valid @RequestBody ProjectCreateDTO projectDTO) {
        return ResponseEntity.ok(projectService.createProject(projectDTO));
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<ProjectDTO> updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectCreateDTO projectDTO) {
        return ResponseEntity.ok(projectService.updateProject(id, projectDTO));
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        projectService.deleteProject(id);
        return ResponseEntity.noContent().build();
    }
} 