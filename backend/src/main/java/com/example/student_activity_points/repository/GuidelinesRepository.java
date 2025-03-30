package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.Guidelines;
import org.springframework.data.repository.CrudRepository;
<<<<<<< HEAD

public interface GuidelinesRepository extends CrudRepository<Guidelines, Integer> {
}
=======
import java.util.List;
import java.util.Optional;

public interface GuidelinesRepository extends CrudRepository<Guidelines, Integer> {
    List<Guidelines> findAll();
    Optional<Guidelines> findByGid(int gid);
}
>>>>>>> NEW-FINAL-MAIN
