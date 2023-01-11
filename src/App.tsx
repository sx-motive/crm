import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import RestoreScroll from './router/RestoreScroll';

function App() {
  return (
    <BrowserRouter>
      <Router />
      <RestoreScroll />
    </BrowserRouter>
  );
}

export default App;
