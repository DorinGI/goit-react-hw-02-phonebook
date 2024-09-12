import React from 'react';
import ContactItem from './ContactItem.jsx';
import style from './Contact.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={style.contactList}>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
