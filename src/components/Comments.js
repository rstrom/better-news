import React from "react";
import styled from "styled-components";

const Wrap = styled.div`background: #fff;`;
export default class FrontPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { kids, descendants } = this.props;
    return (
      <Wrap>
        <p>{descendants} comments</p>
      </Wrap>
    );
  }
}
