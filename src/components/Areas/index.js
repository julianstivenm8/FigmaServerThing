import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';

class Areas extends PureComponent {

  render() {
    return (
      <section class="container">
        <div className="item header">Header</div>
        <div className="item left">Left</div>
        <div className="item content">content</div>
        <div className="item footer">footer</div>
      </section>
    );
  }
}

export default Areas;
