
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import StudentDashboard from "./pages/StudentDashboard";
// import EmployerDashboard from "./pages/EmployerDashboard";
// import InternshipDetails from "./pages/InternshipDetails";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/student/dashboard" element={<StudentDashboard />} />
//       <Route path="/employer/dashboard" element={<EmployerDashboard />} />
//       <Route path="/internship/:id" element={<InternshipDetails />} />
//     </Routes>
//   );
// }

// export default App;
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import StudentDashboard from "./pages/StudentDashboard";
import EmployerDashboard from "./pages/EmployerDashboard";
import InternshipDetails from "./pages/InternshipDetails";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      {/* Simple Navigation Bar */}
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/login" style={{ marginRight: "15px" }}>Login</Link>
        <Link to="/register" style={{ marginRight: "15px" }}>Register</Link>
        <Link to="/student/dashboard" style={{ marginRight: "15px" }}>Student Dashboard</Link>
        <Link to="/employer/dashboard" style={{ marginRight: "15px" }}>Employer Dashboard</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/employer/dashboard" element={<EmployerDashboard />} />
        <Route path="/internship/:id" element={<InternshipDetails />} />
      </Routes>
    </div>
  );
}

export default App;
