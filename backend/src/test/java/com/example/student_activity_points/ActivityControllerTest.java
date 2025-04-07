package com.example.student_activity_points;

import com.example.student_activity_points.controller.ActivityController;
import com.example.student_activity_points.domain.Activity;
import com.example.student_activity_points.repository.ActivityRepository;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestInstance;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Collections;
import java.util.Date;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(ActivityController.class)
@TestInstance(TestInstance.Lifecycle.PER_CLASS)
public class ActivityControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ActivityRepository activityRepository;

    @Test
    public void testGetAllActivities() throws Exception {
        Activity sampleActivity = new Activity();
        sampleActivity.setActID(1L);
        sampleActivity.setName("Workshop");
        sampleActivity.setDescription("Tech Workshop");
        sampleActivity.setPoints(10);
        sampleActivity.setDID(2);
        sampleActivity.setDate(new Date());
        sampleActivity.setEnd_date(new Date());
        sampleActivity.setType("Technical");
        sampleActivity.setOutside_inside("Inside");
        sampleActivity.setNo_of_people(30);
        sampleActivity.setMandatory(0);

        when(activityRepository.findAll()).thenReturn(Collections.singletonList(sampleActivity));

        mockMvc.perform(get("/api/activities")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("Workshop"))
                .andExpect(jsonPath("$[0].description").value("Tech Workshop"))
                .andExpect(jsonPath("$[0].points").value(10));
    }
}
