import React, { Component } from "react";
import { connect } from "react-redux";

import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { signInWithEmail } = this.props;
    const { email, password } = this.state;
    signInWithEmail(email, password);
    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { signInWithGoogle } = this.props;
    return (
      <div className="sign-in">
        <h2 className="title">I already have an account.</h2>
        <span>Sign In with your email and password.</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label="email"
            autoComplete="off"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label="password"
            required
          />

          <div className="btn-group">
            <CustomButton type="submit">Sign In</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle}>
              Sign In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signInWithGoogle: () => dispatch(googleSignInStart()),
  signInWithEmail: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
