import React from 'react';
import style from './Contact.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
  <li key={id} className={style.contactItem}>
    <span className={style.contactName}>{name}</span>
    <span className={style.contactNumber}>{number}</span>
    <button className={style.deleteButton} onClick={() => onDeleteContact(id)}>
      Delete
    </button>
  </li>
);

export default ContactItem;
