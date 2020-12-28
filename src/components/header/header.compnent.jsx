import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
//import "./header.styles.scss";
import {HeaderContainer, OptionsContainer, LogoContainer, OptionLink} from "./header.styles";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectHidden} from "../../redux/cart/cart.selector";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
        <Logo title="Crwn Clothing" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        Shop
      </OptionLink>
      <OptionLink to="/contact">
        Contact
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/auth">
          Sign In
        </OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden && <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectHidden
}) 


export default connect(mapStateToProps)(Header);
