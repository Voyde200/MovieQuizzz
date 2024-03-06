import React from 'react';

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      {"Valider"}
    </button>
  );
};

export default Button;
