package com.example.student_activity_points.domain;

import javax.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "StudentActivity")
@IdClass(StudentActivityId.class) // Composite Key
public class StudentActivity {

    @Id
    private String sid;  // Student ID

    @Id
    private int actID;  // Activity ID

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "actID", insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Activity activity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SID", insertable = false, updatable = false) 
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Student student;

    @Column(name = "date", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "points", columnDefinition = "INT DEFAULT 0")
    private int points;

    @Column(name = "activity_type", nullable = false)
    private String activityType; // Replacing "link" with "activity type"

    @Column(name="link", nullable = false)
    private String link;

    // Getters and Setters
    public String getSid() { return sid; }
    public void setSid(String sid) { this.sid = sid; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public int getActID() { return actID; }
    public void setActID(int actID) { this.actID = actID; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }

    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }

    public String getActivityType() { return activityType; }
    public void setActivityType(String activityType) { this.activityType = activityType; }
}
