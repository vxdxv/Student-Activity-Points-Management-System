package com.example.student_activity_points.domain;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "announcements")
public class Announcements {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long aid;
    private int FAID;
    private Date date;
    private String time;
    private String title;
    private String body;

    // Getters and setters
    public Long getAid() { return aid; }
    public void setAid(Long aid) { this.aid = aid; }

    public int getFAID() { return FAID; }
    public void setFAID(int FAID) { this.FAID = FAID; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }
}
