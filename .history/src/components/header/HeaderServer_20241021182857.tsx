// src/components/header/HeaderServer.tsx
import { cookies } from 'next/headers'; // استخدام API الخاص بالخادم
import { verifyTokenForPage } from '@/utils/verifyToken';
import { ReactNode } from 'react';
import Navbar from './Navbar';
import LogoutButton from '../comments/LogoutButton';

const HeaderServer = () => {
  const token = cookies().get('jwtToken')?.value || '';
  const payload = verifyTokenForPage(token);

  return (
    <header>
      <Navbar isAdmin={payload?.isAdmin || false} />
      <div>
        {payload ? (
          <div>
            <strong>{payload.username}</strong>
            <LogoutButton />
          </div>
        ) : (
          <div>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderServer;
