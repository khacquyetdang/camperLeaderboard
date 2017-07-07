import React, { Component } from 'react';
import './styles/App.scss';

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

    myrender() {
      var ReactMarkdown = require('react-markdown');
      return (
        <div className="App">
          <h1>Mardown preview</h1>
          <div className="FlexContainer">
            <div className="FlexItem">
              box1
            </div>
            <div className="FlexItem">
              box2
            </div>
          </div>
        </div>
      );
    }

  render() {
    var ReactMarkdown = require('react-markdown');
    return (
      <div className="App">
        <h1>Mardown preview</h1>
        <div className="FlexContainer">
          <div className="FlexItem">
              <textarea className="mardownEditor"
                rows="20"
                cols="40"
                value={this.state.textOriginValue }
                onChange={this.handleChange}/>
          </div>
          <div className="FlexItem">
            <ReactMarkdown className="mardownResult" source={this.state.textMarkDownValue} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
