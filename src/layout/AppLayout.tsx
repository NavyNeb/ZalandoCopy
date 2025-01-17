import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

// Example: Import a shared NavigationBar component

const AppLayout: React.FC = () => {
  return (
    <div className=" overflow-scroll">
      {/* Navigation Bar */}
      <Header />

      {/* Main Content */}
      <main className='h-screen w-screen bg-transparent overflow-auto' >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AppLayout;