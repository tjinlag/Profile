import React, { Component } from 'react';

class Line extends Component {
  render() {
    return (
      <hr
        className="bg-white m-0 p-0"
        style={{ height: "0.5px", width: '100%' }}
      />
    );
  }
}

export default Line;