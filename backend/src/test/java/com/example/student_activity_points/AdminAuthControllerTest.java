package com.example.student_activity_points;

import com.example.student_activity_points.controller.AdminAuthController;
import com.example.student_activity_points.domain.Admin;
import com.example.student_activity_points.repository.AdminRepository;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(AdminAuthController.class)
public class AdminAuthControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AdminRepository adminRepo;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testRegisterAdmin() throws Exception {
        Admin admin = new Admin();
        admin.setName("John");
        admin.setEmail("john@example.com");
        admin.setPassword("secret");

        when(adminRepo.save(admin)).thenReturn(admin);

        mockMvc.perform(post("/admin/register")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(admin)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.email").value("john@example.com"));
    }

    @Test
    void testLoginAdminSuccess() throws Exception {
        Admin inputAdmin = new Admin();
        inputAdmin.setEmail("john@example.com");
        inputAdmin.setPassword("secret");

        Admin storedAdmin = new Admin();
        storedAdmin.setId(1);
        storedAdmin.setName("John");
        storedAdmin.setEmail("john@example.com");
        storedAdmin.setPassword("secret");

        when(adminRepo.findByEmail("john@example.com")).thenReturn(storedAdmin);

        mockMvc.perform(post("/admin/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(inputAdmin)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John"));
    }

    @Test
    void testLoginAdminFailure() throws Exception {
        Admin inputAdmin = new Admin();
        inputAdmin.setEmail("john@example.com");
        inputAdmin.setPassword("wrongpass");

        Admin storedAdmin = new Admin();
        storedAdmin.setEmail("john@example.com");
        storedAdmin.setPassword("secret");

        when(adminRepo.findByEmail("john@example.com")).thenReturn(storedAdmin);

        mockMvc.perform(post("/admin/login")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(inputAdmin)))
                .andExpect(status().isInternalServerError());
    }

    @Test
    void testGetAdminByIdFound() throws Exception {
        Admin admin = new Admin();
        admin.setId(1);
        admin.setName("John");
        admin.setEmail("john@example.com");

        when(adminRepo.findById(1L)).thenReturn(Optional.of(admin));

        mockMvc.perform(get("/admin/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("John"));
    }

    @Test
    void testGetAdminByIdNotFound() throws Exception {
        when(adminRepo.findById(1L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/admin/1"))
                .andExpect(status().isNotFound());
    }
}
