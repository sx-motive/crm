import { BrowserRouter } from 'react-router-dom';
import RestoreScroll from '../router/RestoreScroll';
import Router from '../router/Router';

export default function Layout() {
  return (
    <div className='layout'>
      <BrowserRouter>
        <Router />
        <RestoreScroll />
      </BrowserRouter>
    </div>
  );
}
