import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import "./App.css";
import Header from "./components/header/header.compnent";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import AuthPage from "./pages/authPage/authPage.component";
import CheckoutPage from "./pages/checkoutPage/checkoutPage.component";
import { checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          path="/auth"
          render={() => (currentUser ? <Redirect to="/" /> : <AuthPage />)}
        />
        <Route path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
