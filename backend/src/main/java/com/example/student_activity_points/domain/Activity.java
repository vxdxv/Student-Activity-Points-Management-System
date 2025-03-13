package com.example.student_activity_points.domain;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Activity")
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long actID;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Column(name = "points")
    private int points;

    @Column(name="DID")
    private int DID;

    @Column(name="Date") 
    private Date date;
    
    @Column(name="type")
    private String type;

    @Column(name="outside_inside")
    private String outside_inside;

    @Column(name="no_of_people")
    private int no_of_people;

    @Column(name="mandatory")
    private int mandatory;

    public Long getActID() { return actID; }
    public void setActID(Long actID) { this.actID = actID; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public int getDID() { return DID; }
    public void setDID(int DID) { this.DID = DID; }

    public Date getDate() { return date; }
    public void setDate(Date date) { this.date = date; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getOutside_inside() { return outside_inside; }
    public void setOutside_inside(String outside_inside) { this.outside_inside = outside_inside; }

    public int getNo_of_people() { return no_of_people; }
    public void setNo_of_people(int no_of_people) { this.no_of_people = no_of_people; }

    public int getPoints() { return points; }
    public void setPoints(int points) { this.points = points; }


}
