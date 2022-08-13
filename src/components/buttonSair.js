import React from 'react'
import "./buttonSair.css"

const buttonSair = ({ text, onClick, type = "button" }) => {
  return (

    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default buttonSair;