import React from "react";
import Item from "./Item";
import styled, { injectGlobal } from "styled-components";

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,700,700i');

  body {
    margin: 0;
  }

  * {
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  }
`;

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
