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
import AllOrdersPage from "./pages/AllOrdersPage/AllOrdersPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import EditUserPage from "./pages/EditUserPage/EditUserPage";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import EditProductPage from "./pages/EditProductPage/EditProductPage";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/search/:keyword" component={Homepage} />
          <Route exact path="/page/:pageNumber" component={Homepage} />
          <Route
            path="/search/:keyword/page/:pageNumber"
            component={Homepage}
          />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/profile/update" component={UpdateProfile} />
          <Route path="/product/:id" component={SingleProductPage} />
          <Route path="/order/:id" component={OrderPage} />
          <Route exact path="/admin/userslist" component={UsersPage} />
          <Route exact path="/admin/productlist" component={ProductListPage} />
          <Route
            exact
            path="/admin/productlist/:pageNumber"
            component={ProductListPage}
          />
          <Route exact path="/admin/orderlist" component={AllOrdersPage} />
          <Route exact path="/admin/user/:id/edit" component={EditUserPage} />
          <Route
            exact
            path="/admin/product/:id/edit"
            component={EditProductPage}
          />
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
