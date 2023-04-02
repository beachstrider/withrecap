import React from "react";
import styled from "styled-components";


function Google(props) {
  const { src, className } = props;

  return <Google1 className={`google ${className || ""}`} style={{ backgroundImage: `url(${src})` }}></Google1>;
}

const Google1 = styled.div`
  position: relative;
  min-width: 15.68280029296875px;
  height: 16px;
  background-size: 100% 100%;

  &.google.google-1 {
    min-width: 15.682819366455078px;
  }

  &.google.google-2 {
    min-width: 15.682815551757812px;
  }
`;

export default Google;
