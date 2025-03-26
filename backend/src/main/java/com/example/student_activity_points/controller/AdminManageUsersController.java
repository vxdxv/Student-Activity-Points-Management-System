package com.example.student_activity_points.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.student_activity_points.domain.Fa;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.repository.FARepository;
import com.example.student_activity_points.repository.StudentRepository;

@RestController
@RequestMapping("/api/admin/manage-users")
public class AdminManageUsersController {
    
    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FARepository faRepository;

    @GetMapping("/fa")
    public ResponseEntity<?> getFA() {
        try {
            List<Fa> fas = (List<Fa>) faRepository.findAll();
            return ResponseEntity.ok(fas);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }

    @PutMapping("/fa/{id}")
    public ResponseEntity<?> updateFA(@PathVariable Integer id, @RequestBody Fa updatedFa) {
        try {
            Optional<Fa> existingFaOpt = faRepository.findById(id);
            if (existingFaOpt.isPresent()) {
                Fa existingFa = existingFaOpt.get();
                existingFa.setName(updatedFa.getName());
                existingFa.setEmailID(updatedFa.getEmailID());
                existingFa.setDID(updatedFa.getDID());

                Fa savedFa = faRepository.save(existingFa);
                return ResponseEntity.ok(savedFa);
            } else {
                return ResponseEntity.status(404).body("Fa record not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error updating Fa record: " + e.getMessage());
        }
    }

    @DeleteMapping("/fa/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable Integer id) {
        try {
            if (faRepository.existsById(id)) {
                faRepository.deleteById(id);
                return ResponseEntity.ok("Fa record deleted successfully");
            } else {
                return ResponseEntity.status(404).body("Fa record not found");
            }
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Error deleting Fa record: " + e.getMessage());
        }
    }
}