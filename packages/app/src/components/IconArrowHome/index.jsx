import React from "react";
import styled from "styled-components";


function IconArrowHome(props) {
  const { className } = props;

  return (
    <IconHome className={`icon-home ${className || ""}`}>
      <IconHome1 className="icon-home-1" src="/img/container-3.svg" alt="icon-home" />
    </IconHome>
  );
}

const IconHome = styled.div`
  height: 16px;
  display: flex;
  padding: 2px 2px;
  align-items: flex-end;
  min-width: 16px;

  &.icon-home.icon-favorite {
    margin-left: 325px;
    padding: 2px;
    align-items: flex-start;
  }
`;

const IconHome1 = styled.img`
  width: 12px;
  height: 12px;
`;

const IconStar = styled.img`
  .icon-home.icon-favorite & {
    height: 11px;
  }
`;

export default IconArrowHome;
