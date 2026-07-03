import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("learnpath_user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userData, token) => {
    localStorage.setItem("learnpath_user", JSON.stringify(userData));
    localStorage.setItem("learnpath_token", token);

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("learnpath_user");
    localStorage.removeItem("learnpath_token");

    setUser(null);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      isAuthenticated: !!user,
    }),
    [user]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);