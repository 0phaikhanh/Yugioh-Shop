import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Statistics from './components/Statistics';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './index.css';

// ProtectedRoute component for handling restricted pages
const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (role && user.role !== role) {
    return <Navigate to="/unauthorized" replace />;
  }
  return children;
};

// Navigation component with login/logout logic
const Navigation = () => {
  const [ilogin, setIlogin] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate(); // Using useNavigate hook to navigate

  useEffect(() => {
    setIlogin(!!user); // Set login state based on whether user exists in localStorage
  }, [user]);

  const handleLogout = () => {
    if (window.confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      localStorage.removeItem('user'); // Xóa thông tin đăng nhập trong localStorage
      setIlogin(false); // Cập nhật trạng thái đăng nhập
      window.location.href = '/';
    }
  };

  return (
    <nav className="navigation">
      <ul className="nav-list">
        {!ilogin ? (
          <>
            <li><Link to="/login">Đăng Nhập</Link></li>
            <li><Link to="/register">Đăng Ký</Link></li>
          </>
        ) : (
          <>
            <li><Link to="/">Sản phẩm</Link></li>
            <li><Link to="/cart">Giỏ hàng</Link></li>
            {user && user.role === 'admin' && <li><Link to="/statistics">Thống kê</Link></li>}
            <li><Link onClick={handleLogout} to="/">Đăng Xuất</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

// Main App component
const App = () => {
  const [cart, setCart] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const isLoggedIn = !!user;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    let updatedCart;

    if (existingProduct) {
      updatedCart = cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Router>
      <Helmet>
        <title>Yugioh Shop</title>
      </Helmet>
      <Navigation />
      <Routes>
        {/* Các route có yêu cầu đăng nhập, nếu không có người dùng thì chuyển về login */}
        <Route path="/" element={isLoggedIn ? <ProductList addToCart={addToCart} cart={cart} /> : <Navigate to="/login" />} />
        <Route path="/cart" element={isLoggedIn ? <Cart cart={cart} setCart={setCart} /> : <Navigate to="/login" />} />

        {/* Route login và register có thể truy cập ngay cả khi chưa đăng nhập */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={isLoggedIn ? <Navigate to="/" /> : <Register />} />

        {/* Route yêu cầu quyền admin */}
        <Route path="/statistics" element={<ProtectedRoute role="admin"><Statistics /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
