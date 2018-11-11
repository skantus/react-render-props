import React, { Component } from "react";
import Loading from "../../common/Loading/Loading";
import List from "../../common/List/List";
import ListItems from "../../common/ListItems/ListItems";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default class Posts extends Component {
  render() {
    return (
      <List
        url={URL}
        renderProp={({ list, isLoading }) => {
          return (
            <div>
              <h3>New list With render-props</h3>
              {isLoading ? <Loading /> : <ListItems list={list} />}
            </div>
          );
        }}
      />
    );
  }
}
