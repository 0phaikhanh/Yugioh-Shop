import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Mô phỏng thông tin đăng nhập
    const mockUser = { username, role: 'user' }; // Có thể thay đổi thành 'admin' để kiểm tra phân quyền
    localStorage.setItem('user', JSON.stringify(mockUser));
    navigate('/');
  };

  return (
    <div>
      <h2>Đăng nhập</h2>
      <input 
        type="text" 
        placeholder="Tên đăng nhập" 
        value={username} 
        onChange={(e) => setUsername(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Mật khẩu" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default Login;
