import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';

class PrimerGrid extends PureComponent {

  render() {
    return (
      <section class="container">
        <div className="item">contenido #1</div>
        <div className="item">contenido #2</div>
        <div className="item">
          <div className="item">subitem #1</div>
          <div className="item">subitem #2</div>
          <div className="item">subitem #3</div>
          <div className="item">subitem #4</div>
          <div className="item">subitem #5</div>
        </div>
        <div className="item">contenido #4</div>
        <div className="item">contenido #5</div>
        <div className="item">contenido #6</div>
        <div className="item">contenido #7</div>
        <div className="item">contenido #8</div>
        <div className="item">contenido #9</div>
        <div className="item">contenido #10</div>
        <div className="item">contenido #11</div>
        <div className="item">contenido #12</div>
      </section>
    );
  }
}

export default PrimerGrid;
