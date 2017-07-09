import React, { Component } from 'react';
import './styles/App.sass';
import Prism from 'prismjs'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textOriginValue: '',
      textMarkDownValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.CodeBlock = this.CodeBlock.bind(this);
    this.getMarkdownText = this.getMarkdownText.bind(this);
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

    CodeBlock(props) {
      var html = Prism.highlight(props.literal, Prism.languages[props.language]);
      var cls = 'language-' + props.language;

      return (
        <pre className={cls}>
          <code
            dangerouslySetInnerHTML={{__html: html}}
            className={cls}
          />
        </pre>
      )
    }
  rendermarkdown() {
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
            <ReactMarkdown className="mardownResult"
              renderers={{CodeBlock: this.CodeBlock}}
              source={this.state.textMarkDownValue}
              />
          </div>
        </div>
      </div>
    );
  }


  getMarkdownText() {
    var marked = require('marked');
    var renderer = new marked.Renderer();
    marked.setOptions({
      highlight: function (code, language) {
        return Prism.highlight(code, Prism.languages[language]);
      }
    });


    var rawMarkup = marked(this.state.textMarkDownValue);
    return { __html: rawMarkup };
  }
  render() {

    return (
      <div className="App">
        <h1>Mardown preview</h1>
        <div className="FlexContainer">
          <div className="FlexItem">
              <textarea className="mardownEditor"
                value={this.state.textOriginValue }
                onChange={this.handleChange}/>
          </div>
          <div className="FlexItem">
            <div className="mardownResult"
              dangerouslySetInnerHTML={this.getMarkdownText()}/>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
