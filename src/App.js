import React, { Component } from 'react';
import CamperLeadBoard from './components/CamperLeadBoard.js';
import './styles/App.sass';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CamperLeadBoard></CamperLeadBoard>
      </div>
    );
  }

}

export default App;
