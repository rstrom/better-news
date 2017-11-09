import React from "react";
import styled from "styled-components";
import Item from "../containers/Item";

const Wrap = styled.div`
  margin-left: 2rem;

  & > .comment {
    background: #fff;
    padding: 0.5rem;
    cursor: ${p => p.expandable && "pointer"};
  }

  & > .comment:hover {
    border: 1px solid #000;
  }
`;

export default class Comment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComments: false
    };
  }

  render() {
    const { item } = this.props;
    const { showComments } = this.state;
    return (
      item && (
        <Wrap expandable={!!item.kids}>
          <div
            className="comment"
            onClick={() => this.setState({ showComments: !showComments })}
          >
            <p>{item.text}</p>
            {item.kids && (
              <p>{showComments ? "[-]" : `[+${item.kids.length}]`}</p>
            )}
          </div>
          {showComments &&
            (item.kids && item.kids.map(id => <Item id={id} key={id} />))}
        </Wrap>
      )
    );
  }
}
