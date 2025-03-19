package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.Student;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Student,String>{
    Optional<Student> findByEmailID(String emailID);
}