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
    <div className='fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-wrap flex-col w-72 max-w-full gap-2 text-center'>
      <span className='block text-2xl mb-2 font-bold'>Register</span>
      <input
        className='input input-bordered w-full max-w-xs'
        onChange={(e) => {
          setRegisterData({ ...registerData, username: e.target.value });
        }}
        placeholder='Username'
        type='text'
        name='username'
        id='username'
      />

      <input
        className='input input-bordered w-full max-w-xs'
        onChange={(e) => {
          setRegisterData({ ...registerData, email: e.target.value });
        }}
        placeholder='Email'
        type='email'
        name='email'
        id='email'
      />

      <input
        className='input input-bordered w-full max-w-xs'
        onChange={(e) => {
          setRegisterData({ ...registerData, password: e.target.value });
        }}
        placeholder='Password'
        type='password'
        name='password'
        id='password'
      />

      <button
        className='btn btn-block'
        disabled={Object.values(registerData).every((x) => !!x) ? false : true}
        onClick={onRegister}
      >
        Register
      </button>
    </div>
  );
}
