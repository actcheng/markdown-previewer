import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// npm install --save marked
import marked from 'marked';

let defaultInput = '# Welcome to my React Markdown Previewer!\n'+
                    '## This is a sub-heading... \n'+
                    '### And here\'s some other cool stuff: \n\n'+
                    'Heres some code, `<div></div>`, between 2 backticks.\n\n'+
                    '```\n// this is multi-line code:\n\n'+
                    'function anotherExample(firstLine, lastLine) {\n'+
                    '  if (firstLine == \'```\' && lastLine == \'```\') {\n'+
                    '    return multiLineCode;\n  }\n}\n```\n\n'+
                    'You can also make text **bold**... whoa!\n'+
                    'Or _italic_.\n'+
                    'Or... wait for it... **_both!_**\n'+
                    'And feel free to go crazy ~~crossing stuff out~~.\n\n'+
                    'There\'s also [links](https://www.freecodecamp.com), and\n'+
                    '> Block Quotes!\n\n'+
                    'And if you want to get really crazy, even tables:\n\n'+
                    'Wild Header | Crazy Header | Another Header?\n'+
                    '------------ | ------------- | ------------- \n'+
                    'Your content can | be here, and it | can be here...\n'+
                    'And here. | Okay. | I think we get it.\n\n'+
                    '- And of course there are lists.\n'+
                    '  - Some are bulleted.\n'+
                    '     - With different indentation levels.\n'+
                    '        - That look like this.\n\n\n'+
                    '1. And there are numbererd lists too.\n'+
                    '1. Use just 1s if you want! \n'+
                    '1. But the list goes on...\n'+
                    '- Even if you use dashes or asterisks.\n'+
                    '* And last but not least, let\'s not forget embedded images:\n\n'+
                    '![React Logo w/ Text](https://goo.gl/Umyytc)\n'

marked.setOptions({
      breaks: true
    });

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
    let hmtlToShow = {__html:marked(this.props.input)};
    return (
      <div id="preview-window" className="window">
        <h2 className="title-bar"> Previewer </h2>
        <div id="preview" className="textbox" dangerouslySetInnerHTML={hmtlToShow} />

      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: defaultInput
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
