import React from "react";
import Google from "../Google";
import styled from "styled-components";
import { Bodysmallstrong, ValignTextMiddle } from "../../styledMixins";


function Button22(props) {
  const { googleProps } = props;

  return (
    <Button>
      <Google src={googleProps.src} className={googleProps.className} />
      <Label>Add to Chrome</Label>
    </Button>
  );
}

const Button = styled.div`
  display: flex;
  width: fit-content;
  height: 48px;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 6px 16px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 14px;
`;

const Label = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 20px;
  white-space: nowrap;
`;

export default Button22;
