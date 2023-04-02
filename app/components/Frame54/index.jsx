import React from "react";
import styled from "styled-components";
import { Othercaption, ValignTextMiddle } from "../../styledMixins";


function Frame54(props) {
  const { children } = props;

  return (
    <Frame5>
      <Percent>{children}</Percent>
    </Frame5>
  );
}

const Frame5 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 2px 4px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 6px;
`;

const Percent = styled.div`
  ${ValignTextMiddle}
  ${Othercaption}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 700;
  color: var(--lighttextsecondary);
  line-height: 16px;
  white-space: nowrap;
`;

export default Frame54;
