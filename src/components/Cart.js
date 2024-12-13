import React from 'react';
import '../assets/Cart.css'; // Thêm tệp CSS để cải thiện giao diện

const Cart = ({ cart, setCart }) => {
  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Hàm thay đổi số lượng
  const updateQuantity = (productId, increment) => {
    const updatedCart = cart.map(item =>
      item.id === productId ? { ...item, quantity: Math.max(1, item.quantity + increment) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Hàm thanh toán
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Giỏ hàng đang trống! Vui lòng thêm sản phẩm trước khi thanh toán.');
      return;
    }
    // Xử lý thanh toán ở đây (ví dụ: gửi dữ liệu đến server)
    alert('Thanh toán thành công! Cảm ơn bạn đã mua hàng.');
    setCart([]); // Xóa giỏ hàng sau khi thanh toán
    localStorage.removeItem('cart'); // Xóa giỏ hàng khỏi localStorage
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
                <div className="quantity-control">
                  <button onClick={() => updateQuantity(product.id, -1)}>-</button>
                  <span>{product.quantity || 1}</span>
                  <button onClick={() => updateQuantity(product.id, 1)}>+</button>
                </div>
                <p>Tổng: {product.price * (product.quantity || 1)} VNĐ</p>
                <button onClick={() => removeFromCart(product.id)} className="remove-btn">
                  Xóa
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="cart-total">
        <h3>
          Tổng tiền: {cart.reduce((total, product) => total + product.price * (product.quantity || 1), 0)} VNĐ
        </h3>
        {cart.length > 0 && (
          <button onClick={handleCheckout} className="checkout-btn">
            Thanh Toán
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
