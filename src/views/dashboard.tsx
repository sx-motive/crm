import { getAuth, signOut } from 'firebase/auth';
import { useUser } from '../store/Store';

import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const auth = getAuth();
  const history = useNavigate();
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        history('/auth');
        setUser({});
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <section className='dashboard'>
      Welcome brother {user?.email}
      <button
        onClick={logOut}
        className='inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'
      >
        Log out
      </button>
    </section>
  );
}
