package com.example.student_activity_points.domain;

<<<<<<< HEAD
import javax.persistence.*;

=======
import jakarta.persistence.*;
>>>>>>> NEW-FINAL-MAIN

@Entity
@Table(name = "guidelines")
public class Guidelines {
<<<<<<< HEAD

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
=======
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gid;
    
    @Column(columnDefinition = "TEXT", nullable = false)
    private String body;
    
    // Getters and Setters
    public int getGid() { return gid; }
    public void setGid(int gid) { this.gid = gid; }
    
    public String getBody() { return body; }
    public void setBody(String body) { this.body = body; }
}
>>>>>>> NEW-FINAL-MAIN
