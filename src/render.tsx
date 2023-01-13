import ReactDOM from 'react-dom/client';

import { BrowserRouter, useNavigate } from 'react-router-dom';
import Router from './router/Router';
import RestoreScroll from './router/RestoreScroll';

import { useUser } from './store/Store';
import { useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { app } from './api/firebase';

import './styles/main.scss';
import { User } from './store/types';

function App() {
  const auth = getAuth(app);
  console.warn(auth);
  // const history = useNavigate();
  const setUser = useUser((state) => state.setUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userData: User) => {
      if (userData) {
        console.log(userData);
        setUser(userData);
        // history('/');
      } else {
        // history('/auth');
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <Router />
      <RestoreScroll />
    </BrowserRouter>
  );
}

const root = document.getElementById('root');
ReactDOM.createRoot(root as HTMLElement).render(<App />);
