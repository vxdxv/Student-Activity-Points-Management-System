package com.example.student_activity_points.repository;

import java.util.List;
import com.example.student_activity_points.domain.Requests;
import org.springframework.data.repository.CrudRepository;

public interface RequestsRepository extends CrudRepository<Requests, Long> {
    List<Requests> findBySid(String sid); // Fetch requests by sid
}
