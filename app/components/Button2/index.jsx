import React from "react";
import Gift from "../Gift";
import styled from "styled-components";
import { Bodysmallstrong, ValignTextMiddle } from "../../styledMixins";


function Button2(props) {
  const { label, giftProps } = props;

  return (
    <Button>
      <Gift>{giftProps.children}</Gift>
      <Label>{label}</Label>
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  width: fit-content;
  height: 32px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 12px;
`;

const Label = styled.p`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 20px;
  white-space: nowrap;
`;

export default Button2;
