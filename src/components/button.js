import React from 'react'
import "./button.css"

const button = ({ text, onClick, type = "button" }) => {
  return (

    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default button