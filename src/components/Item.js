import React from "react";
import styled from "styled-components";

const Wrap = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  background-color: hsl(${p => (p.index % 6) * 60}, 80%, 80%);
  background-image: url("${p => p.url}");
  background-size: cover;
  background-position: center center;
  background-blend-mode: multiply;
`;

const Background = styled.div`
  width: 100%;
  background-image: url("${p => p.url}");
  background-size: cover;
  background-position: center center;
  background-blend-mode: multiply;
`;

const Info = styled.div`
  flex: 1 0 auto;
  margin-left: 2rem;

  & h1 {
    font-style: italic;
    padding: 0.5rem;
  }

  & * {
    max-width: 42rem;
    display: block;
    background-color: #fff;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Score = styled.div`
  flex: 0 0 16rem;
  font-size: 4rem;
  text-align: right;
  color: #fff;
`;

const Rank = styled.span`font-size: 6rem;`;

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, index } = this.props;
    return (
      <Wrap index={index} url={item.embedly.thumbnail_url}>
        <Score>
          {item.hn.score}/<Rank>{index + 1}.</Rank>
        </Score>
        <Info>
          <h1>{item.hn.title}</h1>
          <a href={item.hn.url}>
            {item.hn.url.match(/[http:|https:]\/\/(.+?)\//)[1]}
          </a>
          <h3>{item.hn.by}</h3>
        </Info>
      </Wrap>
    );
  }
}
