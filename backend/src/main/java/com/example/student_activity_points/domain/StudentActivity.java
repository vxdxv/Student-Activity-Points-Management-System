package com.example.student_activity_points.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "StudentActivity")
@IdClass(StudentActivityId.class)
public class StudentActivity {

    @Id
    @Column(name = "SID", nullable = false)
    private String sid;

    @Id
    @Column(name = "actID", nullable = false)
    private int actID;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "points", columnDefinition = "INT DEFAULT 0")
    private int points;

    @Column(name = "link")
    private String link;

    // Getters and Setters
    public String getSid() { return sid; }
    public void setSid(String sid) { this.sid = sid; }

    public int getActID() { return actID; }
    public void setActID(int actID) { this.actID = actID; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
}
