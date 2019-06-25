import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';

class RowGrid extends PureComponent {

  render() {
    return (
      <section class="container">
        <div className="item">contenido #1</div>
        <div className="item">contenido #2</div>
        <div className="item">contenido #3  </div>
        <div className="item">contenido #4</div>
        <div className="item">contenido #5</div>
        <div className="item">impl</div>
        <div className="item">impl</div>
        <div className="item">impl</div>
        <div className="item">impl</div>

      </section>
    );
  }
}

export default RowGrid;
