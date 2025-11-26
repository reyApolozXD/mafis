import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (correo, contraseña) => {
    // Aquí puedes agregar validación de credenciales
    // Por ahora, solo verificamos que los campos no estén vacíos
    if (correo && contraseña) {
      setIsAuthenticated(true);
      setUser({ correo });
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
