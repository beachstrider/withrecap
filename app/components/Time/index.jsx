import React from "react";
import styled from "styled-components";
import { Bodysmallstrong, ValignTextMiddle } from "../../styledMixins";


function Time() {
  return (
    <Time1>
      <X815AM845AM>8:15 AM – 8:45 AM</X815AM845AM>
    </Time1>
  );
}

const Time1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const X815AM845AM = styled.p`
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

export default Time;
