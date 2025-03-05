import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./layouts/AdminLayout";
import StudentLayout from "./layouts/StudentLayout";
// import FacultyLayout from "./layouts/facultylayout";

import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageActivities from "./pages/admin/ManageActivities";
import AdminGuidelines from "./pages/admin/Guidelines";

import StudentDashboard from "./pages/student/StudentDashboard";
import ActivityHistory from "./pages/student/ActivityHistory";
import Activities from "./pages/student/Activities";
import Announcements from "./pages/student/Announcements";
import Guidelines from "./pages/student/Guidelines";
import RequestForm from "./pages/student/RequestForm";
import Tracking from "./pages/student/Tracking";
import AnnouncementDetail from "./pages/student/AnnouncementDetail";

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
        <Route path="/student/*" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="activity-history" element={<ActivityHistory />} />
          <Route path="request-form" element={<RequestForm />} />
          <Route path="activities" element={<Activities />} />
          <Route path="help" element={<Guidelines/>} />
          <Route path="announcements" element={<Announcements/>} />
          <Route path="announcements/:id" element={<AnnouncementDetail />} />
        </Route>

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
