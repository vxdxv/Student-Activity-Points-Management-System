package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.StudentActivity;
import org.springframework.data.repository.CrudRepository;
<<<<<<< HEAD

public interface StudentActivityRepository extends CrudRepository<StudentActivity, Long> {
=======
import java.util.List;

public interface StudentActivityRepository extends CrudRepository<StudentActivity, Long> {

    List<StudentActivity> findBySid(String sid);
>>>>>>> NEW-FINAL-MAIN
}
