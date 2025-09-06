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
      {/* Left column */}
      <div className="bg-background-50 border bg-yellow-50">
        {/* <div className="panel grid grid-cols-1 md:grid-cols-3 bg-yellow-50 h-full"></div> */}
        <div className="flex flex-col h-full">
          <h2 className="text-center">Embrace Your Crown</h2>
          <p className="text-center text-xl">Website Build & Design </p>
        </div>

        {/* Section 1 */}

        <section className="col-span-2 bg-[white] flex flex-col h-full">
          <img src="/images/eyc/eyc_1.png" />
        </section>
      </div>
      <div className="bg-yellow-50">
        {/* <div style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}> */}
        <div className="panel">
          <section className="three-column-layout">
            <div>
              <h2 className="h2-small text-center mt-10 mb-5">Client Objective</h2>
              <p className="text-lg">
                <p>
                  The client, a beauty industry professional, was launching her own brand and needed
                  a website that would serve as a central hub for her business. Her goals included:
                </p>

                <ul>
                  <li>Showcasing a branded line of beauty products</li>
                  <li>
                    Promoting her salon services: hair care, beauty treatments, and beard grooming
                  </li>
                  <li>Enabling clients to book and schedule appointments online</li>
                  <li>
                    Establishing a cohesive, premium brand identity through a custom website design
                    that reflects her aesthetic and professionalism
                  </li>
                </ul>
              </p>
            </div>
            <div>
              <h2 className="h2-small text-center mt-10 mb-5 ">Strategy</h2>
              <p className="text-lg">
                To support her business launch, the strategy was focused on creating a seamless,
                conversion-friendly user experience that supported product visibility, service
                bookings, and brand recognition. Key strategic goals included:
              </p>
              <ul>
                <li>
                  Brand Positioning: Define and communicate her unique value in a competitive beauty
                  market
                </li>
                <li>
                  User Experience (UX): Ensure easy navigation, fast access to services, and mobile
                  responsiveness
                </li>
                <li>
                  Conversion Optimization: Encourage product purchases and appointment bookings
                  through intuitive UI/UX design
                </li>
                <li>
                  Scalability: Build on a platform that can grow with her business as new services
                  or products are added
                </li>
              </ul>
            </div>

            <div>
              <h2 className="h2-small text-center mt-10 mb-5">The Result</h2>
              <p className="text-lg">
                Upon launch, the website successfully positioned the client’s brand in the beauty
                and grooming space, with strong early engagement and positive client feedback. Key
                outcomes included:
              </p>
              <ul>
                <li>
                  Professional Online Presence: A visually compelling site that clearly communicates
                  services and brand values
                </li>
                <li>
                  Streamlined Appointment Booking: Reduction in manual scheduling, improved client
                  experience
                </li>
                <li>
                  Increased Product Exposure: Clear product display and shopping options led to
                  early online sales
                </li>
                <li>
                  Client Autonomy: Easy content updates and management without needing technical
                  support
                </li>
              </ul>
              <div>
              <p className="h2-small text-center mt-10 mb-5">
                "The client reported a noticeable increase in appointment bookings and customer
                interest within the first few weeks of launch."
              </p>
              </div>
            </div>
          </section>
        </div>
      </div>
      {/* add role */}
      {/* <div className="bg-[#f1ce71-200]"> */}
       <div className="bg-yellow-50">
        <div className="panel">
          <section className="one-column-layout">
            <div className="bg-gray-200">
              {/* <div className="p-16 flex justify-center  items-center h-full min-h-[300px]">
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
                  <img src="/images/bio/bio-pic.jpg" />
                </p>
              </div> */}
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
          {/* <section style={{ backgroundImage: 'linear-gradient(90deg, #bce2f6, #e8def1)' }}> */}
         
          <section className='bg-yellow-100'>
            <section></section>
            <div className="panel max-w-4xl m-auto">
              <h2 className="text-3xl font-abril mb-6 text-gray-900">Services</h2>
              <p className="text-lg text-gray-900 mb-12"></p>
              <div>
                {/* Add screenshot of services */}
                {/* <img className="w-full" src="/images/eyc/eyc_1.png" alt="EYC Hero" /> */}
              </div>
            </div>
          </section>
        
    </>
  );
}
