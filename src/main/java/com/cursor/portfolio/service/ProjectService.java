package com.cursor.portfolio.service;

import com.cursor.portfolio.dto.ProjectCreateDTO;
import com.cursor.portfolio.dto.ProjectDTO;
import com.cursor.portfolio.exception.ApiException;
import com.cursor.portfolio.model.Project;
import com.cursor.portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class ProjectService {
    
    @Autowired
    private ProjectRepository projectRepository;
    
    @Transactional
    public ProjectDTO createProject(ProjectCreateDTO createDTO) {
        Project project = new Project();
        project.setTitle(createDTO.getTitle());
        project.setDescription(createDTO.getDescription());
        project.setGithubUrl(createDTO.getGithubUrl());
        project.setLiveUrl(createDTO.getLiveUrl());
        project.setTechnologies(createDTO.getTechnologies());
        project.setCategories(createDTO.getCategories());
        
        Project savedProject = projectRepository.save(project);
        return convertToDTO(savedProject);
    }
    
    @Transactional
    public ProjectDTO updateProject(Long id, ProjectCreateDTO updateDTO) {
        Project project = projectRepository.findById(id)
            .orElseThrow(() -> new ApiException("Project not found", HttpStatus.NOT_FOUND));
            
        project.setTitle(updateDTO.getTitle());
        project.setDescription(updateDTO.getDescription());
        project.setGithubUrl(updateDTO.getGithubUrl());
        project.setLiveUrl(updateDTO.getLiveUrl());
        project.setTechnologies(updateDTO.getTechnologies());
        project.setCategories(updateDTO.getCategories());
        
        Project updatedProject = projectRepository.save(project);
        return convertToDTO(updatedProject);
    }
    
    @Transactional
    public void deleteProject(Long id) {
        if (!projectRepository.existsById(id)) {
            throw new ApiException("Project not found", HttpStatus.NOT_FOUND);
        }
        projectRepository.deleteById(id);
    }
    
    private ProjectDTO convertToDTO(Project project) {
        ProjectDTO dto = new ProjectDTO();
        dto.setId(project.getId());
        dto.setTitle(project.getTitle());
        dto.setDescription(project.getDescription());
        dto.setGithubUrl(project.getGithubUrl());
        dto.setLiveUrl(project.getLiveUrl());
        dto.setTechnologies(project.getTechnologies());
        dto.setCategories(project.getCategories());
        return dto;
    }

    public List<ProjectDTO> getAllProjects() {
        return projectRepository.findAll().stream()
            .map(this::convertToDTO)
            .toList();
    }

    public ProjectDTO getProjectById(Long id) {
        return projectRepository.findById(id)
            .map(this::convertToDTO)
            .orElseThrow(() -> new ApiException("Project not found", HttpStatus.NOT_FOUND));
    }

    public List<ProjectDTO> getProjectsByCategory(String category) {
        return projectRepository.findByCategories(category).stream()
            .map(this::convertToDTO)
            .toList();
    }

    public List<ProjectDTO> getProjectsByTechnology(String technology) {
        return projectRepository.findByTechnologies(technology).stream()
            .map(this::convertToDTO)
            .toList();
    }

    public List<ProjectDTO> getFeaturedProjects() {
        return projectRepository.findFeaturedProjects().stream()
            .map(this::convertToDTO)
            .toList();
    }
}