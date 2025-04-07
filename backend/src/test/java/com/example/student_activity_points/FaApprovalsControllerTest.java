package com.example.student_activity_points;

import com.example.student_activity_points.controller.FaApprovalsController;
import com.example.student_activity_points.domain.*;
import com.example.student_activity_points.domain.Requests.Status;
import com.example.student_activity_points.domain.Validation.Validated;
import com.example.student_activity_points.repository.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;
import java.util.*;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class FaApprovalsControllerTest {

    @MockBean
    private StudentActivityRepository studentActivityRepository;

    @MockBean
    private FARepository faRepository;

    @MockBean
    private StudentRepository studentRepository;

    @MockBean
    private RequestsRepository requestRepository;

    @MockBean
    private RequestedRepository requestedRepository;

    @MockBean
    private ValidationRepository validationRepository;

    @MockBean
    private ActivityRepository activityRepository;

    @Autowired
    private FaApprovalsController faApprovalsController;

    private Fa fa;
    private Requests request;
    private Student student;
    private Activity activity;

    @BeforeEach
    void setup() {
        fa = new Fa();
        fa.setFAID(1L);
        fa.setEmailID("fa@example.com");

        student = new Student();
        student.setSid("S123");
        student.setFaid(1);
        student.setDeptPoints(0);
        student.setInstitutePoints(0);

        activity = new Activity();
        activity.setActID(10L);
        activity.setName("Hackathon");
        activity.setPoints(20);
        activity.setType("Institute");

        request = new Requests();
        request.setRid(100L);
        request.setSid("S123");
        request.setStatus(Status.Pending);
        request.setActivityName("Hackathon");
        request.setActivityDate(new Date());
        request.setLink("http://activity.com");
    }

    @Test
    public void testGetFaDetails_FA_NotFound() {
        when(faRepository.findByEmailID("unknown@example.com")).thenReturn(Optional.empty());

        ResponseEntity<?> response = faApprovalsController.getFaDetails("unknown@example.com");
        assertEquals(404, response.getStatusCodeValue());
        assertEquals("FA not found", response.getBody());
    }

    @Test
    public void testApproveRequest_ForStudentFA() {
        when(faRepository.findByEmailID("fa@example.com")).thenReturn(Optional.of(fa));
        when(requestRepository.findById(100L)).thenReturn(Optional.of(request));
        when(studentRepository.findById("S123")).thenReturn(Optional.of(student));
        when(activityRepository.findByName("Hackathon")).thenReturn(Optional.of(activity));

        ResponseEntity<?> response = faApprovalsController.approveRequest(100L, "fa@example.com", 20);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Successfully approved", response.getBody());
        assertEquals(Status.Approved, request.getStatus());
    }

    @Test
    public void testApproveRequest_FA_NotFound() {
        when(faRepository.findByEmailID("invalid@example.com")).thenReturn(Optional.empty());

        ResponseEntity<?> response = faApprovalsController.approveRequest(100L, "invalid@example.com", 20);
        assertEquals(404, response.getStatusCodeValue());
        assertEquals("FA not found", response.getBody());
    }

    @Test
    public void testValidateRequest_ActivityNotFound() {
        when(requestRepository.findById(100L)).thenReturn(Optional.of(request));
        when(activityRepository.findByName("Hackathon")).thenReturn(Optional.empty());

        ResponseEntity<?> response = faApprovalsController.validateRequest(100L);
        assertEquals(404, response.getStatusCodeValue());
        assertEquals("Activity not found", response.getBody());
    }

    @Test
    public void testValidateRequest_AlreadyExists() {
        Validation validation = new Validation();
        validation.setValidated(Validated.No);
        validation.setSid("S123");
        validation.setActivity(activity);

        when(requestRepository.findById(100L)).thenReturn(Optional.of(request));
        when(activityRepository.findByName("Hackathon")).thenReturn(Optional.of(activity));
        when(validationRepository.findByActID(activity.getActID())).thenReturn(List.of(validation));
        when(validationRepository.findByActIDAndSID(activity.getActID(), "S123")).thenReturn(validation);

        ResponseEntity<?> response = faApprovalsController.validateRequest(100L);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Successfully validated", response.getBody());
    }

    @Test
    public void testRejectRequest() {
        when(requestRepository.findById(100L)).thenReturn(Optional.of(request));

        ResponseEntity<?> response = faApprovalsController.RejectRequest(100L);
        assertEquals(200, response.getStatusCodeValue());
        assertEquals("Successfully rejected", response.getBody());
        assertEquals(Status.Rejected, request.getStatus());
    }
}
