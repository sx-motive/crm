import { useState } from 'react'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface LoginData {
  email: string,
  password: string,
}


export default function Login() {
  const auth = getAuth();

  const [loginData, setLoginData] = useState<LoginData>({ email: '', password: '' })

  const onLogin = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, loginData.email, loginData.password)
      const user = result.user;
      console.warn('login')
      console.warn(user)
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <div className='flex gap-4'>
      <input
        className='border-2 border-orange-600'
        onChange={(e) => { setLoginData({ ...loginData, email: e.target.value }) }}
        placeholder='Email'
        type="email"
        name="email"
        id="email" />

      <input
        className='border-2 border-orange-600'
        onChange={(e) => { setLoginData({ ...loginData, password: e.target.value }) }}
        placeholder='Password'
        type="password"
        name="password"
        id="password" />

      <button onClick={onLogin}>Login</button>
    </div>
  )
}
