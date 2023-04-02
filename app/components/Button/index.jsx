import React from "react";
import styled from "styled-components";
import { Bodysmallstrong, ValignTextMiddle } from "../../styledMixins";


function Button(props) {
  const { spanText1, spanText2, spanText3 } = props;

  return (
    <Button1>
      <Label>
        <span>
          <Span0>{spanText1}</Span0>
          <Span1>{spanText2}</Span1>
          <Span0>{spanText3}</Span0>
        </span>
      </Label>
    </Button1>
  );
}

const Button1 = styled.div`
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

const Label = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: transparent;
  line-height: 20px;
  white-space: nowrap;
`;

const Span0 = styled.span`
  ${Bodysmallstrong}
  font-weight: 600;
  color: var(--lighttextprimary);
`;

const Span1 = styled.span`
  font-family: var(--font-family-inter);
  font-weight: 100;
  color: var(--lighttexttertiary);
  font-size: var(--font-size-xs);
  letter-spacing: -0.28px;
`;

export default Button;
