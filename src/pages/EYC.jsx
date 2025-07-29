import React from 'react';
// import Device from '../components/Device.jsx';
import Nav from '../components/Nav.jsx';
import Device from '../components/devices/Device.jsx'
export default function EYC() {
  // {/* Section 3 */}

  const features = [
    {
      name: 'Deliverable',
      description: 'Responsive User-Friendly Web Application',
    },
    {
      name: 'My Role',
      description: 'Project Manager ',
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

  // no varible or functions below this line, only markup
  return (
    // all react components have to return a single element
    <>
      <Nav />
      {/* Homepage 1 */}
      <section className="bg-[#185977]">
        {/* Left column */}
        <div className="panel grid grid-cols-1 md:grid-cols-3">
          <div className="flex flex-col justify-center items-center h-full">
            <h2 className="text-white text-center">Childcare Network of Evanston</h2>
            <p className="text-white text-center text-xl">Website Redesign</p>
          </div>

          {/* Section 1 */}
          <section className="bg-[#f1ce71]">
            <div className="panel two-column-layout">
              {/* Left column */}
              <div>
                <h2 className="mb-6">Embrace Your Crown</h2>
                <p>EYC text goes here...</p>
              </div>

              {/* Right column */}
              <div className="flex gap-5">
                <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
                <Device
                  width="200px"
                  className="top-[-30px]"
                  imageUrl="/images/cne/mobile/ccap.png"
                />
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-[#F0F0F0]">
            <div className="panel two-column-layout">
              {/* Left column */}
              <div>
                <h2 className="mb-6">Blah blah blah</h2>
                <p>text text text</p>
              </div>

              {/* Right column */}
              <div className="flex gap-5">
                <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
                <Device
                  width="200px"
                  className="top-[-30px]"
                  imageUrl="/images/cne/mobile/ccap.png"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
      {/* adding gradient section here */}

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

      {/* add role */}
       <div className="bg-gray-50">
        <div className="panel">
          <section className="two-column-layout">
            <div className="bg-gray-200">
              <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
                <p>
                  <img src=""></img>
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
    </>
  );
}
