import { getAuth, signOut } from 'firebase/auth';
import { useUser } from '../../store/Store';

import { useNavigate } from 'react-router-dom';
import { MessageIcon, NotificationIcon } from '../icons';

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
    <header>
      <div className='header__container'>
        <input type='text' placeholder='Search' />

        <div className='header__right'>
          <button>Add event</button>
          <NotificationIcon />
          <MessageIcon />
          <div className='dropdown'>
            <div className='dropdown__btn header__avatar'>
              <img src='https://xsgames.co/randomusers/avatar.php?g=female' />
            </div>

            <div className='dropdown__content'>
              <ul className='dropdown__content__wrap'>
                <li>
                  <button className='ghost'>Profile</button>
                </li>
                <li>
                  <button className='ghost'>Settings</button>
                </li>
                <li>
                  <button className='ghost' onClick={logOut}>
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
