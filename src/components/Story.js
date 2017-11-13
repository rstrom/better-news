import React from "react";
import styled from "styled-components";
import Item from "../containers/Item";
import timeAgo from "../services/timeAgo";

const Wrap = styled.div`
  flex: 0 0 auto;
  width: 48rem;
  margin: 1rem auto;
  border-left: 1px solid #000;

  @media (max-width: 48rem) {
    width: 32rem;
  }

  & a {
    cursor: pointer;
    color: #000;
  }

  & a.info {
    padding: 0 0.5rem;
    background-color: ${p => p.color};
  }

  & a.info:hover {
    background-color: #000;
    color: #fff;
  }

  & a.info:visited {
    color: #fff;
  }

  & a.link:visited {
    color: #909;
  }

  & .rank {
    font-weight: 600;
  }

  & h1 {
    margin: 0 0 0.25rem 0;
    display: block;
    background-color: #fff;
    white-space: wrap;
    overflow: hidden;
    font-size: 1.5rem;
    font-style: italic;
    padding: 0.5rem;
    box-sizing: border-box;
  }

  & h1 span {
    display: block;
    font-size: 1rem;
    font-style: normal;
  }

  & h1:hover {
    margin: 0.25rem -0.25rem 0 0.25rem;
  }
`;

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false
    };
  }

  render() {
    const { item, index } = this.props;
    const showComments = this.state.showComments || index == null;
    const domain =
      item &&
      /[http:|https:]\/\/(.+?)\//.test(item.url) &&
      item.url.match(/[http:|https:]\/\/(.+?)\//)[1];
    const color =
      index != null ? `hsl(${(index % 6) * 60}, 95%, 85%)` : "#ff6600";
    return (
      <Wrap className="item" color={color}>
        <a href={`#/${item.id}`} className="info">
          {index != null && <span className="rank">{1 + index}. </span>}
          <span>{item.score} points, </span>
          <span>{item.descendants} comments, </span>
          <span>{timeAgo(item.time * 1000)} </span>
          <span>by {item.by}</span>
        </a>
        <a href={item.url} className="link">
          <h1>
            <span>{domain}</span>
            {item.title}
          </h1>
        </a>
        {showComments &&
          (item.kids && item.kids.map(id => <Item id={id} key={id} />))}
      </Wrap>
    );
  }
}
