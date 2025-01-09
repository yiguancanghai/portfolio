package com.cursor.portfolio.repository;

import com.cursor.portfolio.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long> {
    List<Project> findByFeaturedTrue();
    List<Project> findByCategoriesContaining(String category);
    List<Project> findByCategories(String category);
    List<Project> findByTechnologies(String technology);
    @Query("SELECT p FROM Project p WHERE p.featured = true")
    List<Project> findFeaturedProjects();
} 