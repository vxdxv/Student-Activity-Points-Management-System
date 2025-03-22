package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.Activity;
import com.example.student_activity_points.domain.Validation;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

public interface ValidationRepository extends CrudRepository<Validation, Long> {
    @Modifying
    @Transactional
@Query("DELETE FROM Validation v WHERE v.activity = :activity")
void deleteByActivity(@Param("activity") Activity activity);
}

