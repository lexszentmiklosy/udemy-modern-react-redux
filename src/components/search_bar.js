import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'Start'
    };
  }
  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  }
}

export default SearchBar;
