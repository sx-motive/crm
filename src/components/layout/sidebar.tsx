import {
  CalendarIcon,
  ChatIcon,
  HomeIcon,
  QuestionIcon,
  UserIcon,
} from '../icons';

export default function Sidebar() {
  return (
    <aside>
      <div className='sidebar__container'>
        <div className='sidebar__header'>
          <span className='sidebar__logo'>Logo</span>
          <div className='sidebar__nav'>
            <button className='ghost'>
              <HomeIcon />
              Home
            </button>
            <button className='ghost'>
              <ChatIcon />
              Chat
            </button>
            <button className='ghost'>
              <CalendarIcon />
              Calendar
            </button>
            <button className='ghost'>
              <UserIcon />
              Customers
            </button>
          </div>
        </div>

        <div className='sidebar__footer'>
          <span className='sidebar__getting__started'>
            <QuestionIcon />
            Help & getting started
          </span>
        </div>
      </div>
    </aside>
  );
}
