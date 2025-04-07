package com.example.student_activity_points;
import com.example.student_activity_points.controller.ValidationController;
import com.example.student_activity_points.domain.Activity;
import com.example.student_activity_points.domain.Validation;
import com.example.student_activity_points.repository.ActivityRepository;
import com.example.student_activity_points.repository.ValidationRepository;

import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.mock.web.MockMultipartFile;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;
import java.util.List;

import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.multipart;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(controllers = ValidationController.class)
class ValidationControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private ValidationRepository validationRepository;

    @MockBean
    private ActivityRepository activityRepository;

    @Test
    void testUploadFile_success() throws Exception {
        // Arrange
        String csvContent = "SID\n123\n456\n";
        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "attendance.csv",
                "text/csv",
                csvContent.getBytes()
        );

        Activity mockActivity = new Activity(); // You may want to set id/name if needed
        when(activityRepository.findById(1L)).thenReturn(Optional.of(mockActivity));

        // Act + Assert
        mockMvc.perform(multipart("/api/admin/upload-attendance/1").file(mockFile))
                .andExpect(status().isOk())
                .andExpect(content().string("File uploaded successfully! Attendance list updated."));

        verify(validationRepository).deleteByActivity(mockActivity);

        // Capture saved data
        ArgumentCaptor<List<Validation>> captor = ArgumentCaptor.forClass(List.class);
        verify(validationRepository).saveAll(captor.capture());

        List<Validation> savedValidations = captor.getValue();
        assert savedValidations.size() == 2;
        assert savedValidations.get(0).getSid().equals("123");
        assert savedValidations.get(1).getSid().equals("456");
    }

    @Test
    void testUploadFile_invalidActivity() throws Exception {
        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "attendance.csv",
                "text/csv",
                "SID\n999\n".getBytes()
        );

        when(activityRepository.findById(999L)).thenReturn(Optional.empty());

        mockMvc.perform(multipart("/api/admin/upload-attendance/999").file(mockFile))
                .andExpect(status().isOk())
                .andExpect(content().string("Invalid Activity ID!"));
    }

    @Test
    void testUploadFile_emptyFile() throws Exception {
        MockMultipartFile mockFile = new MockMultipartFile(
                "file",
                "empty.csv",
                "text/csv",
                "".getBytes()
        );

        mockMvc.perform(multipart("/api/admin/upload-attendance/1").file(mockFile))
                .andExpect(status().isOk())
                .andExpect(content().string("Please upload a valid CSV file!"));
    }
}
