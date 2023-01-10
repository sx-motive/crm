import { useState } from 'react'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


interface RegisterData {
  username: string,
  email: string,
  password: string,
}


export default function Register() {
  const auth = getAuth();


  const [registerData, setRegisterData] = useState<RegisterData>({
    email: '',
    password: '',
    username: '',
  })

  const onRegister = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, registerData.email, registerData.password)
      const user = result.user;
      console.warn('register')
      console.warn(user)
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <div className='flex gap-4'>
      <input
        className='border-2 border-indigo-600'
        onChange={(e) => { setRegisterData({ ...registerData, username: e.target.value }) }}
        placeholder='Username'
        type="text"
        name="username"
        id="username" />

      <input
        className='border-2 border-indigo-600'
        onChange={(e) => { setRegisterData({ ...registerData, email: e.target.value }) }}
        placeholder='Email'
        type="email"
        name="email"
        id="email" />

      <input
        className='border-2 border-indigo-600'
        onChange={(e) => { setRegisterData({ ...registerData, password: e.target.value }) }}
        placeholder='Password'
        type="password"
        name="password"
        id="password" />

      <button
        disabled={Object.values(registerData).every(x => !!x) ? false : true}
        onClick={onRegister}>
        Register
      </button>

    </div>
  )
}