import React from 'react';
import Projects from '../components/Projects.jsx';
import Nav from '../components/Nav.jsx';
import { Image } from 'antd';
import { Carousel } from 'antd';
import MyDrawer from '../components/MyDrawer.jsx';
import { fromJSON } from 'postcss';
import WaveSections from './WaveSections';
// import Style from '../pages/Style.css'

export default function Home() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <>
      <Nav isHome={true} />

      {/* Button that toggles from light and dark  */}

      <WaveSections />

      <button style={{ backgroundColor: 'black', color: 'white' }}>Dark Mode</button>

      <div className="containerr border " id="cont">
        <p className="autoShow uji">Front-end</p>
        <p className="autoShow uji">Web-developer</p>
        <p className="autoShow uji">Designer</p>
      </div>

      

      {/* Top Banner */}
      <div className="bg-background-50 border">
        <div className="panel grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-center text-blue-600 text-7xl">Adwaina Richardson</h1>
            <p className="body-text-large max-w-2xl mx-auto text-center">
              "Transforming ideas into intuitive, user-focused digital experiences through
              creativity, collaboration, and seamless code."
            </p>
          </div>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </div>
      </div>

      {/* About Section */}
      <div className="panel">
        <h2>About Me</h2>
        <p className="body-text-large">
          I'm a front-end web developer with a passion for solving complex problems and turning
          ideas into intuitive, functional websites. My background in customer support and
          healthcare taught me to stay curious, think critically, and always focus on helping people
          — skills I now bring to every project I code. I love using both logic and creativity to
          build user-centered products that make a real impact. My process is grounded in research,
          collaboration, and a commitment to continuous learning. I'm excited to contribute to teams
          that value thoughtful design, clear communication, and purposeful development.
        </p>
      </div>

      <Projects />
    </>
  );
}
