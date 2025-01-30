import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { useLocation } from "react-router-dom";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";
import Patient from "./pages/Patient";
import Registration from "./pages/Registration";
import Register from "./pages/Register";

function App() {
  const location = useLocation();

  return (
    <>
      {!["/login", "/register"].some((path) => location.pathname.includes(path)) && <Navbar />}
      <div className="flex bg-[#f4f6f9] poppins">
        {!["/login", "/register"].some((path) => location.pathname.includes(path)) && <Sidebar />}
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/patient" element={<Patient />} />
          </Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/registration" element={<Registration />} />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Register />} path="/register" />
        </Routes>
      </div>
    </>
  );
}

export default App;
