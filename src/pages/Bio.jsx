import React from 'react';
import Nav from '../components/Nav.jsx';
const Bio = () => {

  // function MyComponent() {

  return (
    <>
      <Nav />
      <section className="panel">
        <div className="two-column-layout">
          <h2 className="md:col-span-2">About Me</h2>
          <div>
            <p className="body-text">
              I’m a curious and collaborative front-end web developer with a passion for solving
              challenges and continuously learning. Whether it’s tackling a tricky bug or
              transforming a client’s vision into reality, I thrive on figuring things out and
              delivering impactful results.
            </p>
            <p className="body-text">
              With experience managing people and working in customer-focused roles, I’ve developed
              a people-first mindset. I listen carefully to clients, understand their goals, and
              create products that not only meet their expectations but often exceed them by
              uncovering deeper needs. This purpose-driven, collaborative approach keeps me
              energized and motivated in my work.
            </p>
            <p className="body-text">
              I’m currently seeking a front-end role where I can continue learning, bring creativity
              to projects, and contribute to a team’s success. I take pride in fostering a positive,
              uplifting environment, helping those around me grow, and ensuring the best outcomes
              for the entire team.
            </p>
          </div>
          <div className="bg-blue-700 rounded-xl">
            <div className="p-8 flex justify-center items-center h-full min-h-[300px]">
              <p>
                <img className="w-full sha
                w-xl rounded-xl" src="/images/bio/bio-pic.jpg" alt="Bio Pic" />
                </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// }

export default Bio;
