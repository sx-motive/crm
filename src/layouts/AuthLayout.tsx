
import Login from '../components/auth/login'
import Register from '../components/auth/register'

import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";

export default function AuthLayout() {
  const auth = getAuth();

  const [isLogin, setIsLogin] = useState(true)

  return (
    <div>
      {isLogin ? <Login /> : <Register />}
    </div>
  )
}
