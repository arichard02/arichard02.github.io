import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Space } from 'antd';
import Projects from './Projects.jsx';

export default function Nav({ isHome = false }) {
  //State variables that require you to import react use state functions
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();

  const showLargeDrawer = () => {
    setSize('large');
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  // All functions go above this line
  return (
    <>
      <nav
        className={
          isHome ? 'bg-transparent absolute top-0 left-0 right-0 z-50' : 'bg-white shadow-sm'
        }
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                {isHome ? (
                  ''
                ) : (
                  <Link to="/" className="text-2xl font-sans">
                    Adwaina Richardson
                  </Link>
                )}
              </div>
            </div>
            <div className="flex items-center">
              <Link
                to="/bio/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                About Me
              </Link>
              <Link
                to="/case-studies/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                My Work
              </Link>
              <button
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium hover:bg-transparent"
                onClick={showLargeDrawer}
              >
                My Work
              </button>
              <Link
                to="/tips/"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Tips
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Drawer
        title={`${size} Drawer`}
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onClose}>
              OK
            </Button>
          </Space>
        }
      >
        <p>Drawer #1...</p>
        <p>Drawer #2...</p>
        <p>Drawer #3...</p>
        <Projects />
      </Drawer>
    </>
  );
}
