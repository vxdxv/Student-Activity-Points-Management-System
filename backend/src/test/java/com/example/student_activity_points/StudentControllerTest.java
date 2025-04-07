package com.example.student_activity_points;

import com.example.student_activity_points.controller.StudentController;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.domain.StudentActivity;
import com.example.student_activity_points.domain.Announcements;
import com.example.student_activity_points.service.StudentService;

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

@WebMvcTest(StudentController.class)
public class StudentControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentService studentService;

    @Test
    public void testGetStudentById() throws Exception {
        Student student = new Student();
        student.setSid("S123");
        student.setName("John Doe");

        Mockito.when(studentService.getStudentById("S123")).thenReturn(Optional.of(student));

        mockMvc.perform(get("/api/student/S123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.sid").value("S123"))
                .andExpect(jsonPath("$.name").value("John Doe"));
    }

    @Test
    public void testGetStudentName() throws Exception {
        Student student = new Student();
        student.setSid("S123");
        student.setName("Alice");

        Mockito.when(studentService.getStudentById("S123")).thenReturn(Optional.of(student));

        mockMvc.perform(get("/api/student/S123/name"))
                .andExpect(status().isOk())
                .andExpect(content().string("Alice"));
    }

    @Test
    public void testGetDepartmentPoints() throws Exception {
        Mockito.when(studentService.getDepartmentPoints("S123")).thenReturn(50);

        mockMvc.perform(get("/api/student/S123/department-points"))
                .andExpect(status().isOk())
                .andExpect(content().string("50"));
    }

    @Test
    public void testGetInstitutionalPoints() throws Exception {
        Mockito.when(studentService.getInstitutionalPoints("S123")).thenReturn(30);

        mockMvc.perform(get("/api/student/S123/institutional-points"))
                .andExpect(status().isOk())
                .andExpect(content().string("30"));
    }

    @Test
    public void testGetActivityPoints() throws Exception {
        Mockito.when(studentService.getActivityPoints("S123")).thenReturn(80);

        mockMvc.perform(get("/api/student/S123/activity-points"))
                .andExpect(status().isOk())
                .andExpect(content().string("80"));
    }

   @Test
    public void testGetStudentActivities() throws Exception {
        StudentActivity activity = new StudentActivity();
        activity.setTitle("Hackathon");

        Mockito.when(studentService.getStudentActivities("S123")).thenReturn(List.of(activity));

        mockMvc.perform(get("/api/student/S123/activities"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Hackathon")); // <-- changed 'name' to 'title'
    }


    @Test
    public void testGetStudentDetailsBySID() throws Exception {
        Student student = new Student();
        student.setSid("S123");
        student.setName("Emma");

        StudentActivity activity = new StudentActivity();
        activity.setTitle("Workshop");

        Mockito.when(studentService.getStudentById("S123")).thenReturn(Optional.of(student));
        Mockito.when(studentService.getStudentActivities("S123")).thenReturn(List.of(activity));

        mockMvc.perform(get("/api/fa/student-details/S123"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.student.name").value("Emma"))
                .andExpect(jsonPath("$.activities[0].title").value("Workshop")); // <-- changed 'name' to 'title'
    }

    @Test
    public void testGetAnnouncements() throws Exception {
        Announcements announcement = new Announcements();
        announcement.setTitle("Event");

        Mockito.when(studentService.getAnnouncements()).thenReturn(List.of(announcement));

        mockMvc.perform(get("/api/student/announcements"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].title").value("Event"));
    }
    @Test
    public void testGetStudentsByFAID() throws Exception {
        Student student = new Student();
        student.setSid("S123");
        student.setName("John");

        Mockito.when(studentService.getStudentsByFAID(1)).thenReturn(List.of(student));

        mockMvc.perform(get("/api/fa/student-list/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].sid").value("S123"))
                .andExpect(jsonPath("$[0].name").value("John"));
    }
    @Test
    public void testGetStudentDetailsBySID_NotFound() throws Exception {
        Mockito.when(studentService.getStudentById("S999")).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/fa/student-details/S999"))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.error").value("Student not found"));
    }
}
