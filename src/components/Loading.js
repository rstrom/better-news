import React from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate360} ${p => p.s || 0.75}s linear infinite;
  padding: ${p => p.padding};
  margin: ${p => p.margin};
`;

export default () => <Rotate>↻</Rotate>;
