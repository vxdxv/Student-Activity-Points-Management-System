package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.Departments;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface DepartmentsRepository extends JpaRepository<Departments, Integer> {
}

