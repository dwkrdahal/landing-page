import React from 'react';

const About = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src="about-image.jpg" alt="About" className="rounded-lg shadow-lg" />
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-4">Alka Hospital</h2>
          <p className="text-lg text-gray-700 mb-4">
            Aiming to be a top hospital for advanced healthcare and education.
          </p>
          <p className="text-gray-600 mb-4">
            Alka Hospital, established in 2006, evolved from Alka Pharmacy (1995) and Alka Polyclinic (2000). With 100 beds, advanced diagnostic, curative facilities, and a commitment to quality healthcare.
          </p>
          <p className="text-gray-600 mb-4">
            We offer 24/7 emergency, maternity, and comprehensive medical services. Our dedicated team ensures up-to-date, compassionate care for all patients.
          </p>
          <button className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded transition duration-300">
            More About
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
