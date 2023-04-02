import React from "react";
import styled from "styled-components";
import { Bodymediumstrong, ValignTextMiddle } from "../../styledMixins";


function Time2() {
  return (
    <Time>
      <X830AM900AM>8:30 AM – 9:00 AM</X830AM900AM>
    </Time>
  );
}

const Time = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const X830AM900AM = styled.p`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--lighttextsecondary);
  line-height: 24px;
  white-space: nowrap;
`;

export default Time2;
