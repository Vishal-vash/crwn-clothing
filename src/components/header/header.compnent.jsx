import React from "react";
import { Link } from "react-router-dom";

import { auth } from '../../firebase/firebase.utils';
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../logo.svg";

const Header = ({ currentUser }) => (
  <div className="header">
    <div className="logo-container">
      <Link to="/">
        <Logo title="Crwn Clothing" />
      </Link>
    </div>
    <div className="options">
      <Link className="option" to="/shop">
        Shop
      </Link>
      <Link className="option" to="/contact">
        Contact
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>
      ) : (
        <Link className="option" to="/auth">
          Sign In
        </Link>
      )}
    </div>
  </div>
);

export default Header;
