import React from 'react';
import style from './Contact.module.css';

const Filter = ({ value, onChange }) => (
  <div className={style.filter}>
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  </div>
);

export default Filter;
