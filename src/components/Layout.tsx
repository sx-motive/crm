import { BrowserRouter } from 'react-router-dom';
import RestoreScroll from './RestoreScroll';
import Router from './Router';

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
