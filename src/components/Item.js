import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const Wrap = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  background-color: hsl(${p => (p.index % 6) * 60}, 95%, 85%);
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
  flex: 0 0 auto;
  margin-left: 2rem;

  & h1 {
    width: 42rem;
    margin-right: 2rem;
    display: block;
    background-color: #fff;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    box-shadow: 0.5rem 0.5rem 1px rgba(0, 0, 0, 0.3);
    color: #000;
    underline: none;
    font-style: italic;
    padding: 0.5rem;
  }

  & h1 span {
    display: block;
    font-size: 1rem;
    font-style: normal;
  }

  & p {
    padding: 0 0.5rem;
    background: rgba(255, 255, 255, 0.8);
  }
`;

const Rank = styled.div`
  flex: 0 0 8rem;
  font-size: 6rem;
  text-align: right;
  color: #fff;
  text-shadow: 0.1rem 0.1rem 1px rgba(0, 0, 0, 0.5);
`;

const Score = styled.span`
  flex: 0 0 12rem;
  font-size: 2rem;
  text-align: right;
  color: #fff;
  text-shadow: 0.1rem 0.1rem 1px rgba(0, 0, 0, 0.5);
`;

const By = styled.span`float: right;`;

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, index } = this.props;
    return (
      <Wrap index={index} url={item.embedly.thumbnail_url} className="item">
        <Rank>{index + 1}.</Rank>
        <Info>
          <a href={item.hn.url} target="_blank">
            <h1>
              <span>{item.hn.url.match(/[http:|https:]\/\/(.+?)\//)[1]}</span>
              {item.hn.title}
            </h1>
          </a>
          <p>
            <span>{item.hn.score} points</span>
            <By>
              <a>{item.hn.by}</a> @ {new Date(item.hn.time).toString()}
            </By>
          </p>
          <Comments kids={item.hn.kids} descendants={item.hn.descendants} />
        </Info>
      </Wrap>
    );
  }
}
