import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h3>Cart{cart.length}</h3>
      {cart.length === 0 ? (
        <p>The cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Size</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.size}</td>
              </tr>
            ))}
          </tbody>
          <button>Place Order</button>
          <button>Cancel</button>
        </table>
      )}
      
    </div>
  );
};

export default Cart;
