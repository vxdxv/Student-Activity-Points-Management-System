package com.example.student_activity_points.controller;

import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;

import java.util.Map;
import java.util.Optional;

import com.example.student_activity_points.domain.Fa;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.repository.FARepository;
import com.example.student_activity_points.repository.StudentRepository;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private StudentRepository studentRepository;

    @Autowired
    private FARepository faRepository;

    @PostMapping("/login-student")
public ResponseEntity<?> loginstudent(@RequestBody Map<String, String> request) {
    String email = request.get("email");
    System.out.println("Email: " + email);

    Optional<Student> student = studentRepository.findByEmailID(email);
    Student studentDetails = student.orElse(null);

    if (studentDetails != null) {
        return ResponseEntity.ok(studentDetails); // Send student details
    } else {
        return ResponseEntity.status(401).body("Invalid email");
    }
}

    @PostMapping("/login-fa")
    public ResponseEntity<String> loginfa(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        System.out.println("Email: " + email);
        // Fetch student by email
        Optional<Fa> fa = faRepository.findByEmailID(email);

        if (fa.isPresent() ) {
            return ResponseEntity.ok("Login successful!");
        } else {
            return ResponseEntity.status(401).body("Invalid email");
        }
    }
}
