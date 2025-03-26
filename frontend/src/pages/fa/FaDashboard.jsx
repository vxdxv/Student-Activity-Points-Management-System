import React, { useEffect, useState } from "react"; 
import { Link } from "react-router-dom"; 
import "./Dashboard.css";

const FaDashboard = () => {
    const [faData, setFaData] = useState([]);
    const [departments, setDepartments] = useState({});
    const [students, setStudents] = useState([]);
    const storedFaid = localStorage.getItem("FAID") || localStorage.getItem("faid");

    useEffect(() => {
        fetch("/api/fa/dashboard")
            .then(response => response.json())
            .then(data => {
                setFaData(data);
                const dids = [...new Set(data.map(fa => fa.did).filter(Boolean))];
                if (dids.length === 0) return;

                Promise.all(dids.map(did =>
                    fetch(`/api/fa/departments/${did}`)
                        .then(response => response.json())
                        .then(dep => ({ did, depName: dep.depName || dep.depname || "Unknown" }))
                        .catch(() => ({ did, depName: "Unknown" }))
                )).then(results => {
                    const depMap = results.reduce((acc, { did, depName }) => {
                        acc[did] = depName;
                        return acc;
                    }, {});
                    setDepartments(depMap);
                });

            })
            .catch(error => console.error("❌ Error fetching FA data:", error));
    }, []);

    useEffect(() => {
        if (!storedFaid) return;
        fetch(`http://localhost:8080/api/fa/student-list/${storedFaid}`)
            .then(response => response.json())
            .then(data => {
                setStudents(data.slice(-2)); // ✅ Get only the last 2 students
            })
            .catch(error => console.error("❌ Error fetching students:", error));
    }, [storedFaid]);

    return (
        <div className="dashboard-container">
            <h1 className="dashboard-title">FACULTY ADVISOR DASHBOARD</h1>

            {faData.length > 0 && (
                <div className="student-info">
                    {faData
                        .filter(fa => Number(fa.faid) === Number(storedFaid))
                        .map(fa => (
                            <div key={fa.faid}>
                                <h3>Welcome back, {fa.name}!</h3>
                                <p>Department: {departments[fa.did] || "Unknown"} | Roll-Number: {fa.faid} </p>
                            </div>
                        ))
                    }
                </div>
            )}

            <div className="points-section">
                <div className="progress-box">
                    <h2>21</h2>
                    <p>Number of Students under FAship</p>
                </div>
                <div className="progress-box">
                    <h2>5</h2>
                    <p>Number of Pending Approvals</p>
                </div>
            </div>

            <div className="activity-header">
                <h2 className="activity-title">Student List</h2>
                <Link to="/fa/student-list" className="see-all-btn">See All</Link>
            </div>

            <table className="activity-table">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student ID</th>
                        <th>Total Activity Points</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length > 0 ? (
                        students.map(student => (
                            <tr key={student.sid}>
                                <td style={{ textTransform: "uppercase" }}>{student.name}</td>
                                <td>{student.sid}</td>
                                <td>{student.institutePoints + student.deptPoints}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No recent students found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default FaDashboard;
