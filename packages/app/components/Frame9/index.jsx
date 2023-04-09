import React from "react";
import styled from "styled-components";
import { SfproroundedNormalWhite13px, ValignTextMiddle } from "../../styledMixins";


function Frame9(props) {
  const { className } = props;

  return (
    <Frame91 className={`frame-9-8 ${className || ""}`}>
      <Text16 className="text-16">􀊊</Text16>
    </Frame91>
  );
}

const Frame91 = styled.div`
  position: relative;
  min-width: 32px;
  height: 32px;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px 1px 20px #4593fe33, 0px 0px 8px #4493fe1a, 0px 1px 4px #4390ff4c;
  background: linear-gradient(
    180deg,
    rgb(83.58776271343231, 172.1696126461029, 253.93750101327896) 0%,
    rgb(63.75, 140.24997264146805, 255) 100%
  );

  &.frame-9-8.frame-9-9 {
    width: 32px;
    display: flex;
    padding: 3px 5px;
    align-items: flex-start;
    position: unset;
    min-width: unset;
  }
`;

const Text16 = styled.div`
  ${ValignTextMiddle}
  ${SfproroundedNormalWhite13px}
            position: absolute;
  height: 20px;
  top: 3px;
  left: 6px;
  text-shadow: 0px 1px 6px #0000001a;
  text-align: center;
  letter-spacing: -0.28px;
  line-height: 20px;
  white-space: nowrap;
`;

const Text17 = styled.div`
  ${ValignTextMiddle}
  ${SfproroundedNormalWhite13px}
            
            
           .frame-9-8.frame-9-9  & {
    margin-left: 1px;
    min-width: 21px;
    position: unset;
    top: unset;
    left: unset;
  }
`;

export default Frame9;
