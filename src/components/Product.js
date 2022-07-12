import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-Slice";

import "./Product.css";
const Product = ({ name, id, imgURL, price }) => {

  const cartItems = useSelector(state => state.cart.itemList);

  console.log(cartItems);

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart({
      name: name,
      id: id,
      price: id
    }))
  }

  return (
    <div className="card">
      <img src={imgURL} alt={name} />
      <h2>{name}</h2>
      <p>$ {price}</p>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
