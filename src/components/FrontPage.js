import React from "react";
import Item from "./Item";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { items } = this.props;
    return (
      <Wrap>
        {items &&
          items.map((item, i) => <Item item={item} index={i} key={i} />)}
      </Wrap>
    );
  }
}
