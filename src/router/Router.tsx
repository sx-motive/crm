import { Routes, Route } from 'react-router-dom';

import Auth from '../views/Auth';
import Index from '../views/index';


export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}
