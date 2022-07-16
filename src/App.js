import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Auth from "./components/Auth";
import CartItems from "./components/CartItems";
import Layout from "./components/Layout";
import { Notification } from "./components/notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true;

function App() {

  const dispatch = useDispatch();

  const notification = useSelector(state => state.ui.notification);

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)

  const cart = useSelector(state => state.cart)

  useEffect(() => {
    if (isFirstRender){
      isFirstRender = false;
      return;
    }

    const sendRequest = async () => {

      dispatch(uiActions.showNotification({
        open: true,
        message: "Sending Request",
        type: "warning"
      }))
      const res = await fetch('https://reduxstore-96997-default-rtdb.europe-west1.firebasedatabase.app/cartItems.json', 
      {
        method: "PUT",
        body: JSON.stringify(cart)
      }
    );
    const data = await res.json();

    dispatch(uiActions.showNotification({
      open: true,
      message: "Sent Request to Database Successfully",
      type: 'success'
    }))
  }
  
  sendRequest().catch(err => {
    dispatch(uiActions.showNotification({
      open: true,
      message: "Sending Request Failed",
      type: 'error'
    }))
  });
  }, [cart])

  return (
    <div className="App">
      {console.log(notification)}
      { notification   && <Notification type={notification.type} message={notification.message} />}
      { !isLoggedIn && <Auth />}
      { isLoggedIn && <Layout />}

    </div>
  );
}

export default App;
