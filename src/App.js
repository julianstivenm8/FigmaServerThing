import React, { PureComponent } from 'react';
// import logo from './logo.svg';
// import PrimerGrid from './components/PrimerGrid'
// import Areas from './components/Areas'
// import ColumnGrid from './components/ColumnGrid'
// import RowGrid from './components/RowGrid'
// import GridImplicito from './components/GridImplicito'
// import AlineandoItem from './components/AlineandoItem'
// import AlineandoContenido from './components/AlineandoContenido'

// import Instagram from './components/Instagram'
// import Pinterest from './components/Pinterest'
import Platzi from './components/Platzi'

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
      // <PrimerGrid />
      // <Areas />
      // <ColumnGrid />
      // <RowGrid />
      // <GridImplicito />
    // <AlineandoItem/>
    // <AlineandoContenido/>
    // <Instagram />
    // <Pinterest/>
    <Platzi/>
    );
  }
}

export default App;
