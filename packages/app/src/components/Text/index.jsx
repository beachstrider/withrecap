import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Text(props) {
  const { children } = props;

  return (
    <Text1>
      <Text20>{children}</Text20>
    </Text1>
  );
}

const Text1 = styled.div`
  position: relative;
  min-width: 16.61005973815918px;
  height: 16.61005973815918px;
`;

const Text20 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 17px;
  height: 17px;
  top: -1px;
  left: 0;
  font-family: var(--font-family-sf_pro_rounded-bold);
  font-weight: 700;
  color: var(--lighttextsecondary);
  font-size: 14.5px;
  text-align: center;
  letter-spacing: -0.29px;
  line-height: 20.8px;
  white-space: nowrap;
`;

export default Text;
