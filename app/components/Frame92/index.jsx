import React from "react";
import styled from "styled-components";
import { Bodylargedefault, TitleextraSmall, ValignTextMiddle } from "../../styledMixins";


function Frame92() {
  return (
    <Frame9>
      <Rectangle396></Rectangle396>
      <Frame91>
        <WeShouldHaveFunW>
          <span>
            <span className="bodylargedefault">We should have </span>
            <Span12>fun</Span12>
            <span className="bodylargedefault"> with the design and </span>
            <Span12>make it pop</Span12>
            <span className="bodylargedefault">!</span>
          </span>
        </WeShouldHaveFunW>
      </Frame91>
    </Frame9>
  );
}

const Frame9 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Rectangle396 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 4px;
  height: 64px;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 20px;
`;

const Frame91 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding: 8px 0px;
  position: relative;
  flex: 1;
`;

const WeShouldHaveFunW = styled.p`
  ${ValignTextMiddle}
  ${Bodylargedefault}
            position: relative;
  flex: 1;
  margin-top: -1px;
  font-weight: 400;
  color: var(--lighttextsecondary);
  line-height: 24px;
`;

const Span12 = styled.span`
  ${TitleextraSmall}
  font-weight: 600;
`;

export default Frame92;
