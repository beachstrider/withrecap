import React from "react";
import Frame5 from "../Frame5";
import styled from "styled-components";
import { Bodysmallstrong, ValignTextMiddle } from "../../styledMixins";


function Frame52() {
  return (
    <Frame51>
      <Tue>Tue</Tue>
      <Frame5 />
    </Frame51>
  );
}

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`;

const Tue = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--lighttextsecondary);
  line-height: 20px;
  white-space: nowrap;
`;

export default Frame52;
