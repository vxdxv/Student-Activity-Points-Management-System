package com.example.student_activity_points.domain;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonCreator;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Requests")
public class Requests {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rid")
    private Long rid;

    @Column(name = "sid", nullable = false)
    private String sid;

    @Column(name = "date", nullable = false)
    private Date date;

    @Column(name = "status", nullable = false)
    @Enumerated(EnumType.STRING)
    private Status status = Status.Pending;

    @Column(name = "link")
    private String link;

    @Column(name = "decison_date") // note: column name "decison_date" as per your existing schema
    private Date decisionDate;

    @Column(name = "activity_name")
    private String activityName;

    @Column(name = "description", columnDefinition = "TEXT")
    private String description;

    @Column(name = "activity_date")
    private Date activityDate;

    @Column(name = "type", nullable = false)
    @Enumerated(EnumType.STRING)
    private Type type;

    // New field to store dynamic FA IDs
    @ElementCollection
    @CollectionTable(name = "request_fa", joinColumns = @JoinColumn(name = "request_id"))
    @Column(name = "fa_id")
    private List<Integer> sellectFA;

    public enum Status {
        Pending, Approved, Rejected
    }

    // filepath:
    // /Users/panguluritharunchowdary/Downloads/Student-Activity-Points-Management-System/backend/src/main/java/com/example/student_activity_points/domain/Requests.java
    public enum Type {
        Institute, Department, Other;

        @JsonCreator
        public static Type fromString(String key) {
            if (key == null) {
                return null;
            }
            return Type.valueOf(key);
        }
    }

    // Getters and Setters

    public Long getRid() {
        return rid;
    }

    public void setRid(Long rid) {
        this.rid = rid;
    }

    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getDecisionDate() {
        return decisionDate;
    }

    public void setDecisionDate(Date decisionDate) {
        this.decisionDate = decisionDate;
    }

    public String getActivityName() {
        return activityName;
    }

    public void setActivityName(String activityName) {
        this.activityName = activityName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getActivityDate() {
        return activityDate;
    }

    public void setActivityDate(Date activityDate) {
        this.activityDate = activityDate;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public List<Integer> getSellectFA() {
        return sellectFA;
    }

    public void setSellectFA(List<Integer> sellectFA) {
        this.sellectFA = sellectFA;
    }
}