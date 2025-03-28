package com.example.student_activity_points.domain;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Student")
public class Student {

    @Id
    @Column(name = "SID", nullable = false)
    private String sid;

    @OneToMany(mappedBy = "student", cascade = CascadeType.REMOVE, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<StudentActivity> studentActivities;

    @Column(name = "FAID", nullable = false)
    private int FAID;

    @Column(name = "emailID", nullable = false, unique = true)
    private String emailID;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "DID", nullable = false)
    private int DID;

    @Column(name = "dept_points", columnDefinition = "INT DEFAULT 0")
    private int deptPoints;

    @Column(name = "institute_points", columnDefinition = "INT DEFAULT 0")
    private int institutePoints;

    // Getters and setters
    public String getSid() {
        return sid;
    }

    public void setSid(String sid) {
        this.sid = sid;
    }

    public int getFaid() {
        return FAID;
    }

    public void setFaid(int faid) {
        this.FAID = faid;
    }

    public String getEmailID() {
        return emailID;
    }

    public void setEmailID(String emailID) {
        this.emailID = emailID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getDid() {
        return DID;
    }

    public void setDid(int did) {
        this.DID = did;
    }

    public int getDeptPoints() {
        return deptPoints;
    }

    public void setDeptPoints(int deptPoints) {
        this.deptPoints = deptPoints;
    }

    public int getInstitutePoints() {
        return institutePoints;
    }

    public void setInstitutePoints(int institutePoints) {
        this.institutePoints = institutePoints;
    }

}
