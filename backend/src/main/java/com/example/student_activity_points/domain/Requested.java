package com.example.student_activity_points.domain;

<<<<<<< HEAD
import javax.persistence.*;
=======
import jakarta.persistence.*;

>>>>>>> NEW-FINAL-MAIN
import java.util.Date;

@Entity
@Table(name = "Requested")
public class Requested {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "rid")
    private Long rid;

    @Column(name = "FAID", nullable = false)
    private int FAID;

<<<<<<< HEAD
=======
    @Column(name = "Approved", nullable = false)
    private Boolean approved;

>>>>>>> NEW-FINAL-MAIN
    // Getters and Setters
    public Long getRid() { return rid; }
    public void setRid( Long rid) { this.rid = rid; }

    public int getFaid() { return FAID; }
    public void setFaid(int faid) { this.FAID = faid; }
<<<<<<< HEAD
=======

    public Boolean getApproved() { return approved; }
    public void setApproved(Boolean approved) { this.approved= approved; }


>>>>>>> NEW-FINAL-MAIN
}
