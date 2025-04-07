package com.example.student_activity_points;

import com.example.student_activity_points.controller.FaController;
import com.example.student_activity_points.domain.Departments;
import com.example.student_activity_points.domain.Fa;
import com.example.student_activity_points.service.DepartmentService;
import com.example.student_activity_points.service.FaService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.Matchers.*;

@WebMvcTest(FaController.class)
class FaControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private FaService faService;

    @MockBean
    private DepartmentService departmentService;

    private Fa sampleFa;
    private Departments sampleDept;

    @BeforeEach
    void setUp() {
        sampleFa = new Fa();
        sampleFa.setFAID(1L);
        sampleFa.setName("Dr. Test");

        sampleDept = new Departments();
        sampleDept.setDID(10L);
        sampleDept.setName("Computer Science");
    }

    @Test
    void testGetFaById() throws Exception {
        Mockito.when(faService.getFaById(1L)).thenReturn(Optional.of(sampleFa));

        mockMvc.perform(get("/api/fa/1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.faid").value(1))
                .andExpect(jsonPath("$.name").value("Dr. Test"));
    }

    @Test
    void testGetAllFacultyAdvisors() throws Exception {
        List<Fa> faList = Arrays.asList(sampleFa);
        Mockito.when(faService.getAllFacultyAdvisors()).thenReturn(faList);

        mockMvc.perform(get("/api/fa/dashboard")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].faid").value(1));
    }

   @Test
void testGetDepartmentById() throws Exception {
    Mockito.when(departmentService.getDepartmentById(10L)).thenReturn(Optional.of(sampleDept));

    mockMvc.perform(get("/api/fa/departments/10")
                    .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.did").value(10))
            .andExpect(jsonPath("$.name").value("Computer Science")); // ✅ FIXED
    }
}
