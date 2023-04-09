import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Video(props) {
  const { children } = props;

  return (
    <Video1>
      <Text3>{children}</Text3>
    </Video1>
  );
}

const Video1 = styled.div`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Text3 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 16px;
  height: 16px;
  top: -1px;
  left: 0;
  font-family: var(--font-family-sf_pro_rounded-semibold);
  font-weight: 400;
  color: var(--darkbackgroundprimary-button);
  font-size: var(--font-size-12px);
  text-align: center;
  letter-spacing: -0.28px;
  line-height: 20px;
  white-space: nowrap;
`;

export default Video;
