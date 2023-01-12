import { Routes, Route, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../api/firebase';

import Index from '../views/index';
import Auth from '../views/auth';
import Dashboard from '../views/dashboard';

import { useUser } from '../store/Store';

export default function Router() {
  const auth = getAuth(app);
  console.warn(auth)
  const history = useNavigate();
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredit) => {
      if (userCredit) {
        setUser(userCredit);
        history('/');
      } else {
        history('/auth');
      }
    });
  }, []);

  return (
    <Routes>
      {/* <Route path='/' element={<Index />} /> */}
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}
