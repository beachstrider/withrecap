import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Share(props) {
  const { children } = props;

  return (
    <Share1>
      <Text5>{children}</Text5>
    </Share1>
  );
}

const Share1 = styled.div`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Text5 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 16px;
  height: 16px;
  top: -1px;
  left: 0;
  font-family: var(--font-family-sf_pro_rounded-semibold);
  font-weight: 400;
  color: var(--lighttextsecondary);
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.28px;
  line-height: 20px;
  white-space: nowrap;
`;

export default Share;
