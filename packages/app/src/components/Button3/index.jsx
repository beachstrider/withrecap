import React from "react";
import Video from "../Video";
import styled from "styled-components";
import { Bodysmallstrong, ValignTextMiddle } from "../../styledMixins";


function Button3(props) {
  const { label, videoProps } = props;

  return (
    <Button>
      <Video>{videoProps.children}</Video>
      <Label>{label}</Label>
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
  padding: 6px 14px;
  position: relative;
  background-color: var(--darkbackgroundview);
  border-radius: 14px;
  box-shadow: 0px 1px 6px #0000000a;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--darkbackgroundprimary-button);
  line-height: 20px;
  white-space: nowrap;
`;

export default Button3;
