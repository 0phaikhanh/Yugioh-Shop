import React from 'react'; 
import './App.css';  // Import CSS
import ProductList from './components/ProductList'; 
import Cart from './components/Cart'; 
import Statistics from './components/Statistics';

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Trang bán thẻ bài Yu-Gi-Oh!</h1>
            </header>
            <div className="main-content">
                <div className="product-list">
                    <ProductList />  {/* Hiển thị danh sách sản phẩm */}
                </div>
                <div className="cart-and-statistics">
                    <Cart />  {/* Hiển thị Giỏ hàng */}
                    <Statistics />  {/* Hiển thị Thống kê */}
                </div>
            </div>
        </div>
    );
};

export default App;
