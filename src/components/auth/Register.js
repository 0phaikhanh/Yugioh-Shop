import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    // Mô phỏng thông tin đăng ký
    const mockUser = { username, role: 'user' }; // Có thể thay đổi thành 'admin' nếu muốn
    localStorage.setItem('user', JSON.stringify(mockUser));
    navigate('/');
  };

  return (
    <div>
      <h2>Đăng ký</h2>
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
      <button onClick={handleRegister}>Đăng ký</button>
    </div>
  );
};

export default Register;
