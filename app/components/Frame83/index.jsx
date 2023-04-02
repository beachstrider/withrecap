import React from "react";
import Frame82 from "../Frame82";
import styled from "styled-components";
import { Bodymediumstrong, ValignTextMiddle } from "../../styledMixins";


function Frame83() {
  return (
    <Frame8>
      <Frame81>
        <Frame82 />
        <Text7>1:1</Text7>
      </Frame81>
    </Frame8>
  );
}

const Frame8 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Frame81 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12px;
  position: relative;
`;

const Text7 = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lightpalettepurple);
  line-height: 24px;
  white-space: nowrap;
`;

export default Frame83;
