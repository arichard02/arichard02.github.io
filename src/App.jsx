import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';


// My page imports
import AUX from './pages/TheAux';
import CNE from './pages/CNE';
import EYC from './pages/EYC';
import BEL from './pages/BEL';
import Test from './pages/Test';
import Home from './pages/Home';
import CaseStudies from './pages/CaseStudies';
import Bio from './pages/Bio';
import Tips from './pages/Tips';
import AnimatedSection from './pages/AnimatedSection';
import Style from './pages/Style';
import Practice from './pages/Practice';

import { ConfigProvider, theme as antdTheme } from 'antd';
import ThemeToggleButton from "./components/ThemeToggleButton";
import "./components/ThemeToggle.css";


export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.body.classList.toggle('dark-theme', newTheme);
  };

  useEffect(() => {
    // On initial load, ensure the theme class is synced
    document.body.classList.toggle('dark-theme', isDark);
  }, [isDark]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark
          ? antdTheme.darkAlgorithm
          : antdTheme.defaultAlgorithm,
      }}
    >
      <Router>
        <div style={{ padding: 24 }}>
          <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />

          {/* Optional: header content */}
          {/* <h2>Hello, Ant Design!</h2>
          <p>
            This is a themed app using Ant Design’s{' '}
            {isDark ? 'dark' : 'light'} mode.
          </p> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio/" element={<Bio />} />
            <Route path="/tips/" element={<Tips />} />
            <Route path="/case-studies/" element={<CaseStudies />} />
            <Route path="/case-studies/aux/" element={<AUX />} />
            <Route path="/case-studies/cne/" element={<CNE />} />
            <Route path="/case-studies/eyc/" element={<EYC />} />
            <Route path="/case-studies/bel/" element={<BEL />} />
            <Route path="/case-studies/test/" element={<Test />} />
            <Route path="/style" element={<Style />} />
            <Route path="/case-studies/practice/" element={<Practice />} />
          </Routes>
        </div>
      </Router>
    </ConfigProvider>
  );
}










// import React, { useEffect } from 'react';
// import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
// import AUX from './pages/TheAux';
// import CNE from './pages/CNE';
// import EYC from './pages/EYC';
// import BEL from './pages/BEL';
// import Test from './pages/Test';
// import Home from './pages/Home';
// import CaseStudies from './pages/CaseStudies';
// import Bio from './pages/Bio';
// import Tips from './pages/Tips';
// import AnimatedSection from './pages/AnimatedSection';
// import Style from './pages/Style';
// import Practice from './pages/Practice';
// // import WavePath from './components/WavePath';
// import { ConfigProvider, theme as antdTheme } from 'antd';
// import ThemeToggleButton from './ThemeToggleButton';
// import './ThemeToggle.css'; // Your animation styles




// export default function App() {
//   const [isDark, setIsDark] = useState(() => {
//     return localStorage.getItem('theme') === 'dark';
//   });



// const toggleTheme = () => {
//     const newTheme = !isDark;
//     setIsDark(newTheme);
//     localStorage.setItem('theme', newTheme ? 'dark' : 'light');
//     document.body.classList.toggle('dark-theme', newTheme);
//   };




// {/* <div>{darkMode ? "Dark" : "Light"}</div>; */}
 
       

// function App() {
//    return (
//     <ConfigProvider
//       theme={{
//         algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
//       }}
//     >
//       <div style={{ padding: 24 }}>
//         <ThemeToggleButton isDark={isDark} toggleTheme={toggleTheme} />
//         <h2>Hello, Ant Design!</h2>
//         <p>This is a themed app using Ant Design’s {isDark ? 'dark' : 'light'} mode.</p>
//       </div>
//     </ConfigProvider>
//   );
// }


      

      // {/* <Section title="Adwaina" />
      // <Section title="Hello world!" flipped />
      // <div className="min-h-screen"> */}

      // // <div>
      //   {/* <h1>Scroll to see the wave animate</h1>
      //   <div style={{ height: '100vh' }} />
      //   <WavePath />
      //   <div style={{ height: '100vh' }} /> */}


      //   {/* Depending on the URL, render the appropriate component: */}
//         {/* <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/bio/" element={<Bio />} />
//           <Route path="/tips/" element={<Tips />} />
//           <Route path="/case-studies/" element={<CaseStudies />} />
//           <Route path="/case-studies/aux/" element={<AUX />} />
//           <Route path="/case-studies/cne/" element={<CNE />} />
//           <Route path="/case-studies/eyc/" element={<EYC />} />
//           <Route path="/case-studies/bel/" element={<BEL />} />
//           <Route path="/case-studies/test/" element={<Test />} />
//           <Route path="/style" element={<Style />} />
//           <Route path="/case-studies/practice/" element={<Practice/>} />

//         </Routes>
//       </div>
//     </Router>
//   );
// }


// export default App; */}
