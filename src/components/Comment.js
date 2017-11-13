import React from "react";
import styled from "styled-components";
import Item from "../containers/Item";
import timeAgo from "../services/timeAgo";

const Wrap = styled.div`
  margin-left: 2rem;

  & .header {
    padding: 0.5rem 1rem;
    cursor: pointer;
    box-sizing: border-box;
    border: 1px solid #fff;
    font-style: italic;
  }

  & .header:hover {
    border: 1px solid #000;
  }

  & .by {
    font-style: normal;
    font-weight: 600;
  }

  & .comment {
    background: #fff;
  }

  & .text {
    padding: 0.5rem 1rem;
  }

  & .text p {
    padding-left: 0;
    margin-left: 0;
  }
`;

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item } = this.props;
    const { collapsed } = this.state;
    return (
      item && (
        <Wrap collapsed={collapsed}>
          {collapsed ? (
            <div className="comment">
              <div
                className="header"
                onClick={() => this.setState({ collapsed: !collapsed })}
              >
                <span className="by">{item.deleted ? "deleted" : item.by}</span>
                {" - "}
                {timeAgo(item.time * 1000)}
                {` [+${item.kids ? item.kids.length : ""}]`}
              </div>
            </div>
          ) : (
            <div className="comment">
              <div
                className="header"
                onClick={() => this.setState({ collapsed: !collapsed })}
              >
                <span className="by">{item.deleted ? "deleted" : item.by}</span>
                {" - "}
                {timeAgo(item.time * 1000)} [-]
              </div>
              <div
                className="text"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          )}
          {!collapsed &&
            item.kids &&
            item.kids.map(id => <Item id={id} key={id} />)}
        </Wrap>
      )
    );
  }
}
