import React, { Component } from "react";
import Header from "../components/Header";

class Page extends Component {
  render() {
    return (
      <div>
        <Header />
        <p>Hey I'm the Page component</p>
        {this.props.children}
      </div>
    );
  }
}

export default Page;
