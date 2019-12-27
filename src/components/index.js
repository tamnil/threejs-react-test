import React, { Component, dispatch } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class Header extends Component {
  static propTypes = {};

  componentDidMount() {
    console.log(
      connect(
        this.props,
        "props header"
      )
    );
  }

  componentDidUpdate(prevProps) {}

  handleChange = nextSubreddit => {};

  handleRefreshClick = e => {
    e.preventDefault();
  };

  render() {
    return <div>myheaderxxxyyy</div>;
  }
}

export default Header;
