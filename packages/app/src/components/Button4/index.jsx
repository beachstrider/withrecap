import React from "react";
import Share from "../Share";
import styled from "styled-components";


function Button4(props) {
  const { shareProps } = props;

  return (
    <Button>
      <Share>{shareProps.children}</Share>
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  width: fit-content;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 12px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 24px;
`;

export default Button4;
