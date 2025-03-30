package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.Requests;
import org.springframework.data.repository.CrudRepository;

public interface RequestsRepository extends CrudRepository<Requests, Long> {
}
