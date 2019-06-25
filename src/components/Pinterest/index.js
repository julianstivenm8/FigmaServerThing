import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';
import house from '../../Assets/image/house.webp';
import landing from '../../Assets/image/landing.webp';
import tshirt from '../../Assets/image/tshirt.webp';

class Pinterest extends PureComponent {

  render() {
    return (
      <div class="container">
        <div class="item level-1">
          <img src={house} alt=""></img>
        </div>
        <div class="item level-2">
          <img src={landing} alt=""></img>
        </div>
        <div class="item level-3">
          <img src={tshirt} alt=""></img>
        </div>
        <div class="item level-1">
          <img src={house} alt=""></img>
        </div>
        <div class="item level-2">
          <img src={landing} alt=""></img>
        </div>
        <div class="item level-3">
          <img src={tshirt} alt=""></img>
        </div>
        <div class="item level-1">
          <img src={house} alt=""></img>
        </div>
        <div class="item level-2">
          <img src={landing} alt=""></img>
        </div>
        <div class="item level-3">
          <img src={tshirt} alt=""></img>
        </div>
        <div class="item level-1">
          <img src={house} alt=""></img>
        </div>
        <div class="item level-2">
          <img src={landing} alt=""></img>
        </div>
        <div class="item level-3">
          <img src={tshirt} alt=""></img>
        </div>
      </div>
    );
  }
}

export default Pinterest;
