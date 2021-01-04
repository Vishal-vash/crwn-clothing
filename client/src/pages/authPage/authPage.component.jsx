import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import "./authPage.styles.scss";
 
const AuthPage = (props) => (<div className="auth-page">
    <SignIn />
    <SignUp />
</div>)
 
export default AuthPage;