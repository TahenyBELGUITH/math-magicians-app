import React from 'react';
import Calculator from '../components/Calculator';
import './Calculatrice.css';

export default function Calculatrice() {
  return (
    <div className="container-calc d-flex">
      <div className="inner">
        <h1>Let&apos;s do Maths !</h1>
      </div>
      <Calculator />
    </div>
  );
}
