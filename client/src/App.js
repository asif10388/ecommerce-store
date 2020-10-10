import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./redux/redux-store";

import "./App.css";
import "./variables.scss";

import Header from "./components/header/header.component";
import Homepage from "./pages/Homepage/HomePage";
import SingleProductPage from "./pages/SingleProductPage/SingleProductPage";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={Homepage} />
          <Route path="/product/:id" component={SingleProductPage} />
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
