import { ReactNode, useState } from 'react';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

export default function AuthLayout({ children }: Props) {
  return <div className='auth__layout'>{children}</div>;
}
