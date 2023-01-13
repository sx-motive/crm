import { BrowserRouter, useNavigate } from 'react-router-dom';
import Router from './router/Router';
import RestoreScroll from './router/RestoreScroll';

export default function App() {
  return (
    <BrowserRouter>
      <Router />
      <RestoreScroll />
    </BrowserRouter>
  );
}
