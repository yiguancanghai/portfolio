package com.cursor.portfolio.repository;

import com.cursor.portfolio.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Long> {
} 