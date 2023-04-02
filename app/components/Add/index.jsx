import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Add(props) {
  const { children } = props;

  return (
    <Add1>
      <Text19>{children}</Text19>
    </Add1>
  );
}

const Add1 = styled.div`
  position: relative;
  width: 22px;
  top: 3px;
  left: 3px;
  display: flex;
  align-items: flex-start;
  overflow: hidden;
`;

const Text19 = styled.div`
  ${ValignTextMiddle}
  width: 22px;
  height: 22px;
  margin-top: -1.25px;
  font-family: var(--font-family-sf_pro-bold);
  font-weight: 700;
  color: var(--lighttexttertiary);
  font-size: 19.1px;
  text-align: center;
  letter-spacing: -0.38px;
  line-height: 27.2px;
  white-space: nowrap;
`;

export default Add;
