import React from 'react';
import Device from '../components/devices/Device.jsx';
import Nav from '../components/Nav.jsx';
import Laptop from '../components/devices/Laptop.jsx';
import EmblaCarousel from '../components/carousel/Carousel.jsx';
import CarouselSlide from '../components/carousel/CarouselSlide.jsx';
import { Carousel } from 'antd';

export default function CNE() {
  const features = [
    {
      name: 'Deliverable',
      description: 'Responsive User-Friendly Web Application',
    },
    {
      name: 'My Role',
      description: 'Project Manager | UX/UI Designer | WordPress Developer ',
    },
    {
      name: 'My Responsililities',
      description:
        'Led a team of five web developers to implement a responsive web application using Webflow, ensuring seamless experiences across desktop, tablet, and mobile devices.',
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
        "Website redesign for the Childcare Network of Evanston's (CNE), a non-profit connecting young learners and their families with high-quality, equitable early childhood experiences and resources",
    },
    {
      name: 'Project Duration',
      description: '6 months',
    },
    {
      name: 'Technologies Used',
      description: 'Figma, Relume, Webflow CMS',
    },
  ];
  return (
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-1">
          <div className="panel">
            <EmblaCarousel>
              <CarouselSlide className="py-10">
                <Laptop width="80%" imageUrl="./images/cne/desktop/c1.png" />
                <h3 className="text-center">Slide 1</h3>
              </CarouselSlide>
              <CarouselSlide>
                <h1>Slide 2</h1>
                <Laptop width="80%" imageUrl="./images/cne/desktop/c2.png" />
              </CarouselSlide>
              <CarouselSlide>
                Slide 3
                <Laptop width="80%" imageUrl="./images/cne/desktop/c3.png" />
              </CarouselSlide>
              <CarouselSlide>
                Slide 4
                <Laptop width="80%" imageUrl="./images/cne/desktop/c4.png" />
              </CarouselSlide>
            </EmblaCarousel>
          </div>

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
        </div>
      </section>

      {/* Introduction */}
      <div style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel">
          <section className="two-column-layout">
            <div>
              <h2 className="h2-small">The Challenge</h2>
              <p className="text-lg">
                The Childcare Network of Evanston wanted to refresh their online presence and
                improve the site's information organization. Some specific needs included making the
                site easier to update and customize, improving navigation and usability, and
                implementing accessibility features and a mobile-friendly, responsive design.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Goal</h2>
              <p className="text-lg">
                The website redesign aimed to create a user-friendly, modern, and engaging site
                where users could easily find relevant resources. This included helping parents
                access quality, affordable early childhood education; and keeping the community
                up-to-date about CNE events and initiatives. CNE also wanted an easy, intuitive way
                to update content while maintaining a consistent look and feel.
              </p>
            </div>
          </section>
        </div>
      </div>

      <div className="bg-gray-50">
        <div className="panel">
          <section className="two-column-layout">
            <div className="bg-red-100">
              <div className="p-8 flex justify-center  items-center h-full min-h-[300px]">
                <p>
                  <img src="./images/cne/desktop/p4a.png" />
                </p>
              </div>
            </div>
            <dl className="mt-10 space-y-6 text-gray-900">
              {features.map((feature, index) => (
                <div key={index} className="relative">
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
        <div className="panel grid grid-cols-1 md:grid-cols-3">
          <div>
            <h2 className="h2-small text-white">Homepage</h2>
            <p className="text-lg text-white">
              We redesigned the CNE homepage to be welcoming to a wide range of visitors, including
              families, community educators, and donors. The hompage showcases CNE's services,
              current initiatives, and impact through an engaging, accessible design. It also
              highlights key accomplishments, answers common questions, and offers an easy way to
              connect.
            </p>
            <p className="text-lg text-white">TODO: Add the mobile version of the homepage</p>
          </div>

          {/* Right column */}
          <div className="flex gap-2 mt-5 md:mt-0  md:col-span-2">
            <Laptop
              width="80%"
              imageUrl="./images/cne/desktop/carousel.gif"
              showScrollIndicator={false}
            />
            {/* <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
            <Device width="200px" className="top-[-30px]" imageUrl="/images/cne/mobile/ccap.png" /> */}
          </div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-[#F9F9F9]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-abril mb-6 text-gray-900 ">Program Pages</h2>
            <p className="text-lg text-gray-900">
              To help parents and caregivers understand the importance of early childhood education,
              we created a simple program overview page, organized by age group. This page provides
              a clear and accessible explanation of CNE's various programs, including home visits,
              developmental screenings, childcare providers and supports, and more.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device width="200px" imageUrl="/images/cne/mobile/ccap.png" />
            <Device
              width="200px"
              className="top-[-30px]"
              imageUrl="/images/cne/mobile/programs-overview.png"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#F9F9F9]">
        <div className="panel two-column-layout">
          {/* Left column */}
          <div>
            <h2 className="text-3xl font-abril mb-6 text-gray-900">Navigation and Translation</h2>
            <p className="text-lg text-gray-900">
              Say some stuff about navigation and translation featured.
            </p>
          </div>

          {/* Right column */}
          <div className="flex gap-5">
            <Device
              width="300px"
              imageUrl="/images/cne/mobile/nav-mobile.gif"
              showScrollIndicator={false}
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Impact</h2>
          <p className="text-lg text-gray-900 mb-12">
            This page highlights CNE's impactful role as a leader in early childhood education. It
            shows their dedication to providing every child with a Strong Start to Kindergarten
            through initiatives like home visits, developmental screenings, and trauma-informed
            care.
          </p>
          {/* <img className="w-full" src="/images/cne/desktop/CNE_Impact.png" alt="CNE Impact" /> */}
          <Laptop
            width="100%"
            imageUrl="/images/cne/desktop/impact-higher-def.gif"
            showScrollIndicator={false}
          />
          {/* <img className="w-[400px]" src="/images/cne/desktop/impact.gif" alt="CNE Impact" /> */}
        </div>
      </section>
    </>
  );
}
