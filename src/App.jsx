import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
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
// import WavePath from './components/WavePath';


// import "./styles.css";
// ScrollToTop component to handle scroll restoration
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />

      {/* <Section title="Adwaina" />
      <Section title="Hello world!" flipped />
      <div className="min-h-screen"> */}

      <div>
        {/* <h1>Scroll to see the wave animate</h1>
        <div style={{ height: '100vh' }} />
        <WavePath />
        <div style={{ height: '100vh' }} /> */}


        {/* Depending on the URL, render the appropriate component: */}
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
