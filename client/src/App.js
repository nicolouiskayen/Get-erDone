import React, { Component } from 'react';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <p>Hello World {this.props.batman}</p>       
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { batman: state.counter.counter };
}

export default connect(mapStateToProps, null)(App);
