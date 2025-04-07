package com.example.student_activity_points;
import com.example.student_activity_points.controller.AuthController;
import com.example.student_activity_points.domain.Fa;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.repository.FARepository;
import com.example.student_activity_points.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;
import java.util.Map;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(AuthController.class)
class AuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentRepository studentRepository;

    @MockBean
    private FARepository faRepository;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void testLoginStudent_ValidEmail_ReturnsStudentDetails() throws Exception {
        Student student = new Student();
        student.setSid("S123");
        student.setName("John Doe");
        student.setEmailID("john@example.com");

        when(studentRepository.findByEmailID("john@example.com")).thenReturn(Optional.of(student));

        Map<String, String> request = Map.of("email", "john@example.com");

        mockMvc.perform(post("/api/auth/login-student")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.sid").value("S123"))
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.email").value("john@example.com"))
                .andExpect(jsonPath("$.role").value("student"));
    }

    @Test
    void testLoginStudent_InvalidEmail_ReturnsUnauthorized() throws Exception {
        when(studentRepository.findByEmailID("invalid@example.com")).thenReturn(Optional.empty());

        Map<String, String> request = Map.of("email", "invalid@example.com");

        mockMvc.perform(post("/api/auth/login-student")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isUnauthorized())
                .andExpect(content().string("Invalid email"));
    }

    @Test
    void testLoginFA_ValidEmail_ReturnsFADetails() throws Exception {
        Fa fa = new Fa();
        fa.setFAID(Long.parseLong("456"));
        fa.setName("Jane Smith");
        fa.setEmailID("jane@example.com");

        when(faRepository.findByEmailID("jane@example.com")).thenReturn(Optional.of(fa));

        Map<String, String> request = Map.of("email", "jane@example.com");

        mockMvc.perform(post("/api/auth/login-fa")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.faid").value(456))
                .andExpect(jsonPath("$.name").value("Jane Smith"))
                .andExpect(jsonPath("$.email").value("jane@example.com"))
                .andExpect(jsonPath("$.role").value("fa"));
    }

    @Test
    void testLoginFA_InvalidEmail_ReturnsUnauthorized() throws Exception {
        when(faRepository.findByEmailID("invalidfa@example.com")).thenReturn(Optional.empty());

        Map<String, String> request = Map.of("email", "invalidfa@example.com");

        mockMvc.perform(post("/api/auth/login-fa")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(request)))
                .andExpect(status().isUnauthorized())
                .andExpect(content().string("Invalid email"));
    }
}
