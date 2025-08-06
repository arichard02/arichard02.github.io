import React from 'react';
// import Device from '../components/Device.jsx';
import Nav from '../components/Nav.jsx';
import Device from '../components/devices/Device.jsx';
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
            <h2 className="text-white text-center">Embrace Your Crown</h2>
            <p className="text-white text-center text-xl">Website Build & Design </p>
          </div>

          {/* Section 1 */}
          <section className="bg-[#71abf1] flex flex-col justify-center items-center h-full">
            <div className="panel one-column-layout">
               <img src="/images/eyc/eyc2.png"/>
              {/* Left column */}
              {/* <div>
                <h2 className="mb-6">Services</h2>
                <p>EYC text goes here...</p>
              </div> */}

              {/* Right column */}
              {/* <div className="flex gap-5">
                <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
                <Device
                  width="200px"
                  className="top-[-30px]"
                  imageUrl="/images/cne/mobile/ccap.png"
                />
              </div> */}
            </div>
          </section>

          {/* Section 2 */}
          <section className="bg-[#71abf1]">
            <div className="panel one-column-layout">
              {/* Left column */}
              {/* <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
                <h2 className="mb-10">Products</h2>
                {/* <p>text text text</p> */}
                <img src="/images/eyc/eyc_1.png"/>
              {/* Right column */}
              {/* <div className="flex gap-5">
                <Device width="200px" imageUrl="/images/cne/mobile/homepage.png" />
                <Device
                  width="200px"
                  className="top-[-30px]"
                  imageUrl="/images/cne/mobile/ccap.png"
                />
              </div> */}
            </div>
          </section>
        </div>
      </section>
      {/* adding gradient section here */}
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
      <div style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel">
          <section className="three-column-layout">
            <div>
              <h2 className="h2-small">The Challenge</h2>
              <p className="text-lg">
               Build a website that markets beauty products and services while providing appointment scheduling — all aligned with a fresh, unique brand identity.
              </p>
            </div>
            <div>
              <h2 className="h2-small">The Solution</h2>
              <p className="text-lg">
                 Led the project from research to launch, designing wireframes and mockups, creating a brand style guide, and developing a custom WordPress site with e-commerce and booking features.
              </p>
            </div>

            <div>
              <h2 className="h2-small">The Result</h2>
              <p className="text-lg">
              The site launched on time, driving over 150 bookings in month one and earning strong client praise for its cohesive design and functionality.
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
                  <h3 className="h3-underlined">Portfolio Materials</h3>
                  <p className="body-text">
                    You've already done a ton of work on the portfolios. Please review the work
                    you've already done and incorporate the text, notes, and images you've already
                    written:
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
                        Visual design 101: How to develop your own look and feel while following
                        best design practices.
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
          <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}>
        <div className="panel max-w-4xl m-auto">
          <h2 className="text-3xl font-abril mb-6 text-gray-900">Services</h2>
          <p className="text-lg text-gray-900 mb-12">
             
          </p>
          <img className="w-full" src="/images/eyc/eyc_1.png" alt="CNE Impact" />
        </div>
      </section>
        </div>
      </div>
    </>
  );
}
