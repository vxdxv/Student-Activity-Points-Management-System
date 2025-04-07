package com.example.student_activity_points;

import com.example.student_activity_points.controller.GuidelinesController;
import com.example.student_activity_points.domain.Guidelines;
import com.example.student_activity_points.service.GuidelinesService;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@SpringBootTest
class GuidelinesControllerTest {

    @Autowired
    private GuidelinesController guidelinesController;

    @MockBean
    private GuidelinesService guidelinesService;

    private Guidelines sampleGuideline;

    @BeforeEach
    void setUp() {
        sampleGuideline = new Guidelines();
        sampleGuideline.setGid(1);
        sampleGuideline.setBody("Sample guideline body");
    }

    @Test
    void testGetAllGuidelines() {
        List<Guidelines> mockList = Arrays.asList(sampleGuideline);
        when(guidelinesService.getAllGuidelines()).thenReturn(mockList);

        List<Guidelines> result = guidelinesController.getAllGuidelines();

        assertEquals(1, result.size());
        assertEquals("Sample guideline body", result.get(0).getBody());

        verify(guidelinesService, times(1)).getAllGuidelines();
    }

    @Test
    void testGetGuidelineByGid_Found() {
        when(guidelinesService.getGuidelineByGid(1)).thenReturn(Optional.of(sampleGuideline));

        ResponseEntity<Guidelines> response = guidelinesController.getGuidelineByGid(1);

        assertEquals(200, response.getStatusCodeValue());
        assertEquals(sampleGuideline, response.getBody());

        verify(guidelinesService, times(1)).getGuidelineByGid(1);
    }

    @Test
    void testGetGuidelineByGid_NotFound() {
        when(guidelinesService.getGuidelineByGid(2)).thenReturn(Optional.empty());

        ResponseEntity<Guidelines> response = guidelinesController.getGuidelineByGid(2);

        assertEquals(404, response.getStatusCodeValue());
        assertNull(response.getBody());

        verify(guidelinesService, times(1)).getGuidelineByGid(2);
    }
}
