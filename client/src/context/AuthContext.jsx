import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  // Load user from localStorage
  useEffect(() => {

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

  }, []);

  // LOGIN FUNCTION (FIXED)
  const login = (data) => {

    // save token
    localStorage.setItem("token", data.token);

    // save user only
    localStorage.setItem("user", JSON.stringify(data.user));

    // update state
    setUser(data.user);
  };

  // LOGOUT FUNCTION
  const logout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (

    <AuthContext.Provider value={{ user, login, logout }}>

      {children}

    </AuthContext.Provider>

  );
};
