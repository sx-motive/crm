import { Routes, Route } from 'react-router-dom';

import Index from '../views/index';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
    </Routes>
  );
}
