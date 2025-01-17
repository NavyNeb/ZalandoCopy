import Header from '@/components/organisms/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

// Example: Import a shared NavigationBar component

const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col my-5 min-h-screen w-screen">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 my-3 bg-white">
        <Outlet />
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white text-center p-4">
        <p>LeJangui © {new Date().getFullYear()}</p>
      </footer> */}
    </div>
  );
};

export default AppLayout;