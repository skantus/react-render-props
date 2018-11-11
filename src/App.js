import React, { Component } from "react";
import PostListNoRenderProps from "./components/PostListNoRenderProps/PostList";
import PostListWithRenderProps from "./components/PostListWithRenderProps/Posts";
import Post2ListWithRenderProps from "./components/Post2ListWithRenderProps/Posts";
import { Container, Row, Col } from "fluid-react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Container>
            <Row>
              <Col>
                <PostListNoRenderProps />
              </Col>
              <Col>
                <PostListWithRenderProps />
              </Col>
              <Col>
                <Post2ListWithRenderProps />
              </Col>
            </Row>
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
