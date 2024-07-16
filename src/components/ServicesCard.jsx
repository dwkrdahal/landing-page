import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faLeaf, faBuilding, faBell } from '@fortawesome/free-solid-svg-icons';

const ServicesCard = ({ service }) => {
  let icon;
  switch (service.icon) {
    case 'fas fa-plus':
      icon = faPlus;
      break;
    case 'fas fa-leaf':
      icon = faLeaf;
      break;
    case 'fas fa-building':
      icon = faBuilding;
      break;
    case 'fas fa-bell':
      icon = faBell;
      break;
    default:
      icon = faPlus;
  }

  return (
    <div className="text-center p-4 bg-white rounded shadow-md">
      <div className="text-first-color text-4xl mb-4">
        <FontAwesomeIcon icon={icon} />
      </div>
      <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServicesCard;
