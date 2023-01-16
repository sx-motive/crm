import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../api/firebase';

import { useUser } from '../store/Store';
import { User } from '../store/types';

import Auth from '../views/auth';
import Dashboard from '../views/dashboard';

export default function Router() {
  const history = useNavigate();
  const auth = getAuth(app);
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        setUser(userData as User);
        history('/');
      } else {
        history('auth');
      }
    });
  }, []);

  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}
