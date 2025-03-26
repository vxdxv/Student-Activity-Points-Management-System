package com.example.student_activity_points.domain;

import jakarta.persistence.*;

import java.util.Date;


@Entity
@Table(name = "Departments")
public class Departments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer DID;

     @Column(name = "name")
    private String depName;  
    
    public Integer getDID() { return DID; }
    public void setDID(Integer DID) { this.DID = DID; }

    public String getDepName() { return depName; }
     public void setDepName(String depName) { 
        this.depName = depName;
    }
}