// AUTH PAGE

import './AuthPage.css';

import { useState } from 'react';
import SignUpForm from '../../components/A1-SignupForm/SignupForm.jsx';
import LoginForm from '../../components/A2-LoginForm/LoginForm.jsx';

export default function AuthPage() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      &nbsp;
      <LoginForm /> 
      &nbsp;
      <SignUpForm />
    </main>
  );
}