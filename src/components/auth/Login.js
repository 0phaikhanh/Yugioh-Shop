import React, { useState } from 'react';
import '../../assets/login.css';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dummyUser = {
      username: 'admin',
      password: '123456',
      role: 'admin',
    };

    if (
      formData.username === dummyUser.username &&
      formData.password === dummyUser.password
    ) {
      localStorage.setItem('user', JSON.stringify(dummyUser));
      alert('Đăng nhập thành công!');
      window.location.href = '/register';
    } else {
      setError('Tên đăng nhập hoặc mật khẩu không chính xác.');
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Đăng Nhập</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Tên đăng nhập</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="Nhập tên đăng nhập"
              required
            />
          </div>
          <div className="form-group">
            <label>Mật khẩu</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Nhập mật khẩu"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Đăng Nhập
          </button>
        </form>
        <p className="register-link">
          Chưa có tài khoản? <a href='http://localhost:8080/register'>Đăng ký ngay</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
