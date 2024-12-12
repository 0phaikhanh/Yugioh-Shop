import React from 'react';
import darkMagicianImg from '../assets/dark_magiccian.jpg';
import blueEyesWhiteDragonImg from '../assets/blueEyesWhiteDragon.jpg';
import redEyesBlackDragonImg from '../assets/redEyesBlackDragon.jpg';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: 'Dark Magician', price: 500, image: darkMagicianImg },
    { id: 2, name: 'Blue-Eyes White Dragon', price: 700, image: blueEyesWhiteDragonImg },
    { id: 3, name: 'Red-Eyes Black Dragon', price: 600, image: redEyesBlackDragonImg },
  ];

  return (
    <div className="product-list-container">
      <h2>Sản phẩm</h2>
      <div className="product-items">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>Giá: {product.price} VNĐ</p>
            <button onClick={() => addToCart(product)} className="add-to-cart-btn">Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
