import React, { Component } from "react";
import Loading from "../../common/Loading/Loading";
import ListItems from "../../common/ListItems/ListItems";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostList extends Component {
  state = {
    list: [],
    isLoading: false
  };

  componentDidMount() {
    this.setState({ isLoading: true }, this.handleFetchPost);
  }

  handleFetchPost = async () => {
    const res = await fetch(URL);
    const json = await res.json();
    setTimeout(() => {
      this.setState({ list: json, isLoading: false });
    }, 1000);
  };

  render() {
    const { list, isLoading } = this.state;
    return (
      <div>
        <h3>Without render-props</h3>
        {isLoading ? <Loading /> : <ListItems list={list} />}
      </div>
    );
  }
}
