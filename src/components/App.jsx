import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Jone',
    };
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}
        />
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
