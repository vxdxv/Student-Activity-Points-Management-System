package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.StudentActivity;
import org.springframework.data.repository.CrudRepository;

public interface StudentActivityRepository extends CrudRepository<StudentActivity, Long> {
}
