import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import { Carousel } from 'antd';
import { Divider } from 'antd';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';
import MyDrawer from '../components/MyDrawer.jsx';
import Laptop from '../components/devices/Laptop.jsx';
// import { Col, Divider, Row } from 'antd';
// import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import { Grid } from "antd";
const DemoBox = (props) => <p className={`height-${props.value}`}>{props.children}</p>;

const features = [
  {
    name: 'Deliverable',
    description:
      'The project deliverables included a comprehensive project plan and timeline, detailed user research documentation such as interview guides and competitor analysis, and a full set of wireframes ranging from low- to high-fidelity. Additionally, I developed a complete branding kit featuring a style guide, color palette, typography, and imagery guidelines. The final product was a fully functional, responsive WordPress website built with a custom theme, integrating WooCommerce for product sales and a seamless appointment booking system. The site was thoroughly tested across multiple devices and browsers to ensure optimal performance and usability.',
  },
  {
    name: 'My Role',
    description: 'Project Manager | UX/UI Designer | WordPress Developer ',
  },
  {
    name: 'My Responsililities',
    description:
      'My responsibilities encompassed leading the project management efforts by coordinating the team and maintaining consistent communication with the client. I conducted user research and competitive analysis to guide the design process, created wireframes, mockups, and branding assets aligned with the client’s vision. On the development side, I customized the WordPress theme to meet both aesthetic and functional requirements, integrating e-commerce and booking functionalities. I also managed the testing and quality assurance processes to deliver a polished final product, while regularly presenting milestones to the client and incorporating their feedback throughout the project.',
  },
  {
    description:
      'Directed the creation and implementation of scalable, secure solutions while adhering to industry best practices in coding and agile methodologies, optimizing performance and maintaining high standards.',
  },
  {
    name: 'The Team',
    description:
      '6 Developers, 3 UX Designers, 1 UX Researcher, 1 Brand Designer, 1 Project Manager',
  },
  {
    name: 'The Product',
    description:
      'WThe final product is a visually engaging, easy-to-navigate website designed specifically for an emerging beauty brand. It features an online store for beauty products, detailed service pages, and a streamlined appointment booking system. The site reflects the client’s unique brand personality through a cohesive and elegant design that works flawlessly across desktop and mobile devices, providing visitors with an intuitive and satisfying experience.',
  },
  {
    name: 'Project Duration',
    description: '6 months',
  },
  {
    name: 'Technologies Used',
    description:
      'The website was developed using WordPress with a fully custom theme tailored to the client’s branding and needs. WooCommerce was integrated to handle the e-commerce aspect for product sales, alongside a booking plugin (such as Calendly or Bookly) to facilitate appointment scheduling. The design and prototyping process utilized Figma, while HTML, CSS, and JavaScript were employed for theme customization and ensuring responsive behavior. Google Analytics was set up to track user engagement and provide insights for future improvements.',
  },
];
export default function Practice() {
  return (
    <>
      <Nav />

      <section>
        <div className="grid-top container bg-yellow-50 p-10">
          <div className="grid cell grid-cell-offset-md-1 grid-cell-md-11 ">
          {/* <div className="panel grid grid-cols-3 gap-8"> */}
            <h1 className=" col-span-text-center text-blue-600 text-7xl ">Adwaina Richardson</h1>
            <h3 className="text-center text-blue-600 text-5xl p-10" >Front-End Developer</h3>
            <p className="body-text-large max-w-2xl mx-auto text-center">
              "Transforming ideas into intuitive, user-focused digital experiences through
              creativity, collaboration, and seamless code."
            </p>
          </div>
        </div>
      </section>
     
      {/* Example 1 */}

      

      {/* <div className="bg-background-50 border">
        <div className="panel grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h1 className="text-center text-blue-600 text-7xl">Adwaina Richardson</h1>
            <p className="body-text-large max-w-2xl mx-auto text-center">
              "Transforming ideas into intuitive, user-focused digital experiences through
              creativity, collaboration, and seamless code."
            </p>
          </div>
        </div>
      </div> */}

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

       <section className="bg-light bg-blue-100 mg-30">
        <div>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8} offset={8}>
              col-8
            </Col>
          </Row>
          <Row>
            <Col span={6} offset={6}>
              col-6 col-offset-6
            </Col>
            <Col span={6} offset={6}>
              col-6 col-offset-6
            </Col>
          </Row>
          <Row>
            <Col span={12} offset={6}>
              col-12 col-offset-6
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
