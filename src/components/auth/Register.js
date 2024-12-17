import React, { useState } from 'react';
import '../../assets/login.css';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.username || !formData.email || !formData.password) {
      setError('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Mật khẩu và xác nhận mật khẩu không khớp!');
      return;
    }

    // Save user data (dummy logic)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push({
      username: formData.username,
      email: formData.email,
      password: formData.password,
    });
    localStorage.setItem('users', JSON.stringify(users));

    setError('');
    setSuccess('Đăng ký thành công! Bạn có thể đăng nhập.');
    setFormData({ username: '', email: '', password: '', confirmPassword: '' });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <h2>Đăng Ký</h2>
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
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Nhập email"
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
          <div className="form-group">
            <label>Xác nhận mật khẩu</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="register-button">
            Đăng Ký
          </button>
        </form>
        <p className="login-link">
          Đã có tài khoản? <a href='/login'>Đăng nhập ngay</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
