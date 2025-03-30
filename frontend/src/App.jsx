import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"; // Assuming your AuthContext is here

// Your existing imports
import AdminLayout from "./layouts/AdminLayout";
import StudentLayout from "./layouts/StudentLayout";
<<<<<<< HEAD
=======
import FaLayout from "./layouts/FaLayout"
>>>>>>> NEW-FINAL-MAIN

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
=======
import FaDashboard from "./pages/fa/FaDashboard"
import Approvals from "./pages/fa/Approvals";
import StudentDetails from "./pages/fa/StudentDetails"
import StudentList from "./pages/fa/StudentList";
import AnnouncementPage from "./pages/fa/AnnouncementPage";

>>>>>>> NEW-FINAL-MAIN
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
<<<<<<< HEAD
                    <Route path="help" element={<Guidelines />} />
=======
                    <Route path="guidelines" element={<Guidelines />} />
>>>>>>> NEW-FINAL-MAIN
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="announcements/:id" element={<AnnouncementDetail />} />
                </Route>

<<<<<<< HEAD
=======
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
                    <Route path="guidelines" element={<Guidelines />} />
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="announcements/:id" element={<AnnouncementDetail />} />
                </Route>

                <Route
                    path="/fa/*"
                    element={
                        <ProtectedRoute>
                            <FaLayout />
                        </ProtectedRoute>
                    }
                >
                    <Route index element={<FaDashboard />} />
                    <Route path="dashboard" element={<FaDashboard />} />
                    <Route path="approvals" element={<Approvals />} />
                    <Route path="new-announcement" element={<AnnouncementPage />} />
                    <Route path="request-form" element={<RequestForm />} />
                    <Route path="announcements" element={<Announcements />} />
                    <Route path="announcements/:id" element={<AnnouncementDetail />} />
                    <Route path="student-list" element={<StudentList />} />
                    <Route path="student-details/:sid" element={<StudentDetails />} />
                </Route>

>>>>>>> NEW-FINAL-MAIN
                {/* Login Route */}
                <Route path="/login" element={<LoginPage />} />

                {/* Redirect unknown routes to login */}
                <Route path="*" element={<LoginPage />} />
            </Routes>
        // </Router>
    );
}

export default App;
