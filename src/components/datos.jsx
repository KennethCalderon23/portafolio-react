import React from 'react';
import fotoKenneth from '../assets/foto1.jpg'; 
const Datos = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={fotoKenneth} alt="Kenneth Calderón" className="avatar" />
      <h1>Kenneth Calderón</h1>
      <p>Edad: 21 años</p>
      <p>Email: calderonisaack@gmail.com</p>
      <p>Numero: 0963304700</p>
    </div>
  );
};

export default Datos;
