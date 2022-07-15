import React from "react";
import Header from "./Header";
import Products from "./Products";
import "./Layout.css";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Layout = () => {

  const displayCart = useSelector(state => state.cart.displayCart);
  
  const cartItems = useSelector(state => state.cart.itemList);

  let totalPrice = 0;

  cartItems.forEach(item => {
    totalPrice += item.totalPrice;
  })  

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        { displayCart && <CartItems/>}
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
