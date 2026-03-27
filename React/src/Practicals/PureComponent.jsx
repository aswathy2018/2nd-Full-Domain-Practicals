////////////////// Using functional component, Parent to child is also ok /////////////////////tgr

import React from "react";

class PureComponent extends React.PureComponent {
  render() {
    console.log("Pure Component Rendered");
    return <h1>{this.props.name}</h1>;
  }
}

export default PureComponent;