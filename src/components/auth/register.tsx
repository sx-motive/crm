import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const auth = getAuth();

  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    username: '',
  });

  const onRegister = async () => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        registerData.email,
        registerData.password
      );
      const user = result.user;
      console.warn('register');
      console.warn(user);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className='form'>
      <span>Register</span>
      <input
        className='block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
        onChange={(e) => {
          setRegisterData({ ...registerData, username: e.target.value });
        }}
        placeholder='Username'
        type='text'
        name='username'
        id='username'
      />

      <input
        className='block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
        onChange={(e) => {
          setRegisterData({ ...registerData, email: e.target.value });
        }}
        placeholder='Email'
        type='email'
        name='email'
        id='email'
      />

      <input
        className='block w-full rounded-md border-gray-200 text-sm transition focus:border-blue-600 focus:ring-blue-600 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-75'
        onChange={(e) => {
          setRegisterData({ ...registerData, password: e.target.value });
        }}
        placeholder='Password'
        type='password'
        name='password'
        id='password'
      />

      <button
        className='w-full block cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-blue-700 bg-blue-700 px-3 py-2 text-sm font-medium text-white transition hover:border-blue-800 hover:bg-blue-800 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300'
        disabled={Object.values(registerData).every((x) => !!x) ? false : true}
        onClick={onRegister}
      >
        Register
      </button>
    </div>
  );
}
