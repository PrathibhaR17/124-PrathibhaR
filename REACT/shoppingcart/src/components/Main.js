import React from 'react';
import Product from './Product';

export default function Main(props) {
  const { products, onAdd } = props;
  return (
    <main className="block row-2">
      <h2>Products</h2>
      <td>
      <div className="row">
        {products.map((product) => (
          <Product key={product.id} 
          product={product}
           onAdd={onAdd}></Product>
        ))}
      </div>
      </td>
    </main>
  );
}
