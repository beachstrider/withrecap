import React from "react";
import styled from "styled-components";


function IconArrowSecure() {
  return (
    <IconSecure>
      <Container src="/img/container-2.svg" alt="Container" />
    </IconSecure>
  );
}

const IconSecure = styled.div`
  height: 12px;
  margin-left: 1px;
  display: flex;
  padding: 0.5px 2px;
  align-items: flex-start;
  min-width: 12px;
`;

const Container = styled.img`
  width: 8px;
  height: 10px;
`;

export default IconArrowSecure;
