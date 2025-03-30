package com.example.student_activity_points.domain;

import java.io.Serializable;
import java.util.Objects;

public class StudentActivityId implements Serializable {
<<<<<<< HEAD

    private String sid;
    private int actID;

    // Default constructor
=======
    private String sid;
    private int actID;

>>>>>>> NEW-FINAL-MAIN
    public StudentActivityId() {}

    public StudentActivityId(String sid, int actID) {
        this.sid = sid;
        this.actID = actID;
    }

    // Getters and Setters
    public String getSid() { return sid; }
    public void setSid(String sid) { this.sid = sid; }

    public int getActID() { return actID; }
    public void setActID(int actID) { this.actID = actID; }

<<<<<<< HEAD
    // Override equals and hashCode
=======
    // Override equals and hashCode for proper comparison
>>>>>>> NEW-FINAL-MAIN
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        StudentActivityId that = (StudentActivityId) o;
        return actID == that.actID && Objects.equals(sid, that.sid);
    }

    @Override
    public int hashCode() {
        return Objects.hash(sid, actID);
    }
}
