import { getAuth, signOut } from 'firebase/auth';
import { useUser } from '../../store/Store';

import { useNavigate } from 'react-router-dom';

export default function Header() {
  const auth = getAuth();
  const history = useNavigate();
  const user = useUser((state) => state.user);
  const setUser = useUser((state) => state.setUser);
  const logOut = () => {
    signOut(auth)
      .then(() => {
        history('/auth');
        setUser({
          uid: '',
          email: '',
          emailVerified: false,
          isAnonymous: false,
          providerData: [],
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <header className='flex flex-row-reverse absolute top-0 right-0 w-full border-b-2 px-6 py-3 bg-slate-100 z10'>
      <div className='dropdown dropdown-end'>
        <div tabIndex={0} className='avatar'>
          <div className='w-16 rounded-full  ring-primary ring-offset-base-100 ring-offset-1'>
            <img src='https://placeimg.com/192/192/people' />
          </div>
        </div>

        <ul
          tabIndex={0}
          className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'
        >
          <div className='btn-group btn-group-vertical'>
            <button className='btn btn-ghost'>Profile</button>
            <button className='btn btn-ghost'>Settings</button>
            <button className='btn btn-ghost' onClick={logOut}>
              Log out
            </button>
          </div>
          {/* <li>
            <button className='inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'>
              Profile
            </button>
          </li>
          <li>
            <button className='inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'>
              Settings
            </button>
          </li>
          <li>
            <button
              onClick={logOut}
              className='inline-flex w-auto cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-800 transition hover:border-gray-300 hover:bg-gray-100 focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300'
            >
              Log out
            </button>
          </li> */}
        </ul>
      </div>
    </header>
  );
}
