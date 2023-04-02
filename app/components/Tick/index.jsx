import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function Tick(props) {
  const { children } = props;

  return (
    <Tick1>
      <Text18>{children}</Text18>
    </Tick1>
  );
}

const Tick1 = styled.div`
  position: relative;
  min-width: 21.774436950683594px;
  height: 21.774436950683594px;
`;

const Text18 = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 22px;
  height: 22px;
  top: -1px;
  left: 0;
  font-family: var(--font-family-sf_pro_rounded-bold);
  font-weight: 700;
  color: var(--lightpaletteblue);
  font-size: 17.7px;
  text-align: center;
  letter-spacing: -0.38px;
  line-height: 27.2px;
  white-space: nowrap;
`;

export default Tick;
