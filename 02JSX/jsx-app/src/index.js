import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const placeholder = 'New blog';
const elem = (
  <div>
    <h2 className='text'>{['RA', ' Lorem']}</h2>
    <input type="text" placeholder={placeholder} />
    <input type="submit" value={'Enter'}/>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem,
);


