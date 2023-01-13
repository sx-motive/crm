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
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap flex-col w-72 max-w-full gap-2 text-center'>
      <span className='block text-2xl mb-2 font-bold'>Login</span>
      <input
        className='input input-bordered w-full'
        onChange={(e) => {
          setLoginData({ ...loginData, email: e.target.value });
        }}
        placeholder='Email'
        type='email'
        name='email'
        id='email'
      />

      <input
        className='input input-bordered w-full'
        onChange={(e) => {
          setLoginData({ ...loginData, password: e.target.value });
        }}
        placeholder='Password'
        type='password'
        name='password'
        id='password'
      />

      <button onClick={onLogin} className='btn btn-block'>
        Login
      </button>
    </div>
  );
}
