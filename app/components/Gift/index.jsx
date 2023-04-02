import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Gift(props) {
  const { children } = props;

  return (
    <Gift1>
      <Text1>{children}</Text1>
    </Gift1>
  );
}

const Gift1 = styled.div`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Text1 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 16px;
  height: 16px;
  top: -1px;
  left: 0;
  font-family: var(--font-family-sf_pro-bold);
  font-weight: 700;
  color: var(--lighttextsecondary);
  font-size: 14px;
  text-align: center;
  letter-spacing: -0.28px;
  line-height: 20px;
  white-space: nowrap;
`;

export default Gift;
