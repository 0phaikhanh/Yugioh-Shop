import React from 'react';

const Cart = ({ cart, setCart }) => {
  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId); // Loại bỏ sản phẩm theo ID
    setCart(updatedCart); // Cập nhật lại giỏ hàng
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Lưu giỏ hàng vào localStorage
  };

  return (
    <div className="cart-container">
      <h2>Giỏ Hàng</h2>
      {cart.length === 0 ? (
        <p>Giỏ hàng của bạn đang trống!</p>
      ) : (
        <div className="cart-items">
          {cart.map((product) => (
            <div key={product.id} className="cart-item">
              <img src={product.image} alt={product.name} className="cart-item-image" />
              <div className="cart-item-info">
                <h3>{product.name}</h3>
                <p>Giá: {product.price} VNĐ</p>
                <button onClick={() => removeFromCart(product.id)} className="remove-btn">
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>Tổng tiền: {cart.reduce((total, product) => total + product.price, 0)} VNĐ</h3>
      </div>
    </div>
  );
};

export default Cart;
