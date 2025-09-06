import React from 'react';
import './WaveSections.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPalette, faCode, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

const WaveSections = () => {
  return (
    <>
      <div className="section-wrapper">
        <svg
          id="Modo_de_aislamiento"
          data-name="Modo de aislamiento"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1399.32 163.87"
          class="custom-svg second-svg"
        >
          <path
            className="line"
            d="m1399.17,37.1c-87.27-27.1-183.66,2.85-259.54,53.78-11.17,7.5-22.38,15.81-29.01,27.52-6.63,11.71-7.49,27.69,1.37,37.81,8.86,10.12,28.35,9.53,33.81-2.77,5.16-11.62-4.8-25.42-16.94-29.21s-25.23-.58-37.58,2.44c-94.45,23.14-191.55,35.45-288.78,36.62-128.29,1.54-261.08-17.89-369.59-86.35-25.31-15.97-49.13-34.5-76.03-47.61-34.22-16.69-72.32-24.05-110.26-27.21C211.9-.77,176.62-.24,142.65,7.51c-37.08,8.46-71.69,25.29-105.05,43.54C18.9,61.28-2.25,77.19.79,98.28"
            fill="none"
            stroke="currentColor"
            stroke-width="4px"
            stroke-dasharray="4000"
            stroke-dashoffset="4000"
            transition="stroke-dashoffset 2s ease-in-out"
          ></path>
        </svg>
        {/* <svg
          className="custom-svg"
          id="Modo_de_aislamiento"
          data-name="Modo de aislamiento"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1773.98 917.81"
        >
          <path
            d="M2.13,496.09C25.31,517.29,50.31,536.29,79.31,548.29c26,10,54,11,80-1,9-5,17-11,24-19,7-9,12-19,16-29,5-13,5-26,5-39,0-6,1-11,0-17-2-8-2-15-4-22-3-7-4-14-7-21-7-17-16-31-27-47-9-11-17-21-26-32-18-24-36-45-53-70-2-3-3-7-4-10-1-2-4-3-5-5-21-40-33-88-13-131,2-4,5-9,7-13C104.31,44.29,160.31,25.29,214.31,28.29c21,2,40,5,60,12,29,11,55,25,81,44,19,15,36,28,53,44,3,2,6,4,8,6,5,6,11,11,17,17,7,6,14,12,21,19,18,16,35,29,54,44,11,7,21,13,32,20,18,10,36,18,55,24,18,7,37,10,56,12,21,2,41-2,61-8,66-24,98-86,133-144,7-10,13-19,20-29,6-8,12-16,19-24,9-10,18-18,28-26,16-12,32-22,50-29,25-10,53-9,78,0,46,18,64,66,71,112,7,52,6,104,24,153,9,22,22,44,44,56l3,3c5,2,9,6,15,7,2,1,4,3,7,4,19,7,38,12,58,18,3,1,7,3,10,5h4c18,10,34,19,46,36,11,16,17,33,18,52,2,44-15,85-37,123-18,30-35,57-46,89-6,18-9,37-9,56,1,7,1,15,2,22,3,17,7,32,13,47,14,33,34,60,63,83,56,43,132,52,193,16l3-3c2-1,5-2,7-4,6-5,11-11,19-14,13-15,28-28,39-46,2-3,2-5,4-8,20-28,30-57,39-89,9-36,14-72,11-108-5-70-32-133-52-201-8-31-14-61-12-92,3-36,14-69,35-101,5-7,11-13,16-20,6-7,12-14,20-18l6-6c9-7,18-13,28-19,4-2,9-4,14-6,25-9,51-15,77.58-14.32"
            className="line"
          ></path>
        </svg> */}
        <div className="mt-[100px] grid-top bg-yellow-50 p-10">
          <div className="grid cell grid-cell-offset-md-1 grid-cell-md-11 ">
            <h1 className=" col-span-text-center text-blue-600 text-7xl relative z-4000">
              Adwaina Richardson
            </h1>
            <h3 className="text-center text-blue-600 text-5xl p-10">Front-End Developer</h3>
            <p className="body-text-large max-w-2xl mx-auto text-center">
              "Transforming ideas into intuitive, user-focused digital experiences through
              creativity, collaboration, and seamless code."
            </p>
          </div>

          <div className="w-[100px] flex flex-col items-center justify-center">
            <a href="#" style={{ fontSize: '50px', color: '#0077b5' }}>
              <FontAwesomeIcon icon={faPalette} />
            </a>
            <p className="text-center">Designer</p>
          </div>
        </div>
        {/* <section className="panel-wave">
        </section> */}
      </div>

      <div className="section-wrapper">
        <svg
          className="custom-svg flipped"
          id="Modo_de_aislamiento"
          data-name="Modo de aislamiento"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1800 1500"
        >
          <path
            d="M2.13,496.09C25.31,517.29,50.31,536.29,79.31,548.29c26,10,54,11,80-1,9-5,17-11,24-19,7-9,12-19,16-29,5-13,5-26,5-39,0-6,1-11,0-17-2-8-2-15-4-22-3-7-4-14-7-21-7-17-16-31-27-47-9-11-17-21-26-32-18-24-36-45-53-70-2-3-3-7-4-10-1-2-4-3-5-5-21-40-33-88-13-131,2-4,5-9,7-13C104.31,44.29,160.31,25.29,214.31,28.29c21,2,40,5,60,12,29,11,55,25,81,44,19,15,36,28,53,44,3,2,6,4,8,6,5,6,11,11,17,17,7,6,14,12,21,19,18,16,35,29,54,44,11,7,21,13,32,20,18,10,36,18,55,24,18,7,37,10,56,12,21,2,41-2,61-8,66-24,98-86,133-144,7-10,13-19,20-29,6-8,12-16,19-24,9-10,18-18,28-26,16-12,32-22,50-29,25-10,53-9,78,0,46,18,64,66,71,112,7,52,6,104,24,153,9,22,22,44,44,56l3,3c5,2,9,6,15,7,2,1,4,3,7,4,19,7,38,12,58,18,3,1,7,3,10,5h4c18,10,34,19,46,36,11,16,17,33,18,52,2,44-15,85-37,123-18,30-35,57-46,89-6,18-9,37-9,56,1,7,1,15,2,22,3,17,7,32,13,47,14,33,34,60,63,83,56,43,132,52,193,16l3-3c2-1,5-2,7-4,6-5,11-11,19-14,13-15,28-28,39-46,2-3,2-5,4-8,20-28,30-57,39-89,9-36,14-72,11-108-5-70-32-133-52-201-8-31-14-61-12-92,3-36,14-69,35-101,5-7,11-13,16-20,6-7,12-14,20-18l6-6c9-7,18-13,28-19,4-2,9-4,14-6,25-9,51-15,77.58-14.32"
            className="line"
            vector-effect="non-scaling-stroke"
          ></path>
        </svg>

        <section className="panel-wave panel-2">
          <h1>Hello world!</h1>
        </section>
      </div>
    </>
  );
};

export default WaveSections;
