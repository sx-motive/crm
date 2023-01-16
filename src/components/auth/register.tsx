import { useState } from 'react';

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

interface RegisterData {
  username: string;
  name: string;
  surname: string;
  email: string;
  password: string;
}

export default function Register() {
  const auth = getAuth();

  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    username: '',
    name: '',
    surname: '',
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
    <>
      <span className='auth__title'>Register</span>
      <input
        onChange={(e) => {
          setRegisterData({ ...registerData, username: e.target.value });
        }}
        placeholder='Username'
        type='text'
        name='username'
        id='username'
      />

      <div className='auth__column_two'>
        <input
          onChange={(e) => {
            setRegisterData({ ...registerData, name: e.target.value });
          }}
          placeholder='Name'
          type='text'
          name='name'
          id='name'
        />
        <input
          onChange={(e) => {
            setRegisterData({ ...registerData, surname: e.target.value });
          }}
          placeholder='Surname'
          type='text'
          name='surname'
          id='surname'
        />
      </div>

      <input
        onChange={(e) => {
          setRegisterData({ ...registerData, email: e.target.value });
        }}
        placeholder='Email'
        type='email'
        name='email'
        id='email'
      />

      <input
        onChange={(e) => {
          setRegisterData({ ...registerData, password: e.target.value });
        }}
        placeholder='Password'
        type='password'
        name='password'
        id='password'
      />

      <button
        disabled={Object.values(registerData).every((x) => !!x) ? false : true}
        onClick={onRegister}
      >
        Register
      </button>
    </>
  );
}
