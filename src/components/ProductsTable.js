import React from 'react';
import './ProductsTable.css';

const ProductsTable = () => {
  const products = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
  ];

  return (
    <div className="products-table">
      <div className="table-header">
        <h3 className="table-title">Top Selling Products</h3>
      </div>
      
      <div className="table-container">
        <table className="products-table-content">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td className="product-name">{product.name}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-quantity">{product.quantity}</td>
                <td className="product-amount">{product.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
