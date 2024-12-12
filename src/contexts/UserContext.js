import React, { createContext, useState, useContext } from 'react';

// Tạo context cho người dùng
const UserContext = createContext();

// Custom hook để sử dụng context
export const useUser = () => {
  return useContext(UserContext);
};

// UserProvider để bao bọc ứng dụng và cung cấp thông tin người dùng
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Khởi tạo trạng thái người dùng

  const login = (userData) => {
    setUser(userData); // Đăng nhập người dùng
  };

  const logout = () => {
    setUser(null); // Đăng xuất người dùng
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
