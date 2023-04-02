import React from "react";
import styled from "styled-components";


function IconArrowMore() {
  return (
    <IconMore>
      <Container src="/img/container.svg" alt="Container" />
    </IconMore>
  );
}

const IconMore = styled.div`
  height: 16px;
  display: flex;
  padding: 0 6.3px;
  justify-content: flex-end;
  align-items: center;
  min-width: 16px;
`;

const Container = styled.img`
  width: 3px;
  height: 12px;
`;

export default IconArrowMore;
