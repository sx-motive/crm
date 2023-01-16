import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='layout container'>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Header />
        <main className='main'>{children}</main>
      </div>
    </div>
  );
}
