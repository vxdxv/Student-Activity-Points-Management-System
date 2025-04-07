package com.example.student_activity_points;

import com.example.student_activity_points.controller.AnnouncementsController;
import com.example.student_activity_points.domain.Announcements;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.repository.AnnouncementsRepository;
import com.example.student_activity_points.repository.StudentRepository;

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

@WebMvcTest(AnnouncementsController.class)
public class AnnouncementsControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private StudentRepository studentRepository;

    @MockBean
    private AnnouncementsRepository announcementsRepository;

    @Test
    public void testGetAllAnnouncementsByStudentId_Found() throws Exception {
        String sid = "S123";
        int faid = 101;

        Student student = new Student();
        student.setSid(sid);
        student.setFaid(faid);

        Announcements a1 = new Announcements();
        a1.setAid(1L);
        a1.setFaid(faid);
        a1.setTitle("Meeting Notice");
        a1.setBody("FA Meeting scheduled at 10 AM.");
        a1.setTime("10:00 AM");
        a1.setDate(new Date());

        Announcements a2 = new Announcements();
        a2.setAid(2L);
        a2.setFaid(faid);
        a2.setTitle("Workshop");
        a2.setBody("Cybersecurity Workshop at 2 PM.");
        a2.setTime("2:00 PM");
        a2.setDate(new Date());

        Mockito.when(studentRepository.findById(sid)).thenReturn(Optional.of(student));
        Mockito.when(announcementsRepository.findByFAID(faid)).thenReturn(Arrays.asList(a1, a2));

        mockMvc.perform(get("/api/student/" + sid + "/announcements"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()", is(2)))
                .andExpect(jsonPath("$[0].title", is("Meeting Notice")))
                .andExpect(jsonPath("$[1].title", is("Workshop")));
    }

    @Test
    public void testGetAllAnnouncementsByStudentId_NotFound() throws Exception {
        Mockito.when(studentRepository.findById("invalidId")).thenReturn(Optional.empty());

        mockMvc.perform(get("/api/student/invalidId/announcements"))
                .andExpect(status().isNotFound());
    }

    @Test
    public void testGetSpecificAnnouncement_Valid() throws Exception {
        String sid = "S123";
        int faid = 101;
        Long aid = 1L;

        Student student = new Student();
        student.setSid(sid);
        student.setFaid(faid);

        Announcements announcement = new Announcements();
        announcement.setAid(aid);
        announcement.setFaid(faid);
        announcement.setTitle("Exam Notice");
        announcement.setBody("Mid-sem Exam on Monday");
        announcement.setTime("09:00 AM");
        announcement.setDate(new Date());

        Mockito.when(studentRepository.findById(sid)).thenReturn(Optional.of(student));
        Mockito.when(announcementsRepository.findByAid(aid)).thenReturn(announcement);

        mockMvc.perform(get("/api/student/" + sid + "/announcements/" + aid))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is("Exam Notice")));
    }

    @Test
    public void testGetSpecificAnnouncement_NotFoundForStudent() throws Exception {
        String sid = "S123";
        int studentFaid = 101;
        int otherFaid = 102;
        Long aid = 1L;

        Student student = new Student();
        student.setSid(sid);
        student.setFaid(studentFaid);

        Announcements announcement = new Announcements();
        announcement.setAid(aid);
        announcement.setFaid(otherFaid);  // FAID mismatch

        Mockito.when(studentRepository.findById(sid)).thenReturn(Optional.of(student));
        Mockito.when(announcementsRepository.findByAid(aid)).thenReturn(announcement);

        mockMvc.perform(get("/api/student/" + sid + "/announcements/" + aid))
                .andExpect(status().isNotFound());
    }
}
