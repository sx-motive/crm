import { useState } from 'react';
import AuthLayout from '../layouts/AuthLayout';
import Login from '../components/auth/Login';
import Register from '../components/auth/Register';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <AuthLayout>
      {isLogin ? (
        <>
          <Login />
          <span
            className='inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'
            onClick={() => setIsLogin(!isLogin)}
          >
            Don't have an account yet? Let's Register!
          </span>
        </>
      ) : (
        <>
          <Register />
          <span
            className='inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-2 py-1 text-xs font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'
            onClick={() => setIsLogin(!isLogin)}
          >
            Already have an account? Let's Login!
          </span>
        </>
      )}
    </AuthLayout>
  );
}
