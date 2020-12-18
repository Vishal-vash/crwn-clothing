import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Header from "./components/header/header.compnent";
import HomePage from "./pages/homePage/homePage.component";
import ShopPage from "./pages/shopPage/shopPage.component";
import AuthPage from "./pages/authPage/authPage.component";
import { auth, createUserDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    console.log( process.env.REACT_APP_FIREBASE_APP_ID)
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        const userRef = await createUserDocument(currentUser);

        userRef.onSnapshot((snapshot) => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data(),
            },
          });
        });
      }

      this.setState({ currentUser });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/shop">
            <ShopPage />
          </Route>
          <Route path="/auth">
            <AuthPage />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
