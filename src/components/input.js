import React from 'react'
import './input.css'

const input = ({ type, placeholder, value, onChange }) => {
  return (

    <input 
      value={value} 
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
 /* <C.input 
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}  
    />*/
  );
};

export default input;