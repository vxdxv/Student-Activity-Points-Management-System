package com.example.student_activity_points.repository;

import  com.example.student_activity_points.domain.Activity;
import org.springframework.data.repository.CrudRepository;

public interface ActivityRepository extends CrudRepository<Activity, Long> {
}

