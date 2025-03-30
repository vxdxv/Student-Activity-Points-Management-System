package com.example.student_activity_points.domain;

import javax.persistence.*;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.Date;

@Entity
@Table(name = "Validation")
public class Validation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "VID")
    private Long vid;

    @Column(name = "SID", nullable = false)
    private String sid;

    @Column(name = "FAID", nullable = false)
    private int faid;

    // private int actID;

    @ManyToOne
    @JoinColumn(name = "actID", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Activity activity;


    @Column(name = "upload_date", nullable = false)
    private Date uploadDate;

    @Column(name = "validated", nullable = false)
    @Enumerated(EnumType.STRING)
    private Validated validated = Validated.No;

    public enum Validated { No, Yes }

    // Getters and Setters
    public Long getVid() { return vid; }
    public void setVid(Long vid) { this.vid = vid; }

    public String getSid() { return sid; }
    public void setSid(String sid) { this.sid = sid; }

    public int getFaid() { return faid; }
    public void setFaid(int faid) { this.faid = faid; }

    // public int getActID() { return actID; }
    // public void setActID(int actID) { this.actID = actID; }

    public Date getUploadDate() { return uploadDate; }
    public void setUploadDate(Date uploadDate) { this.uploadDate = uploadDate; }

    public Validated getValidated() { return validated; }
    public void setValidated(Validated validated) { this.validated = validated; }

     public Activity getActivity() { return activity; }
    public void setActivity(Activity activity) { this.activity = activity; }

    
}
