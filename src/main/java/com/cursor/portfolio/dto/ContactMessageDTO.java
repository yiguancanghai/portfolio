package com.cursor.portfolio.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class ContactMessageDTO {
    @NotBlank(message = "Name is required")
    private String name;
    
    @Email(message = "Invalid email address")
    @NotBlank(message = "Email is required")
    private String email;
    
    @NotBlank(message = "Message is required")
    private String message;
} 