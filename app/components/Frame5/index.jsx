import React from "react";
import styled from "styled-components";
import { Othercaption, ValignTextMiddle } from "../../styledMixins";


function Frame5() {
  return (
    <Frame51>
      <Number>21</Number>
    </Frame51>
  );
}

const Frame51 = styled.div`
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

const Number = styled.div`
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

export default Frame5;
