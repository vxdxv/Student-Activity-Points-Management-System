import { useState } from "react";
import { Search, User } from "lucide-react";
import "./listofstudents .css";

const students = [
  { name: "Rock", rollNo: "B22xxxxxx", points: 25 },
  { name: "Selma", rollNo: "B22xxxxxx", points: 16 },
  { name: "Sandra", rollNo: "B22xxxxxx", points: 28 },
  { name: "tharun", rollNo: "B221097cs", points: 25 },
  { name: "raju", rollNo: "B22xxxxxx", points: 16 },
  { name: "ricky", rollNo: "B22xxxxxx", points: 28 },
  { name: "lucky", rollNo: "B22xxxxxx", points: 25 },
  { name: "teja", rollNo: "B22xxxxxx", points: 16 },
  { name: "siddu", rollNo: "B22xxxxxx", points: 28 },
  { name: "lokesh", rollNo: "B22xxxxxx", points: 25 },
  { name: "Sriram", rollNo: "B22xxxxxx", points: 16 },
  { name: "harsha", rollNo: "B22xxxxxx", points: 28 },
];

export default function StudentList() {
  const [search, setSearch] = useState("");


  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase()) ||
    student.rollNo.toLowerCase().includes(search.toLowerCase()) ||
    student.points.toString().includes(search)
  );




  return (
    <div style={{ padding: "1.5rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: "600" }}>List of Students</h2>
        <div style={{ position: "relative" }}>
          <Search style={{ position: "absolute", left: "12px", top: "10px", color: "gray" }} size={20} />
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "8px 12px", paddingLeft: "2.5rem", borderRadius: "8px", border: "1px solid #ccc", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)", outline: "none" }}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={{ backgroundColor: "#e9d5ff", padding: "1.5rem", borderRadius: "12px" }}>
        <table style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th style={{ paddingBottom: "8px" }}>STUDENTS NAME</th>
              <th style={{ paddingBottom: "8px" }}>ROLL NO.</th>
              <th style={{ paddingBottom: "8px" }}>POINTS</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index} style={{ borderTop: "1px solid #ccc" }}>
                <td style={{ display: "flex", alignItems: "center", gap: "8px", padding: "8px 0" }}>
                  <User style={{ color: "gray" }} size={20} /> {student.name}
                </td>
                <td style={{ padding: "8px 0" }}>{student.rollNo}</td>
                <td style={{ padding: "8px 0" }}>{student.points}</td>
                <td style={{ padding: "8px 0" }}>
                  <button style={{ backgroundColor: "#9333ea", color: "white", padding: "4px 16px", borderRadius: "8px", boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)", transition: "background-color 0.3s", cursor: "pointer" }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = "#7e22ce")}
                    onMouseOut={(e) => (e.target.style.backgroundColor = "#9333ea")}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
