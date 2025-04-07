package com.example.student_activity_points;

import com.example.student_activity_points.controller.FaAnnouncementsController;
import com.example.student_activity_points.domain.Announcements;
import com.example.student_activity_points.repository.AnnouncementsRepository;
import com.example.student_activity_points.repository.FARepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.text.SimpleDateFormat;
import java.util.*;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.any;

@WebMvcTest(FaAnnouncementsController.class)
public class FaAnnouncementsControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AnnouncementsRepository announcementsRepository;

    @MockBean
    private FARepository faRepository;

    private final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

    // ✅ Test GET /api/fa/{faid}/announcements
    @Test
    public void testGetAnnouncementsByFAID() throws Exception {
        Announcements announcement1 = new Announcements();
        announcement1.setAid(1L);
        announcement1.setFaid(101);
        announcement1.setTitle("Event 1");
        announcement1.setBody("Details of Event 1");
        announcement1.setDate(dateFormat.parse("2024-08-01"));
        announcement1.setTime("10:00 AM");

        Announcements announcement2 = new Announcements();
        announcement2.setAid(2L);
        announcement2.setFaid(101);
        announcement2.setTitle("Event 2");
        announcement2.setBody("Details of Event 2");
        announcement2.setDate(dateFormat.parse("2024-08-05"));
        announcement2.setTime("2:00 PM");

        List<Announcements> list = Arrays.asList(announcement1, announcement2);
        Mockito.when(announcementsRepository.findByFAID(101)).thenReturn(list);

        mockMvc.perform(get("/api/fa/101/announcements"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.size()", is(2)))
                .andExpect(jsonPath("$[0].title", is("Event 1")))
                .andExpect(jsonPath("$[1].title", is("Event 2")));
    }

    // ✅ Test GET /api/fa/{faid}/announcements/{aid} - valid case
    @Test
    public void testGetSpecificAnnouncement_Valid() throws Exception {
        Announcements announcement = new Announcements();
        announcement.setAid(1L);
        announcement.setFaid(101);
        announcement.setTitle("Meeting");
        announcement.setBody("Important meeting tomorrow");
        announcement.setDate(dateFormat.parse("2024-08-01"));
        announcement.setTime("11:00 AM");

        Mockito.when(announcementsRepository.findByAid(1L)).thenReturn(announcement);

        mockMvc.perform(get("/api/fa/101/announcements/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is("Meeting")))
                .andExpect(jsonPath("$.faid", is(101)));
    }

    // ❌ Test GET /api/fa/{faid}/announcements/{aid} - mismatched FAID or not found
    @Test
    public void testGetSpecificAnnouncement_NotFound() throws Exception {
        Announcements announcement = new Announcements();
        announcement.setAid(1L);
        announcement.setFaid(102); // mismatched FAID

        Mockito.when(announcementsRepository.findByAid(1L)).thenReturn(announcement);

        mockMvc.perform(get("/api/fa/101/announcements/1"))
                .andExpect(status().isNotFound());
    }

    // ✅ Test POST /api/fa/announcements - create new announcement
    @Test
    public void testCreateAnnouncement() throws Exception {
        Announcements newAnnouncement = new Announcements();
        newAnnouncement.setAid(10L);
        newAnnouncement.setFaid(101);
        newAnnouncement.setTitle("Hackathon");
        newAnnouncement.setBody("Join us for a 24-hour coding marathon!");
        newAnnouncement.setDate(dateFormat.parse("2024-08-15"));
        newAnnouncement.setTime("09:00 AM");

        Mockito.when(announcementsRepository.save(any(Announcements.class))).thenReturn(newAnnouncement);

        String jsonPayload = """
                {
                    "faid": 101,
                    "title": "Hackathon",
                    "body": "Join us for a 24-hour coding marathon!",
                    "date": "2024-08-15",
                    "time": "09:00 AM"
                }
                """;

        mockMvc.perform(post("/api/fa/announcements")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonPayload))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.title", is("Hackathon")))
                .andExpect(jsonPath("$.faid", is(101)));
    }
}
