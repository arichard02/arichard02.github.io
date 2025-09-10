import React, { useState } from 'react';
import { Button } from 'antd';
import { BulbOutlined, MoonFilled } from '@ant-design/icons';
import './ThemeToggle.css';

export default function ThemeToggleButton({ isDark, toggleTheme }) {
  // const [isDark, setIsDark] = useState(true);

  //   const toggleTheme = () => {
  //   setIsDark(prev => !prev);
  //   document.body.classList.toggle('dark-theme'); // optional: toggle a global class
  // };

     return (
        <Button
      type="default"
      shape="circle"
      size="large"
      onClick={toggleTheme}
      className="theme-toggle-button"
    >
      <span className={`icon-wrapper ${isDark ? 'fade-out' : 'fade-in'}`}>
        <BulbOutlined className="theme-icon light-icon" />
      </span>
      <span className={`icon-wrapper ${isDark ? 'fade-in' : 'fade-out'}`}>
        <MoonFilled className="theme-icon dark-icon" />
      </span>
    </Button>
  );
}