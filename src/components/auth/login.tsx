import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

interface LoginData {
  email: string;
  password: string;
}

export default function Login() {
  const auth = getAuth();

  const [loginData, setLoginData] = useState<LoginData>({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        loginData.email,
        loginData.password
      );
      const user = result.user;
      console.warn('login');
      console.warn(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='form'>
      <span>Login</span>
      <input
        className='block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
        onChange={(e) => {
          setLoginData({ ...loginData, email: e.target.value });
        }}
        placeholder='Email'
        type='email'
        name='email'
        id='email'
      />

      <input
        className='block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
        onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
        placeholder='Password'
        type='password'
        name='password'
        id='password'
      />

      <button
        onClick={onLogin}
        className='w-full block cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
      >
        Login
      </button>
    </div>
  );
}
