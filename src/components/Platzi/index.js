import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';
import house from '../../Assets/image/platzi/badge.png';


class Platzi extends PureComponent {

  render() {
    return (
      <div class="hero">
        <div class="hero-container">
          <div class="badge">
        <img src={house} alt=""></img>
      </div>
          <h1 class="title">
            Curso de React.js
      </h1>
          <div class="description">
            <p>React es una de las librerías más utilizadas hoy en día para crear aplicaciones web. En este curso podrás dominar la creación de aplicaciones a través de un proyecto que te ayudará a explotar todas las capacidades de esta librería.</p>
          </div>
          <form action="" class="form">
        <p>Regístrate a Platzi</p>
        <input type="text" placeholder="Nombre"></input>
        <input type="email" placeholder="Correo Electrónico"></input>
        <button type="submit">Comienza ahira</button>
      </form>
          <div class="countdown">
            <p>Lanzamiento:</p>
            <p>
              <span>01d</span>
              <span>03h</span>
              <span>09m</span>
              <span>05s</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Platzi;
