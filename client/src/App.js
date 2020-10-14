import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/redux-store";

import "./App.css";
import "./variables.scss";

import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/HomePage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import CartPage from "./pages/CartPage/CartPage";
import Profile from "./pages/Profile/Profile";
import UpdateProfile from "./pages/Profile/UpdateProfile";
import Shipping from "./pages/Shipping/Shipping";
import Payment from "./pages/Payment/Payment";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import OrderPage from "./pages/OrderPage/OrderPage";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/update" component={UpdateProfile} />
          <Route path="/product/:id" component={SingleProductPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route path="/cart/:id?" component={CartPage} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={Payment} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
