package com.example.student_activity_points.controller;

import com.example.student_activity_points.domain.Requests;
import com.example.student_activity_points.repository.RequestsRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/requests")
public class RequestsController {

    private final RequestsRepository requestsRepository;

    public RequestsController(RequestsRepository requestsRepository) {
        this.requestsRepository = requestsRepository;
    }

    // Get all requests
    @GetMapping
    public List<Requests> getAllRequests() {
        return (List<Requests>) requestsRepository.findAll();
    }

    // Get requests by student ID
    @GetMapping("/student/{sid}")
    public ResponseEntity<List<Requests>> getRequestsBySid(@PathVariable String sid) {
        List<Requests> requests = requestsRepository.findBySid(sid);
        if (requests.isEmpty()) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(requests);
    }

    // Get a request by ID
    @GetMapping("/{id}")
    public ResponseEntity<Requests> getRequestById(@PathVariable Long id) {
        Optional<Requests> request = requestsRepository.findById(id);
        return request.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new request
    @PostMapping
    public Requests createRequest(@RequestBody Requests request) {
        return requestsRepository.save(request);
    }

    // Update an existing request
    @PutMapping("/{id}")
    public ResponseEntity<Requests> updateRequest(@PathVariable Long id, @RequestBody Requests updatedRequest) {
        return requestsRepository.findById(id).map(existingRequest -> {
            existingRequest.setSid(updatedRequest.getSid());
            existingRequest.setDate(updatedRequest.getDate());
            existingRequest.setStatus(updatedRequest.getStatus());
            existingRequest.setLink(updatedRequest.getLink());
            existingRequest.setDecisionDate(updatedRequest.getDecisionDate());
            existingRequest.setActivityName(updatedRequest.getActivityName());
            existingRequest.setDescription(updatedRequest.getDescription());
            existingRequest.setActivityDate(updatedRequest.getActivityDate());
            existingRequest.setType(updatedRequest.getType());

            Requests savedRequest = requestsRepository.save(existingRequest);
            return ResponseEntity.ok(savedRequest);
        }).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a request
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRequest(@PathVariable Long id) {
        if (requestsRepository.existsById(id)) {
            requestsRepository.deleteById(id);
            return ResponseEntity.noContent().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
