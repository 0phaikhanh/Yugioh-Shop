// src/components/Cart.js
import React, { useState } from 'react';

const Cart = () => {
    const [cart, setCart] = useState([
        { id: 1, name: 'Thẻ bài Yu-Gi-Oh! 1', price: 10000, quantity: 2 },
        { id: 2, name: 'Thẻ bài Yu-Gi-Oh! 2', price: 20000, quantity: 1 },
    ]);

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const updateQuantity = (id, quantity) => {
        setCart(cart.map(item => 
            item.id === id ? { ...item, quantity: quantity } : item
        ));
    };

    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    return (
        <div className="cart">
            <h2>Giỏ hàng của bạn</h2>
            <div className="cart-items">
                {cart.length > 0 ? (
                    cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <p>{item.name}</p>
                            <p>Giá: {item.price} VND</p>
                            <p>Số lượng: 
                                <input 
                                    type="number" 
                                    min="1" 
                                    value={item.quantity} 
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                />
                            </p>
                            <button onClick={() => removeItem(item.id)} className="remove-btn">Xóa</button>
                        </div>
                    ))
                ) : (
                    <p>Giỏ hàng của bạn đang trống.</p>
                )}
            </div>
            {cart.length > 0 && (
                <>
                    <p>Tổng cộng: {calculateTotal()} VND</p>
                    <button className="btn">Thanh toán</button>
                </>
            )}
        </div>
    );
};

export default Cart;
