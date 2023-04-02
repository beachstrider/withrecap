import React from "react";
import Frame83 from "../Frame83";
import Time2 from "../Time2";
import Faces2 from "../Faces2";
import styled from "styled-components";
import { Titlesmall, Bodymediumstrong, ValignTextMiddle } from "../../styledMixins";


function Frame22(props) {
  const { faces2Props } = props;

  return (
    <Frame221>
      <Content>
        <Frame83 />
        <MeetingTitle>Meeting Title</MeetingTitle>
        <Frame5>
          <Time2 />
          <Participants>
            <Faces2 src={faces2Props.src} />
            <Name>Lindsey</Name>
          </Participants>
        </Frame5>
      </Content>
    </Frame221>
  );
}

const Frame221 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 12px;
  position: relative;
`;

const MeetingTitle = styled.div`
  ${ValignTextMiddle}
  ${Titlesmall}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 24px;
  white-space: nowrap;
`;

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 26px;
  position: relative;
`;

const Participants = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--lighttextsecondary);
  line-height: 24px;
  white-space: nowrap;
`;

export default Frame22;
