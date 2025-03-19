package com.example.student_activity_points;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class TestDBConnection {
    public static void main(String[] args) {
        try {
            // Example: Dynamically loading the database driver class
            Class.forName("com.mysql.cj.jdbc.Driver");
            // Now you can establish your connection to the database
            Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/student_activity_points", "root", "Keerthana2004");
            System.out.println("Connection successful!");
        } catch (ClassNotFoundException e) {
            System.err.println("Driver class not found: " + e.getMessage());
            e.printStackTrace();
        } catch (SQLException e) {
            System.err.println("SQL Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}
