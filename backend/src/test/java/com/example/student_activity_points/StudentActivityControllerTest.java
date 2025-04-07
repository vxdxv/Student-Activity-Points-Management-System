package com.example.student_activity_points;

import com.example.student_activity_points.controller.StudentActivityController;
import com.example.student_activity_points.domain.StudentActivity;
import com.example.student_activity_points.service.StudentActivityService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import java.text.SimpleDateFormat;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(StudentActivityController.class)
public class StudentActivityControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentActivityService studentActivityService;

    private List<StudentActivity> mockActivities;

    @BeforeEach
    public void setup() throws Exception {
        StudentActivity activity1 = new StudentActivity();
        activity1.setSid("S001");
        activity1.setActID(101);
        activity1.setTitle("Hackathon");
        activity1.setDate(new SimpleDateFormat("yyyy-MM-dd").parse("2023-08-01"));
        activity1.setPoints(10);
        activity1.setActivityType("Competition");
        activity1.setLink("http://example.com/hackathon");

        StudentActivity activity2 = new StudentActivity();
        activity2.setSid("S001");
        activity2.setActID(102);
        activity2.setTitle("Workshop");
        activity2.setDate(new SimpleDateFormat("yyyy-MM-dd").parse("2023-08-05"));
        activity2.setPoints(5);
        activity2.setActivityType("Seminar");
        activity2.setLink("http://example.com/workshop");

        mockActivities = Arrays.asList(activity1, activity2);
    }

    @Test
    public void testGetStudentActivities() throws Exception {
        when(studentActivityService.getStudentActivities("S001")).thenReturn(mockActivities);

        mockMvc.perform(get("/student/activity/S001"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()").value(2))
                .andExpect(jsonPath("$[0].title").value("Hackathon"))
                .andExpect(jsonPath("$[1].points").value(5));
    }
}
