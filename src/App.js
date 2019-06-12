import React, { Component } from 'react';
import styles from './css/main.css'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Input your name'
    }
  }

  render() {
    const name = this.state.name;

    return (
      <div className="container row">
        <div>
          <h1 className="input_name">{name}</h1>
          <input type="text" value={name} onChange={ e  => { this.setState({ name: e.target.value }) }} />
        </div>

        <div>
          <textarea value={this.state.textAreaValue} onChange={this.onChangeText} />
        </div>

        <div>
          <button onClick={this.onClick}>送信</button>
        </div>

      </div>
    );
  }
}


