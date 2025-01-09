package com.cursor.portfolio.service;

import com.cursor.portfolio.dto.ContactMessageDTO;
import com.cursor.portfolio.model.Contact;
import com.cursor.portfolio.repository.ContactRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
public class ContactService {
    
    @Autowired
    private JavaMailSender mailSender;
    
    @Autowired
    private ContactRepository contactRepository;
    
    @Value("${spring.mail.username}")
    private String recipientEmail;

    @Transactional
    public void sendMessage(ContactMessageDTO messageDTO) {
        // Save to database
        Contact contact = new Contact();
        contact.setName(messageDTO.getName());
        contact.setEmail(messageDTO.getEmail());
        contact.setMessage(messageDTO.getMessage());
        contactRepository.save(contact);

        // Send email
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(messageDTO.getEmail());
            message.setTo(recipientEmail);
            message.setSubject("New Contact Form Message from " + messageDTO.getName());
            message.setText(String.format(
                "Name: %s\nEmail: %s\n\nMessage:\n%s",
                messageDTO.getName(),
                messageDTO.getEmail(),
                messageDTO.getMessage()
            ));
            
            mailSender.send(message);
            log.info("Contact form email sent successfully");
        } catch (Exception e) {
            log.error("Failed to send contact form email", e);
            throw new RuntimeException("Failed to send email", e);
        }
    }
} 