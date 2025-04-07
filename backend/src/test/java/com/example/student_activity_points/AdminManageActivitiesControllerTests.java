package com.example.student_activity_points;

import com.example.student_activity_points.controller.AdminManageActivitiesController;
import com.example.student_activity_points.domain.Activity;
import com.example.student_activity_points.domain.Departments;
import com.example.student_activity_points.repository.ActivityRepository;
import com.example.student_activity_points.repository.DepartmentsRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.Optional;

import static org.hamcrest.Matchers.hasSize;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(AdminManageActivitiesController.class)
public class AdminManageActivitiesControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ActivityRepository activityRepository;

    @MockBean
    private DepartmentsRepository departmentsRepository;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @Test
    void testGetActivities() throws Exception {
        Activity activity1 = new Activity();
        Activity activity2 = new Activity();
        Mockito.when(activityRepository.findAll()).thenReturn(Arrays.asList(activity1, activity2));

        mockMvc.perform(get("/api/admin/manage-activities"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void testGetDepartments() throws Exception {
        Departments d1 = new Departments();
        Departments d2 = new Departments();
        Mockito.when(departmentsRepository.findAll()).thenReturn(Arrays.asList(d1, d2));

        mockMvc.perform(get("/api/admin/get-departments"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)));
    }

    @Test
    void testAddActivity() throws Exception {
        Activity activity = new Activity();
        activity.setName("Hackathon");
        Mockito.when(activityRepository.save(any(Activity.class))).thenReturn(activity);

        mockMvc.perform(post("/api/admin/manage-activities")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(activity)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("Hackathon"));
    }

    @Test
    void testUpdateActivity() throws Exception {
        Activity existing = new Activity();
        existing.setActID(1L);
        existing.setName("Old Name");

        Activity updated = new Activity();
        updated.setName("New Name");

        Mockito.when(activityRepository.findById(1L)).thenReturn(Optional.of(existing));
        Mockito.when(activityRepository.save(any(Activity.class))).thenReturn(updated);

        mockMvc.perform(put("/api/admin/manage-activities/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updated)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name").value("New Name"));
    }

    @Test
    void testUpdateActivity_NotFound() throws Exception {
        Activity updated = new Activity();
        updated.setName("Doesn't Matter");

        Mockito.when(activityRepository.findById(100L)).thenReturn(Optional.empty());

        mockMvc.perform(put("/api/admin/manage-activities/100")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(updated)))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Activity not found"));
    }

    @Test
    void testDeleteActivity_Success() throws Exception {
        Mockito.when(activityRepository.existsById(1L)).thenReturn(true);
        mockMvc.perform(delete("/api/admin/manage-activities/1"))
                .andExpect(status().isOk())
                .andExpect(content().string("Activity deleted successfully"));
    }

    @Test
    void testDeleteActivity_NotFound() throws Exception {
        Mockito.when(activityRepository.existsById(100L)).thenReturn(false);
        mockMvc.perform(delete("/api/admin/manage-activities/100"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Activity not found"));
    }
}
