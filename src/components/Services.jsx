import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLeaf, faCheck, faBell } from '@fortawesome/free-solid-svg-icons';

const services = [
  {
    title: 'Land Consultation',
    description: 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.',
    icon: faPlus,
  },
  {
    title: 'Home Design',
    description: 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.',
    icon: faLeaf,
  },
  {
    title: 'Building Permit',
    description: 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.',
    icon: faCheck,
  },
  {
    title: 'Interior Design',
    description: 'Never in all their history have men been able truly to conceive of the world as one: a single sphere, a globe, having the qualities of a globe.',
    icon: faBell,
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        <h2 className="services-title">Your Dream Home With Our Home Experts</h2>
        <div className="services-items">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              <div className="service-icon">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="service-image">
        <img src="image-1.jpg" alt="Service" />
      </div>
    </div>
  );
};

export default Services;
