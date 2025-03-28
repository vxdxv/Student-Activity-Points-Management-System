package com.example.student_activity_points.controller;

import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.domain.StudentActivity;
import com.example.student_activity_points.domain.Announcements;
import com.example.student_activity_points.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:5173") // Adjust based on frontend URL
public class StudentController {

    @Autowired
    private StudentService studentService;

    // Get student details
    @GetMapping("/{studentID}")
    public Optional<Student> getStudent(@PathVariable String studentID) {
        return studentService.getStudentById(studentID);
    }

    // Get total department points
    @GetMapping("/{studentID}/department-points")
    public Integer getDepartmentPoints(@PathVariable String studentID) {
        return studentService.getDepartmentPoints(studentID);
    }
    @GetMapping("/{studentID}/name")
    public String getStudentName(@PathVariable String studentID) {
        return studentService.getStudentById(studentID)
                .map(Student::getName)
                .orElse("Name not found");
    }

    // Get total institutional points
    @GetMapping("/{studentID}/institutional-points")
    public Integer getInstitutionalPoints(@PathVariable String studentID) {
        return studentService.getInstitutionalPoints(studentID);
    }

    // Get total activity points
    @GetMapping("/{studentID}/activity-points")
    public Integer getActivityPoints(@PathVariable String studentID) {
        return studentService.getActivityPoints(studentID);
    }

    // Get student activity history
    @GetMapping("/{studentID}/activities")
    public List<StudentActivity> getStudentActivities(@PathVariable String studentID) {
        return studentService.getStudentActivities(studentID);
    }

    // Get announcements/notifications
    @GetMapping("/announcements")
    public List<Announcements> getAnnouncements() {
        return studentService.getAnnouncements();
    }
}
