import React from "react";
import styled from "styled-components";
import { Bodymediumstrong, ValignTextMiddle } from "../../styledMixins";


function User(props) {
  const { children, className } = props;

  return (
    <User1 className={`user-1 ${className || ""}`}>
      <Name className="name-14">{children}</Name>
    </User1>
  );
}

const User1 = styled.div`
  display: flex;
  width: 221.33334350585938px;
  align-items: center;
  gap: 10px;
  position: relative;
  align-self: stretch;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            position: relative;
  width: fit-content;
  margin-top: -0.67px;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 24px;
  white-space: nowrap;
`;

const Name1 = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            
            
           .user-1.user-2  & {
    margin-top: -0.97px;
  }
`;

export default User;
