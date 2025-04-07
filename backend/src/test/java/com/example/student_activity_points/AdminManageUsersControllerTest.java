package com.example.student_activity_points;

import static org.mockito.Mockito.*;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.*;
import com.example.student_activity_points.controller.AdminManageUsersController;
import com.example.student_activity_points.domain.Fa;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.repository.FARepository;
import com.example.student_activity_points.repository.StudentRepository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.ResponseEntity;

@SpringBootTest
public class AdminManageUsersControllerTest {

    @Autowired
    private AdminManageUsersController controller;

    @MockBean
    private StudentRepository studentRepository;

    @MockBean
    private FARepository faRepository;

    @Test
    void testGetStudents() {
        List<Student> mockList = Arrays.asList(new Student(), new Student());
        when(studentRepository.findAll()).thenReturn(mockList);

        ResponseEntity<?> response = controller.getStudents();
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(response.getBody()).isEqualTo(mockList);
    }

    @Test
    void testAddStudent_Success() {
        Student student = new Student();
        student.setSid("123");
        student.setName("John");
        student.setEmailID("john@example.com");
        student.setFaid(1);   //problem  
        student.setDid(1); 
        student.setDeptPoints(10);
        student.setInstitutePoints(20);

        when(studentRepository.existsById("123")).thenReturn(false);
        when(studentRepository.save(any(Student.class))).thenReturn(student);

        ResponseEntity<?> response = controller.addStudent(student);
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(response.getBody()).isEqualTo(student);
    }

    @Test
    void testAddStudent_AlreadyExists() {
        Student student = new Student();
        student.setSid("123");

        when(studentRepository.existsById("123")).thenReturn(true);
        ResponseEntity<?> response = controller.addStudent(student);

        assertThat(response.getStatusCodeValue()).isEqualTo(400);
    }

    @Test
    void testUpdateStudent_Success() {
        Student existing = new Student();
        existing.setSid("123");

        Student updated = new Student();
        updated.setName("Updated Name");
        updated.setEmailID("updated@example.com");
        updated.setDid(2); 
        updated.setFaid(2); //problem
        updated.setDeptPoints(15);
        updated.setInstitutePoints(30);

        when(studentRepository.findById("123")).thenReturn(Optional.of(existing));
        when(studentRepository.save(any(Student.class))).thenReturn(updated);

        ResponseEntity<?> response = controller.updateStudent("123", updated);
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
    }

    @Test
    void testDeleteStudent_Success() {
        when(studentRepository.existsById("123")).thenReturn(true);
        doNothing().when(studentRepository).deleteById("123");

        ResponseEntity<?> response = controller.deleteStudent("123");
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
    }

    @Test
    void testGetFAs() {
        List<Fa> mockList = Arrays.asList(new Fa(), new Fa());
        when(faRepository.findAll()).thenReturn(mockList);

        ResponseEntity<?> response = controller.getFA();
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(response.getBody()).isEqualTo(mockList);
    }

    @Test
    void testAddFA_Success() {
        Fa fa = new Fa();
        fa.setName("FA Name");

        when(faRepository.save(any(Fa.class))).thenReturn(fa);

        ResponseEntity<?> response = controller.addFA(fa);
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
        assertThat(response.getBody()).isEqualTo(fa);
    }

    @Test
    void testUpdateFA_Success() {
        Fa existing = new Fa();
        existing.setFAID(1L);
        Fa updated = new Fa();
        updated.setName("Updated FA");
        updated.setEmailID("fa@example.com");
        updated.setDID(2);  //problem

        when(faRepository.findById(1L)).thenReturn(Optional.of(existing));
        when(faRepository.save(any(Fa.class))).thenReturn(updated);

        ResponseEntity<?> response = controller.updateFA(1L, updated);
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
    }

    @Test
    void testDeleteFA_Success() {
        when(faRepository.existsById(1L)).thenReturn(true);
        doNothing().when(faRepository).deleteById(1L);

        ResponseEntity<?> response = controller.deleteActivity(1L);
        assertThat(response.getStatusCodeValue()).isEqualTo(200);
    }
}
