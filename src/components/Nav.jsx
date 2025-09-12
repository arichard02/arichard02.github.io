import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Space } from 'antd';
import Projects from './Projects.jsx';

export default function Nav({ isHome = false }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [open, setOpen] = useState(false);
    const [size, setSize] = useState();
  
    const showLargeDrawer = () => {
      setSize('large');
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
                  <Link to="/" className="text-2xl font-abril">
                    Your Name
                  </Link>
                )}
              </div>
            </div>

            {/* Single Navigation Container */}
            <div className="flex items-center">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex items-center space-x-4">
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

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu dropdown - positioned absolutely */}
          <div
            className={`md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-40 ${isMenuOpen ? 'block' : 'hidden'}`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/bio/"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
              >
                About Me
              </Link>
              <Link
                to="/case-studies/"
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
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
                className="text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={closeMenu}
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
        {/* <p>Drawer #1...</p>
        <p>Drawer #2...</p>
        <p>Drawer #3...</p> */}
        <Projects />
      </Drawer>
    </>
  );
}
