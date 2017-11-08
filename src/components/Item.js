import React from "react";
import styled from "styled-components";

const Wrap = styled.div`flex: 0 0 auto;`;

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <Wrap>
        <h1>{item.title}</h1>
        <a href={item.url}>{item.url}</a>
        <h2>{item.score}</h2>
        <h3>{item.by}</h3>
      </Wrap>
    );
  }
}
