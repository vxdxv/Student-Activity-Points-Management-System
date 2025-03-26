package com.example.student_activity_points.repository;
import com.example.student_activity_points.domain.Fa;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;


public interface FARepository extends CrudRepository<Fa, Integer> {
    Optional<Fa> findByEmailID(String email);
}
