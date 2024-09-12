import React from 'react';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className="contact-item">
    <span className="contact-name">{name}</span>
    <span className="contact-number">{number}</span>
    <button className="delete-button" onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
