package com.example.student_activity_points.domain;

<<<<<<< HEAD
import javax.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
=======
import jakarta.persistence.*;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import com.fasterxml.jackson.annotation.JsonFormat;
>>>>>>> NEW-FINAL-MAIN
import java.util.Date;

@Entity
@Table(name = "StudentActivity")
<<<<<<< HEAD
@IdClass(StudentActivityId.class)
=======
@IdClass(StudentActivityId.class)  // Composite Key
>>>>>>> NEW-FINAL-MAIN
public class StudentActivity {

    @Id
    private String sid;

    @Id
    private int actID;

    @ManyToOne(fetch = FetchType.LAZY)
<<<<<<< HEAD
    @JoinColumn(name = "actID", insertable = false, updatable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Activity activity;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "SID", insertable = false, updatable = false) 
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Student student;



    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "points", columnDefinition = "INT DEFAULT 0")
    private int points;

    @Column(name = "link")
=======
    @MapsId("actID")  // Maps composite key field
    @JoinColumn(name = "actID", referencedColumnName = "actID")
    private Activity activity;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("sid")  // Maps composite key field
    @JoinColumn(name = "sid", referencedColumnName = "sid")
    private Student student;

    @Column(name = "date", nullable = false)
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date date;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "points", columnDefinition = "INT DEFAULT 0")
    private int points;

    @Column(name = "activity_type", nullable = false)
    private String activityType;

    @Column(name="link", nullable = false)
>>>>>>> NEW-FINAL-MAIN
    private String link;

    // Getters and Setters
    public String getSid() { return sid; }
    public void setSid(String sid) { this.sid = sid; }

    public int getActID() { return actID; }
    public void setActID(int actID) { this.actID = actID; }

<<<<<<< HEAD
=======
    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

>>>>>>> NEW-FINAL-MAIN
    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }

<<<<<<< HEAD
=======
    public String getActivityType() { return activityType; }
    public void setActivityType(String activityType) { this.activityType = activityType; }

>>>>>>> NEW-FINAL-MAIN
    public String getLink() { return link; }
    public void setLink(String link) { this.link = link; }
}
