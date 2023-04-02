import React from "react";
import Frame82 from "../Frame82";
import styled from "styled-components";
import { Bodymediumstrong, ValignTextMiddle } from "../../styledMixins";


function Frame8() {
  return (
    <Frame81>
      <Frame83>
        <Frame82 />
        <Conference>Conference</Conference>
      </Frame83>
    </Frame81>
  );
}

const Frame81 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame83 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const Conference = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lightpalettepurple);
  line-height: 24px;
  white-space: nowrap;
`;

export default Frame8;
