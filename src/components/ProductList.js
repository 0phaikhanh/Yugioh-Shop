import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Giả sử bạn đã có API hoặc dữ liệu tĩnh
        const fetchProducts = async () => {
            const productData = [
                { id: 1, name: 'Thẻ bài Yu-Gi-Oh! 1', price: 10000 },
                { id: 2, name: 'Thẻ bài Yu-Gi-Oh! 2', price: 20000 },
            ];
            setProducts(productData);
        };
        fetchProducts();
    }, []);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name} - {product.price} VND
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;
