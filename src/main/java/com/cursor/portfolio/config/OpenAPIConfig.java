package com.cursor.portfolio.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@OpenAPIDefinition(
    info = @Info(
        title = "Portfolio API",
        version = "1.0",
        description = "API Documentation for Portfolio Project",
        contact = @Contact(
            name = "Your Name",
            email = "your.email@example.com"
        )
    )
)
public class OpenAPIConfig {
    
    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
            .components(new Components())
            .info(new io.swagger.v3.oas.models.info.Info()
                .title("Portfolio API")
                .version("1.0")
                .description("API Documentation for Portfolio Project")
            );
    }
} 