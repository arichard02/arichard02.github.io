import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import { Carousel } from 'antd';
import { Divider } from 'antd';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';
import MyDrawer from '../components/MyDrawer.jsx';
import Laptop from '../components/devices/Laptop.jsx';



export default function Test() {


  
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

  return (
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-1">
          <div>
            <div className='bg-blend-lighten'>
              <Carousel autoplay>
                <div>
                  <h3> <img src="./images/cne/desktop/c1.png"/></h3>
                  <img/>
                </div>
                <div>
                  <img src="./images/cne/desktop/c2.png"/>
                </div>
                <div>
                  <img src="./images/cne/desktop/c3.png"/>
                </div>
                <div>
                  <img src="./images/cne/desktop/c4.png"/>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      <section>
        <MyDrawer />
      </section>

      <section>
        <Laptop width="80%" imageUrl="./images/cne/desktop/ccap.png" />
      </section>

      <section className="panel">
        <EmblaCarousel>
          <CarouselSlide className="py-28">
            <Laptop width="80%" imageUrl="./images/cne/desktop/ccap.png" />
            <h3 className="text-center">Slide 1</h3>
          </CarouselSlide>
         <CarouselSlide className="py-28">
            <Laptop width="80%" imageUrl="./images/cne/desktop/ccap.png" />
            <h3 className="text-center">Slide 2</h3>
          </CarouselSlide>
         <CarouselSlide className="py-28">
            <Laptop width="80%" imageUrl="./images/cne/desktop/ccap.png" />
            <h3 className="text-center">Slide 3</h3>
          </CarouselSlide>
        </EmblaCarousel>
      </section>

      {/* Introduction */}
      <div style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel">
          <section className="two-column-layout">
            <div>
              <h2 className="h2-small">The Challenge</h2>
              <p className="text-lg">
                The client, a new beauty entrepreneur, needed a website that not only effectively
                showcased her diverse product line and grooming services but also provided a
                seamless, easy-to-use appointment booking system. The challenge was to create a
                visually compelling, brand-aligned online presence that appealed to a wide audience
                while ensuring smooth functionality across devices.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                The goal was to design and develop a fully responsive, user-friendly website that
                effectively highlights the client’s beauty products and grooming services while
                simplifying the appointment booking process. The site needed to establish a unique
                and cohesive brand identity through an elegant, accessible design that would engage
                a diverse audience, including potential customers and community stakeholders.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="panel">
          <section className="one-column-layout">
            <div className="bg-gray-200">
              <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
                <p>
                  <img src=""/>
                </p>
              </div>
            </div>
            <dl className="mt-10 space-y-8 text-gray-900">
              {features.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="inline font-semibold text-gray-900">{feature.name}</dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </div>

      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel two-column-layout">
          <div>
            <h2 className="h2-small text-white">Homepage</h2>
            <p className="text-lg text-white">
              We redesigned the CNE homepage to be welcoming to a wide range of visitors, including
              families, community educators, and donors. The hompage showcases CNE's services,
              current initiatives, and impact through an engaging, accessible design. It also
              highlights key accomplishments, answers common questions, and offers an easy way to
              connect.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5 mt-10 md:mt-0">
            <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/cne/mobile/ccap.png" />
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F9F9F9]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact & Program Pages</h2>
            <p className="text-lg text-gray-900">
              This page highlights CNE's impactful role as a leader in early childhood education. It
              shows their dedication to providing every child with a Strong Start to Kindergarten
              through initiatives like home visits, developmental screenings, and trauma-informed
              care.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/impact.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/cne/mobile/programs-overview.png"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Programs</h2>
          <p className="text-lg text-gray-900 mb-12">
            To help parents and caregivers understand the importance of early childhood education,
            we created a simple program overview page, organized by age group. This page provides a
            clear and accessible explanation of CNE's various programs, including home visits,
            developmental screenings, childcare providers and supports, and more.
          </p>
          <img className="w-full" src="/images/cne/desktop/impact.png" alt="CNE Impact" />
        </div>
      </section>
    

      
      <section className="panel">
        <h2>Resume / Portfolio Tips</h2>

        <Laptop width="80%" imageUrl="./images/cne/desktop/ccap.png" />

        <h3 className="h3-underlined">Installation</h3>
        <ol>
          <li>Fork the repository</li>
          <li>
            Rename your repo to <code>your-github-username.github.io</code>
          </li>
          <li>Turn on GitHub Pages</li>
          <li>
            On your local computer, open a brand new VS Code window. Click on the version control
            tab on the left-hand side (it looks like a branch).
          </li>
          <li>
            Click on the "clone repository" button. It should prompt you to log in. Pick the
            repository you want to clone.
          </li>
          <li>VERY CAREFULLY, select the folder where you would like to store your portfolio.</li>
          <li>Once that's done, open your integrated terminal in VS Code</li>
          <li>
            Install the dependencies: <br />
            <code>
              cd portfolio
              <br />
              npm install
            </code>
          </li>
          <li>
            Run the development server: <br />
            <code>npm run dev</code>
          </li>
        </ol>
        <p className="body-text">
          Note that because this is a React App, you will have to navigate to your portfolio on the
          command line and run <code>npm run dev</code> in order to see your changes in the browser.
        </p>

        <h3 className="h3-underlined">Using Tailwind CSS & React</h3>
        <p className="body-text">
          Tailwind is a mobile-first CSS framework that allows you to build complex designs by
          combining simple, predefined classes together (just like combo classes in Webflow). It's a
          great way to get started with CSS and to build responsive designs.
        </p>
        <ul>
          <li>
            <a
              className="link-highlight"
              href="https://tailwindcss.com/docs/installation/using-vite"
              target="_blank"
            >
              Tailwind Documentation
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://pagedone.io/docs/tailwind-cheat-sheet"
              target="_blank"
            >
              Tailwind Cheatsheet
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://yw-tech-react-course.notion.site/46cff03a6e9d49e8a21cec8afb6496fa?pvs=25"
              target="_blank"
            >
              React course from last winter
            </a>
          </li>
          <li>
            <a className="link-highlight" href="https://tailwindcss.com/plus" target="_blank">
              Available Tailwind Components (Tailwind Plus)
            </a>
          </li>
        </ul>

        <h3 className="h3-underlined">Portfolio Materials</h3>
        <p className="body-text">
          You've already done a ton of work on the portfolios. Please review the work you've already
          done and incorporate the text, notes, and images you've already written:
        </p>
        <ul>
          <li>Use "I" statements and strong action verbs for the work that you did.</li>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/document/d/16VYRdQNUN-sj2xRtOgsBOM7L-l5-qtN_frbHS4Sm-Gc/edit?tab=t.0#heading=h.n6p4t07y3g2w"
              target="_blank"
            >
              Everyone's Bios
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://drive.google.com/drive/u/1/folders/1hnWrpHz3Jgo7aemEpWTppmd2h_a5-LBf"
              target="_blank"
            >
              Case Study (Google Slides)
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/spreadsheets/d/1lz_a0_cAMXsJCYw1dX8i5GjUDoGM1rt4oNR27M8jRGo/edit?gid=0#gid=0"
              target="_blank"
            >
              Examples of other case studies
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/presentation/d/1KGZ5IQGQ1-RL5s-ooUUNMmjTB4Yt1f3z1m4YlsiXfH0/edit?slide=id.p#slide=id.p"
              target="_blank"
            >
              Visual design 101: How to develop your own look and feel while following best design
              practices.
            </a>
          </li>
          <li>
            <a
              className="link-highlight"
              href="https://docs.google.com/presentation/d/1f-tours2Cer9_UUTwNX6jyk17LYqbu1PUSugN0K2pxg/edit?usp=sharing"
              target="_blank"
            >
              AUX Presentation to Advisory Board
            </a>
          </li>
          <li>EYC Presentation to Advisory Board: I can't access this one.</li>
        </ul>
     </section>
    </>
  );
}

