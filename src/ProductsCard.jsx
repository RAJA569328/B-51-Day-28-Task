import React, { useContext, useState } from 'react';
import { ProductsContext } from './App';

function ProductsCard() {
  const { ArrayObjectProduct } = useContext(ProductsContext);       

  const [quantities, setQuantities] = useState(ArrayObjectProduct.products.map(() => 1));

  const handleQuantityChange = (e, index) => {

    let value = e.target.value
    if(value == '' || value== null){
      value = 0
    }
        const newQuantities = [...quantities];
    newQuantities[index] = parseInt(value);
    setQuantities(newQuantities); // Assuming this function handles changes in the parent component
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      {ArrayObjectProduct.products.map((product, index) => {
        const totalPrice = product.price * quantities[index];
        return (
          <div key={product.id} style={{ margin: '10px', border: '2px solid black', padding: '50px' }}>
            <div className="product">
              <img className="product-image" src={product.images.length > 1 ? product.images[2] : product.images[0]} alt="Wolf" />
              <div className="product-details">
                <div className="product-title"><b>PRODUCT NAME :</b> {product.title}</div>
                <div className="product-price"><b>PRODUCT PRICE :</b> $ {product.price} /Product</div>
                <div className="product-qty"><b>QUANTITY : </b><input type="number" value={quantities[index]} max={5} min={1} onChange={(e) => handleQuantityChange(e, index)} /><span> Max Qty : 5 Nos</span></div>
                <button className="product-remove" style={{margin:'10px', backgroundColor:'orange', color:'black', border:'2px solid black'}}>REMOVE</button>
              </div>
            </div>
            <div className="cart-total">
              <div className="cart-total-label">SUBTOTAL:</div>
              <div className="cart-total-value">$ {totalPrice}</div>
            </div>
            <div className="cart-total">
              <div className="cart-total-label">SHIPPING:</div>
              <div className="cart-total-value">FREE</div>
            </div>
            <div className="cart-total">
              <div className="cart-total-label">TOTAL:</div>
              <div className="cart-total-value">${totalPrice}</div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductsCard;