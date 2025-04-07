package com.example.student_activity_points;

import com.example.student_activity_points.controller.RequestsController;
import com.example.student_activity_points.domain.Requested;
import com.example.student_activity_points.domain.Requests;
import com.example.student_activity_points.domain.Requests.Status;
import com.example.student_activity_points.domain.Requests.Type;
import com.example.student_activity_points.repository.RequestedRepository;
import com.example.student_activity_points.repository.RequestsRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentCaptor;
import org.mockito.Mockito;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@SpringBootTest
public class RequestsControllerTest {

    @Autowired
    private RequestsController requestsController;

    @MockBean
    private RequestsRepository requestsRepository;

    @MockBean
    private RequestedRepository requestedRepository;

    private Requests request;

    @BeforeEach
    void setUp() {
        request = new Requests();
        request.setRid(1L);
        request.setSid("student123");
        request.setLink("http://example.com");
        request.setActivityName("Hackathon");
        request.setDescription("Coding competition");
        request.setStatus(Status.Pending);
        request.setType(Type.other);
        request.setDate(new Date());
        request.setActivityDate(new Date());
        request.setDecisionDate(new Date());
    }

    @Test
    void testGetAllRequests() {
        when(requestsRepository.findAll()).thenReturn(List.of(request));

        List<Requests> allRequests = requestsController.getAllRequests();

        assertThat(allRequests).hasSize(1);
        verify(requestsRepository, times(1)).findAll();
    }

    @Test
    void testGetRequestsBySid() {
        when(requestsRepository.findBySid("student123")).thenReturn(List.of(request));

        ResponseEntity<List<Requests>> response = requestsController.getRequestsBySid("student123");

        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
        assertThat(response.getBody()).isNotNull();
        assertThat(response.getBody().get(0).getSid()).isEqualTo("student123");
    }

    @Test
    void testGetRequestById() {
        when(requestsRepository.findById(1L)).thenReturn(Optional.of(request));

        ResponseEntity<Requests> response = requestsController.getRequestById(1L);

        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
        assertThat(response.getBody().getRid()).isEqualTo(1L);
    }

    @Test
    void testCreateRequest() {
        Map<String, Object> body = new HashMap<>();
        body.put("sid", "student123");
        body.put("activityName", "Workshop");
        body.put("description", "Attended AI workshop");
        body.put("link", "http://activity.com");
        body.put("pastUrl", "http://activity.com/past");
        body.put("decisionDate", "2024-08-27T10:15:30.000Z");
        body.put("activityDate", "2024-08-26T10:15:30.000Z");
        body.put("type", "other");
        body.put("faIds", List.of(1, 2));

        Requests savedRequest = new Requests();
        savedRequest.setRid(10L);

        when(requestsRepository.save(any(Requests.class))).thenReturn(savedRequest);

        Requests response = requestsController.createRequest(body);

        assertThat(response).isNotNull();
        verify(requestsRepository, times(1)).save(any(Requests.class));
        verify(requestedRepository, times(2)).save(any(Requested.class));
    }

    @Test
    void testUpdateRequest() {
        Requests updated = new Requests();
        updated.setSid("updatedSid");
        updated.setDate(new Date());
        updated.setStatus(Status.Approved);
        updated.setLink("http://updated.com");
        updated.setDecisionDate(new Date());
        updated.setActivityName("Updated Activity");
        updated.setDescription("Updated description");
        updated.setActivityDate(new Date());
        updated.setType(Type.Department);

        when(requestsRepository.findById(1L)).thenReturn(Optional.of(request));
        when(requestsRepository.save(any(Requests.class))).thenReturn(updated);

        ResponseEntity<Requests> response = requestsController.updateRequest(1L, updated);

        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
        assertThat(response.getBody().getSid()).isEqualTo("updatedSid");
    }

    @Test
    void testDeleteRequest() {
        when(requestsRepository.existsById(1L)).thenReturn(true);
        doNothing().when(requestsRepository).deleteById(1L);

        ResponseEntity<Void> response = requestsController.deleteRequest(1L);

        assertThat(response.getStatusCode().is2xxSuccessful()).isTrue();
        verify(requestsRepository, times(1)).deleteById(1L);
    }
}
