import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event.target.value)
  }
  render() {
    return (
      <div id="editor-window" className="window">
        <h2 className="title-bar">Editor</h2>
        <div className="textbox">
        <textarea
          rows="20" cols="60"
          id="editor"
          value={this.props.input}
          onChange={this.handleChange} />
        </div>
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="preview-window" className="window">
        <h2 className="title-bar"> Previewer </h2>
        <div id="preview" className="textbox">
        {this.props.input}
        </div>
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 'Please enter your markdown here'
    }
    this.handleChange = this.inputChange.bind(this);
  }

  componentDidMount () {
          const script = document.createElement("script");
          script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
          script.async = true;
          document.body.appendChild(script);
      }

  inputChange = (newInput) => {
    this.setState({ input : newInput  })
  }

  render() {
    return (
      <div className="App container">
        <Editor onHandleChange={this.inputChange} input={this.state.input}/>
        <Previewer input={this.state.input} />
      </div>

    );
  }
}

/*
<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
    className="App-link"
    href="https://reactjs.org"
    target="_blank"
    rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>
*/

export default App;