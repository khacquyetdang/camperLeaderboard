import React, { Component } from 'react';
import './App.sass';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textOriginValue: '',
      textMarkDownValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({textOriginValue: event.target.value,
      textMarkDownValue: event.target.value,
    });
  }

  render() {
    var ReactMarkdown = require('react-markdown');
    return (
      <div className="App">
        <h1>Mardown preview</h1>
        <div class="flex-container">
          <div class="flex-item">
            <textarea className="textArea"
              rows="20"
              cols="40"
              value={this.state.textOriginValue }
              onChange={this.handleChange}/>
          </div>
          <div class="flex-item">
            <ReactMarkdown source={this.state.textMarkDownValue} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
