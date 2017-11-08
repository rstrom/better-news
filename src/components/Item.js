import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
`;

const Thumbnail = styled.div`
  flex: 0 0 auto;
  width: 8rem;
  height: 8rem;
  background: url("${p => p.url}");
  background-size: cover;
  background-position: center center;
`;

const Info = styled.div`flex: 1 0 auto;`;

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <Wrap>
        <Thumbnail url={item.embedly.thumbnail_url} />
        <Info>
          <h1>{item.hn.title}</h1>
          <a href={item.hn.url}>{item.hn.url}</a>
          <h2>{item.hn.score}</h2>
          <h3>{item.hn.by}</h3>
        </Info>
      </Wrap>
    );
  }
}
