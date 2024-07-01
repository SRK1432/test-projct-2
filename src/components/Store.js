import React, { useState } from "react";

const Store = ({ addToCart }) => {
  const [size, setSize] = useState('');
  const [tshirt, setTshirt] = useState('');
  const [descri, setDescri] = useState('');
  const [price, setPrice] = useState('');
  const [products, setProducts] = useState([
    {
      name: "Navy Blue Aramanis Tshirts",
      description: "100% cotton",
      price: 1299,
      quantities: { L: 99, M: 50, S: 20 }
    },
    {
      name: "Gucchi Tshirts",
      description: "100% cotton",
      price: 2000,
      quantities: { L: 50, M: 40, S: 30 }
    }
  ]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      name: tshirt,
      description: descri,
      price: Number(price),
      quantities: { L: 0, M: 0, S: 0 }
    };
    setProducts([...products, newProduct]);
    setTshirt('');
    setDescri('');
    setPrice('');
    setSize('');
  };

  const handleBuy = (productIndex, size) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[productIndex].quantities[size]--;
      return updatedProducts;
    });
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="tshirt">T-shirt Name</label>
        <input type="text" id="tshirt" value={tshirt} onChange={(e) => setTshirt(e.target.value)} />
        
        <label htmlFor="descri">Description</label>
        <input type="text" id="descri" value={descri} onChange={(e) => setDescri(e.target.value)} />
        
        <label htmlFor="price">Price</label>
        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
        
        <label>Size</label>
        <label>
          <input type="radio" value='L' checked={size === 'L'} onChange={(e) => setSize(e.target.value)} />
          L
        </label>
        <label>
          <input type="radio" value='M' checked={size === 'M'} onChange={(e) => setSize(e.target.value)} />
          M
        </label>
        <label>
          <input type="radio" value='S' checked={size === 'S'} onChange={(e) => setSize(e.target.value)} />
          S
        </label>
        
        <button type="submit">Add product</button>
      </form>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Buy Large</th>
              <th>Buy Medium</th>
              <th>Buy Small</th>
              <th>Add to Cart</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.price}</td>
                <td>
                  <button onClick={() => handleBuy(index, 'L')}>
                    Buy Large ({product.quantities.L})
                  </button>
                </td>
                <td>
                  <button onClick={() => handleBuy(index, 'M')}>
                    Buy Medium ({product.quantities.M})
                  </button>
                </td>
                <td>
                  <button onClick={() => handleBuy(index, 'S')}>
                    Buy Small ({product.quantities.S})
                  </button>
                </td>
                <td>
                  <button onClick={() => addToCart(product, size)}>Add to Cart</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Store;
