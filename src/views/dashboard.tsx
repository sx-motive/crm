import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';
import Main from '../components/layout/Main';

export default function Dashboard() {
  return (
    <div className='dashboard'>
      <Header />
      <Sidebar />
      <Main>Elements</Main>
    </div>
  );
}
