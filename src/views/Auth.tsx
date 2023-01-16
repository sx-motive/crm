import { useState } from 'react';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='auth__block'>
      {isLogin ? (
        <>
          <Login />
          <span className='auth__swaper' onClick={() => setIsLogin(!isLogin)}>
            Don't have an account yet?{' '}
            <span className='auth__swaper__link'>Let's Register</span>
          </span>
        </>
      ) : (
        <>
          <Register />
          <span className='auth__swaper' onClick={() => setIsLogin(!isLogin)}>
            Already have an account?{' '}
            <span className='auth__swaper__link'>Let's Login</span>
          </span>
        </>
      )}
    </div>
  );
}
