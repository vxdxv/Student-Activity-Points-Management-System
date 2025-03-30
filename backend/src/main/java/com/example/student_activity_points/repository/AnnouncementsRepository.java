package com.example.student_activity_points.repository;

import com.example.student_activity_points.domain.Announcements;
<<<<<<< HEAD
import org.springframework.data.repository.CrudRepository;

public interface AnnouncementsRepository extends CrudRepository<Announcements, Long> {
=======
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface AnnouncementsRepository extends JpaRepository<Announcements, Integer> {
    List<Announcements> findByFAID(Integer FAID);
    Announcements findByAid(Long aid);
>>>>>>> NEW-FINAL-MAIN
}
