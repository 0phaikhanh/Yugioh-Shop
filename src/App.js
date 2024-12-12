import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Statistics from './components/Statistics';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Lấy thông tin user từ localStorage
  if (!user) {
    return <div>Bạn cần đăng nhập để truy cập!</div>;
  }
  if (role && user.role !== role) {
    return <div>Chỉ admin mới có quyền truy cập!</div>;
  }
  return children;
};

const Navigation = () => {
  const user = JSON.parse(localStorage.getItem('user')); // Kiểm tra xem người dùng đã đăng nhập chưa
  return (
    <nav>
      <ul>
        <li><Link to="/">Sản phẩm</Link></li>
        <li><Link to="/cart">Giỏ hàng</Link></li>
        {user && user.role === 'admin' && <li><Link to="/statistics">Thống kê</Link></li>}
        {user ? <li><button onClick={() => localStorage.removeItem('user')}>Đăng Xuất</button></li> : (
          <>
            <li><Link to="/login">Đăng Nhập</Link></li>
            <li><Link to="/register">Đăng Ký</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

const App = () => {
  const [cart, setCart] = useState([]);

  // Lấy giỏ hàng từ localStorage khi trang web được tải lại
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Lưu giỏ hàng vào localStorage
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<ProductList addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route path="/statistics" element={<ProtectedRoute role="admin"><Statistics /></ProtectedRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
