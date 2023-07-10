import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SignInAndSignUpPage = () => (
  <div className="flex w-[900px] justify-between my-[30px] mx-auto">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
