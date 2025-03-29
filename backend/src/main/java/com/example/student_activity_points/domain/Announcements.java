package com.example.student_activity_points.domain;
import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "announcements")
public class Announcements {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;

    @Column(nullable = false)
    private Integer FAID;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private String time;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    // Getters only since students will only view the announcements
    public Long getAid() { return aid; }
    public Integer getFaid() { return FAID; }
    public Date getDate() { return date; }
    public String getTime() { return time; }
    public String getTitle() { return title; }
    public String getBody() { return body; }
}
