import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"; // Assuming your AuthContext is here

// Your existing imports
import AdminLayout from "./layouts/AdminLayout";
import StudentLayout from "./layouts/StudentLayout";

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
import LoginPage from "./pages/login/Login";

<<<<<<< HEAD
const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        console.log('Loading user data...');
        return <div>Loading...</div>;
    }

    if (!user) {
        console.warn("No user found, redirecting to login");
        return <Navigate to="/login" replace />;
    }

    console.log("User in ProtectedRoute:", user);
    return children;
};
=======
import Index from "./pages/login/Login"

import StudentList from "./pages/fa/fadashboard/listofstudents";

import TailwindTest from "./pages/admin/TailwindTest";

import AnnouncementPage from "./pages/fa/fadashboard/AnnouncementPage";

import Faannouncements from "./pages/fa/fadashboard/Faannouncements";

import StudentDetails from "./pages/fa/fadashboard/StudentDetails";


// import FacultyDashboard from "./pages/faculty/Dashboard";
// import ManageProjects from "./pages/faculty/ManageProjects";
import ApprovalsTable from "./pages/fa/fadashboard/approvals";
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b

function App() {
    return (
        // <Router>
            <Routes>
                {/* Admin Routes */}
                <Route
                    path="/admin/*"
                    element={
                        <ProtectedRoute>
                            <AdminLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<AdminDashboard />} />
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="users" element={<ManageUsers />} />
                    <Route path="activities" element={<ManageActivities />} />
                    <Route path="guidelines" element={<AdminGuidelines />} />
                </Route>

<<<<<<< HEAD
                {/* Student Routes */}
                <Route
                    path="/student/*"
                    element={
                        <ProtectedRoute>
                            <StudentLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<StudentDashboard />} />
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="tracking" element={<Tracking />} />
                    <Route path="activity-history" element={<ActivityHistory />} />
                    <Route path="request-form" element={<RequestForm />} />
                    <Route path="activities" element={<Activities />} />
                    <Route path="help" element={<Guidelines />} />
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="announcements/:id" element={<AnnouncementDetail />} />
                </Route>

                {/* Login Route */}
                <Route path="/login" element={<LoginPage />} />

                {/* Redirect unknown routes to login */}
                <Route path="*" element={<LoginPage />} />
            </Routes>
        // </Router>
    );
=======
        {/* Student Routes */}
        <Route path="/student/*" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="tracking" element={<Tracking />} />
          <Route path="activity-history" element={<ActivityHistory />} />
          <Route path="request-form" element={<RequestForm />} />
          <Route path="activities" element={<Activities />} />
          <Route path="guidelines" element={<Guidelines/>} />
          <Route path="announcements" element={<Announcements/>} />
          <Route path="announcements/:id" element={<AnnouncementDetail />} />
        </Route>
          <Route path="/list"  element={<StudentList/>}/>
          {/* <Route path="/details"  element={<Student/>}/> */}
        <Route path="/tailwind" element={<TailwindTest />} />
        <Route path="/login"  element={<Index/>}/>
        <Route path="/approvals" element={<ApprovalsTable />} />
        <Route path="/announcement" element={<AnnouncementPage />} />
        <Route path="/Faannouncements" element={<Faannouncements />} />
        <Route path="/studentdetails" element={<StudentDetails />} />
        
        {/* Faculty Routes */}
        {/*<Route path="/faculty/*" element={<FacultyLayout />}>
          <Route path="dashboard" element={<FacultyDashboard />} />
          <Route path="manage-projects" element={<ManageProjects />} />
          <Route path="approve" element={<ApproveRequests />} />
        </Route> */}
      </Routes>
    </Router>
  );
>>>>>>> 55bdc32cb43da2ae0fce6cc81bbbb1341610a76b
}

export default App;
