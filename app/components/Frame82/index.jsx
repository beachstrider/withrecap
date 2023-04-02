import React from "react";
import Bubble from "../Bubble";
import styled from "styled-components";


function Frame82() {
  return (
    <Frame8>
      <Bubble />
    </Frame8>
  );
}

const Frame8 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 6px;
  position: relative;
  background-color: var(--amethyst);
  border-radius: 20px;
`;

export default Frame82;
