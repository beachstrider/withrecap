import React from "react";
import styled from "styled-components";
import { Othercaption, ValignTextMiddle } from "../../styledMixins";


function MeetingBrainstorm(props) {
  const { children } = props;

  return (
    <MeetingBrainstorm1>
      <Brainstorm>{children}</Brainstorm>
    </MeetingBrainstorm1>
  );
}

const MeetingBrainstorm1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  padding: 4px 8px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 44px;
`;

const Brainstorm = styled.div`
  ${ValignTextMiddle}
  ${Othercaption}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 700;
  color: var(--lighttextsecondary);
  line-height: 16px;
  white-space: nowrap;
`;

export default MeetingBrainstorm;
