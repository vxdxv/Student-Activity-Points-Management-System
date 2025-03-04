import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
// import StudentLayout from "./layouts/studentlayout";
// import FacultyLayout from "./layouts/facultylayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageActivities from "./pages/admin/ManageActivities";
import AdminGuidelines from "./pages/admin/Guidelines";

// import StudentDashboard from "./pages/student/Dashboard";
// import MyProjects from "./pages/student/MyProjects";
// import ApplyProjects from "./pages/student/ApplyProjects";
// import StudentGuidelines from "./pages/student/Guidelines";

// import FacultyDashboard from "./pages/faculty/Dashboard";
// import ManageProjects from "./pages/faculty/ManageProjects";
// import ApproveRequests from "./pages/faculty/ApproveRequests";

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<ManageUsers />} />
          <Route path="activities" element={<ManageActivities />} />
          <Route path="guidelines" element={<AdminGuidelines />} />
        </Route>

        {/* Student Routes */}
        {/* <Route path="/student/*" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="my-projects" element={<MyProjects />} />
          <Route path="apply" element={<ApplyProjects />} />
          <Route path="guidelines" element={<StudentGuidelines />} />
        </Route> */}

        {/* Faculty Routes */}
        {/*<Route path="/faculty/*" element={<FacultyLayout />}>
          <Route path="dashboard" element={<FacultyDashboard />} />
          <Route path="manage-projects" element={<ManageProjects />} />
          <Route path="approve" element={<ApproveRequests />} />
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
