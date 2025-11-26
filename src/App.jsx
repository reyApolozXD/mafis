import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import "./App.css"
import Login from "./login"
import Activos from "./activos"

function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/activos" element={isAuthenticated ? <Activos /> : <Navigate to="/login" />} />
      <Route path="/" element={isAuthenticated ? <Navigate to="/activos" /> : <Navigate to="/login" />} />
    </Routes>
  );
}

export default function App() {
    return (
      <AuthProvider>
        <Router>
          <AppContent />
        </Router>
      </AuthProvider>
    )
}
