import React, { PureComponent } from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends PureComponent {

  state = {
    images: [
      { name: '', url: '' }
    ]
  }

  componentDidMount() {
    fetch('/components')
      .then(res => res.json())
      .then(data => this.setState({ images: data }))
      .catch(error => console.log(error));
  }
  render() {
    return (
      // <div className="App" >
      //   {this.state.images.map(
      //     (frame, i) =>
      //       <div key={i} >
      //         <img src={frame.url} alt={"figma component"} />
      //         <p>{frame.name}</p>
      //       </div>
      //   )}
      // </div>
      <section class="container">
        <div className="item">contenido #1</div>
        <div className="item">contenido #2</div>
        <div className="item">contenido #3</div>
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

export default App;
