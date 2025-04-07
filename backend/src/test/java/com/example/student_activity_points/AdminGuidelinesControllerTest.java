package com.example.student_activity_points;

import com.example.student_activity_points.controller.AdminGuidelinesController;
import com.example.student_activity_points.domain.Guidelines;
import com.example.student_activity_points.repository.GuidelinesRepository;
import org.junit.jupiter.api.*;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.hamcrest.Matchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;

@TestInstance(TestInstance.Lifecycle.PER_CLASS)  // 👈 Add this
@WebMvcTest(AdminGuidelinesController.class)
public class AdminGuidelinesControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private GuidelinesRepository guidelinesRepository;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    public void testGetGuidelines() throws Exception {
        Guidelines g1 = new Guidelines();
        g1.setGid(1);
        g1.setBody("Guideline 1");

        Guidelines g2 = new Guidelines();
        g2.setGid(2);
        g2.setBody("Guideline 2");

        Mockito.when(guidelinesRepository.findAll()).thenReturn(Arrays.asList(g1, g2));

        mockMvc.perform(get("/api/admin/guidelines"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].body", is("Guideline 1")))
                .andExpect(jsonPath("$[1].body", is("Guideline 2")));
    }

    @Test
    public void testCreateGuideline() throws Exception {
        Guidelines newGuideline = new Guidelines();
        newGuideline.setGid(0);
        newGuideline.setBody("New Guideline");

        Guidelines savedGuideline = new Guidelines();
        savedGuideline.setGid(1);
        savedGuideline.setBody("New Guideline");

        Mockito.when(guidelinesRepository.save(Mockito.any(Guidelines.class)))
                .thenReturn(savedGuideline);

        mockMvc.perform(post("/api/admin/guidelines")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(newGuideline)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.body", is("New Guideline")));
    }

    @Test
    public void testUpdateGuideline() throws Exception {
        Guidelines existing = new Guidelines();
        existing.setGid(1);
        existing.setBody("Old Guideline");

        Guidelines updated = new Guidelines();
        updated.setGid(1);
        updated.setBody("Updated Guideline");

        Mockito.when(guidelinesRepository.findById(1)).thenReturn(Optional.of(existing));
        Mockito.when(guidelinesRepository.save(Mockito.any(Guidelines.class)))
                .thenReturn(updated);

        mockMvc.perform(put("/api/admin/guidelines/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updated)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.body", is("Updated Guideline")));
    }

    @Test
    public void testDeleteGuideline() throws Exception {
        Mockito.when(guidelinesRepository.existsById(1)).thenReturn(true);

        mockMvc.perform(delete("/api/admin/guidelines/1"))
                .andExpect(status().isNoContent());
    }

    @Test
    public void testDeleteGuideline_NotFound() throws Exception {
        Mockito.when(guidelinesRepository.existsById(99)).thenReturn(false);

        mockMvc.perform(delete("/api/admin/guidelines/99"))
                .andExpect(status().isNotFound());
    }
}
