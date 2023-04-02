import React from "react";
import styled from "styled-components";
import { SfproroundedBoldAmethyst13px, ValignTextMiddle } from "../../styledMixins";


function Bubble() {
  return (
    <Bubble1>
      <Text4>􀌫</Text4>
    </Bubble1>
  );
}

const Bubble1 = styled.div`
  position: relative;
  min-width: 16px;
  height: 16px;
`;

const Text4 = styled.div`
  ${ValignTextMiddle}
  ${SfproroundedBoldAmethyst13px}
            position: absolute;
  width: 16px;
  height: 16px;
  top: -1px;
  left: 0;
  text-align: center;
  letter-spacing: -0.28px;
  line-height: 20px;
  white-space: nowrap;
`;

export default Bubble;
