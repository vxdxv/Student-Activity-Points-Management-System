package com.example.student_activity_points;

import com.example.student_activity_points.controller.DepartmentController;
import com.example.student_activity_points.domain.Departments;
import com.example.student_activity_points.repository.DepartmentsRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.Matchers.*;

@WebMvcTest(DepartmentController.class)
public class DepartmentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private DepartmentsRepository departmentRepository;

    // ✅ Test for GET /api/departments
    @Test
    public void testGetAllDepartments() throws Exception {
        Departments dept1 = new Departments();
        dept1.setDID(1L);
        dept1.setName("Computer Science");

        Departments dept2 = new Departments();
        dept2.setDID(2L);
        dept2.setName("Electronics");

        List<Departments> departmentList = Arrays.asList(dept1, dept2);

        Mockito.when(departmentRepository.findAll()).thenReturn(departmentList);

        mockMvc.perform(get("/api/departments"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()", is(2)))
                .andExpect(jsonPath("$[0].name", is("Computer Science")))
                .andExpect(jsonPath("$[1].name", is("Electronics")));
    }

    // ✅ Test for GET /api/departments/{did} - valid id
    @Test
    public void testGetDepartmentById_Found() throws Exception {
        Departments dept = new Departments();
        dept.setDID(1L);
        dept.setName("Mechanical");

        Mockito.when(departmentRepository.findById(1L)).thenReturn(Optional.of(dept));

        mockMvc.perform(get("/api/departments/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.name", is("Mechanical")));
    }
    @Test
    public void testGetDepartmentById_NotFound() throws Exception {
        Mockito.when(departmentRepository.findById(999L)).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/departments/999"))
                .andExpect(status().isNotFound())
                .andExpect(content().string("Department not found"));
    }
}
