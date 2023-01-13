import { Routes, Route, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from '../api/firebase';

import Auth from '../views/auth';
import Dashboard from '../views/dashboard';

export default function Router() {
  return (
    <Routes>
      <Route path='/auth' element={<Auth />} />
      <Route path='/' element={<Dashboard />} />
    </Routes>
  );
}
