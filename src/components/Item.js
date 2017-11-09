import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const Wrap = styled.div`
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: ${p => p.height || "auto"};
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
  width: 42rem;
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

export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.load(this.props.id);
  }

  render() {
    const { item, index } = this.props;
    const domain =
      item &&
      /[http:|https:]\/\/(.+?)\//.test(item.url) &&
      item.url.match(/[http:|https:]\/\/(.+?)\//)[1];
    return item ? (
      <Wrap index={index} className="item">
        <Rank>{index + 1}.</Rank>
        <Info>
          <a href={item.url} target="_blank">
            <h1>
              <span>{domain}</span>
              {item.title}
            </h1>
          </a>
          <p>
            <span>{item.score} points</span>
            <By>
              <a>{item.by}</a> @ {new Date(item.time * 1000).toString()}
            </By>
          </p>
          <Comments kids={item.kids} descendants={item.descendants} />
        </Info>
      </Wrap>
    ) : (
      <Wrap index={index} height="16rem">
        <Rank>{index + 1}.</Rank>
        <Info>
          <h1>...</h1>
        </Info>
      </Wrap>
    );
  }
}
