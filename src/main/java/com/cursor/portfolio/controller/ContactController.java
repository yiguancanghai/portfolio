package com.cursor.portfolio.controller;

import com.cursor.portfolio.dto.ContactMessageDTO;
import com.cursor.portfolio.service.ContactService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@Tag(name = "Contact", description = "Contact form endpoints")
public class ContactController {
    
    @Autowired
    private ContactService contactService;
    
    @PostMapping
    @Operation(summary = "Send contact form message")
    public ResponseEntity<Void> sendMessage(@Valid @RequestBody ContactMessageDTO messageDTO) {
        contactService.sendMessage(messageDTO);
        return ResponseEntity.ok().build();
    }
} 