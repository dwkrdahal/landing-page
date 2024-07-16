import React from 'react';

const services = [
  {
    title: 'Doctors Appointment',
    description: 'You can easily make an appointment with your doctor here.',
    icon: 'doctor-icon.png'
  },
  {
    title: 'Register for Membership Card',
    description: 'Get upto 20% discount on numerous services at Alka Hospital.',
    icon: 'membership-icon.png'
  },
  {
    title: 'AIMS College',
    description: 'Explore information about Alka Institute of Medical Sciences, Dhobighat, Lalitpur.',
    icon: 'college-icon.png'
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100" id='services'>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <img src={service.icon} alt={service.title} className="h-16 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
