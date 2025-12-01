import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext, AuthProvider } from "./AuthContext";
import "./App.css"
import Login from "./pages/Login"
import Activos from "./pages/Activos";
import Dassboar from "./pages/Dassboar";

function AppContent() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/activos" element={<Activos /> } />
      <Route path="/" element={<Navigate to="/login" /> } />
      <Route path="/dassboar" element={isAuthenticated ? <Dassboar /> : <Navigate to="/login" />} />
      <Route path="/" element={isAuthenticated ? <Navigate to="/dassboar" /> : <Navigate to="/login" />} />
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
