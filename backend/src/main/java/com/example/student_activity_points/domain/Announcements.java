package com.example.student_activity_points.domain;
<<<<<<< HEAD

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "announcements")
public class Announcements {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;
    private Integer FAID;
    private Date date;
    private String time;
    private String title;
    private String body;

    // Getters and setters
    public Long getAid() { return aid; }
    public void setAid(Long aid) { this.aid = aid; }

    public Integer getFAID() { return FAID; }
    public void setFAID(int FAID) { this.FAID = FAID; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }
=======
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
>>>>>>> NEW-FINAL-MAIN
}
