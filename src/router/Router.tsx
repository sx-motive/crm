import { Routes, Route } from 'react-router-dom';

import Index from '../views/index';
import Auth from '../views/Auth';


export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/auth' element={<Auth />} />
    </Routes>
  );
}
