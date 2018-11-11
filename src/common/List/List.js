import React, { Component } from "react";
import { func, string } from "prop-types";

export default class List extends Component {
  static propTypes = {
    renderProp: func.isRequired,
    url: string.isRequired
  };

  state = {
    list: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this.handleFetchList);
  }

  handleFetchList = async () => {
    const res = await fetch(this.props.url);
    const json = await res.json();
    setTimeout(() => {
      this.setState({ list: json, isLoading: false });
    }, 1000);
  };

  render() {
    return this.props.renderProp(this.state);
  }
}
