import { useState } from 'react';

import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container mx-auto px-4 py-4 mt-20'>
      {isLogin ? (
        <>
          <Login />
          <span
            className='fixed left-1/2 -translate-x-1/2 bottom-20 link'
            onClick={() => setIsLogin(!isLogin)}
          >
            Don't have an account yet? Let's Register!
          </span>
        </>
      ) : (
        <>
          <Register />
          <span
            className='fixed left-1/2 -translate-x-1/2 bottom-20 link'
            onClick={() => setIsLogin(!isLogin)}
          >
            Already have an account? Let's Login!
          </span>
        </>
      )}
    </div>
  );
}
