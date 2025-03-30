package com.example.student_activity_points.domain;

import javax.persistence.*;


@Entity
@Table(name = "guidelines")
public class Guidelines {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gid;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String body;

    public Guidelines() {}

    public Guidelines(String body) {
        this.body = body;
    }

    public int getGid() {
        return gid;
    }

    public void setGid(int gid) {
        this.gid = gid;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
