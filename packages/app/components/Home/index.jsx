import React from "react";
import Button from "../Button";
import Button2 from "../Button2";
import Frame5 from "../Frame5";
import MeetingBrainstorm from "../MeetingBrainstorm";
import Faces from "../Faces";
import Button3 from "../Button3";
import Frame8 from "../Frame8";
import Time from "../Time";
import Button4 from "../Button4";
import Frame83 from "../Frame83";
import Faces2 from "../Faces2";
import Frame52 from "../Frame52";
import Time2 from "../Time2";
import Frame22 from "../Frame22";
import styled from "styled-components";
import {
  Titlesmall,
  Bodysmalldefault,
  Bodymediumstrong,
  Bodysmallstrong,
  Titlemedium,
  Bodymediumdefault,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Home.css";

function Home(props) {
  const {
    recap,
    pastMeetings,
    frame81,
    name1,
    frame82,
    title,
    recapSavedYou8Ho,
    tue,
    text2,
    today,
    designSync,
    x900Am1030Am,
    jessicaCara3Others,
    meditationAppKickoff,
    jessicaJeff,
    x11BobbyJessica,
    x700Am730Am,
    name2,
    text8,
    yesterday,
    meetingTitle,
    name3,
    mtSBrainstorm,
    tomSarah,
    buttonProps,
    button2Props,
    meetingBrainstormProps,
    faces1Props,
    button3Props,
    faces2Props,
    button4Props,
    faces21Props,
    faces22Props,
    faces3Props,
    frame221Props,
    frame222Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="home screen">
        <Header>
          <Logo>
            <Frame9></Frame9>
            <Recap>{recap}</Recap>
          </Logo>
          <Frame51>
            <Button
              spanText1={buttonProps.spanText1}
              spanText2={buttonProps.spanText2}
              spanText3={buttonProps.spanText3}
            />
            <Button1>
              <PastMeetings>{pastMeetings}</PastMeetings>
            </Button1>
          </Frame51>
          <Right>
            <Frame81 style={{ backgroundImage: `url(${frame81})` }}></Frame81>
            <Recap>{name1}</Recap>
          </Right>
        </Header>
        <Frame14>
          <Frame82 style={{ backgroundImage: `url(${frame82})` }}></Frame82>
          <Frame53>
            <Title>{title}</Title>
            <Frame15>
              <RecapSavedYou8Ho>{recapSavedYou8Ho}</RecapSavedYou8Ho>
              <Button2 label={button2Props.label} giftProps={button2Props.giftProps} />
            </Frame15>
          </Frame53>
        </Frame14>
        <Frame54>
          <Divider>
            <Frame13>
              <Frame13>
                <Tue>{tue}</Tue>
                <Frame5 />
              </Frame13>
              <Text2>{text2}</Text2>
              <Tue>{today}</Tue>
            </Frame13>
            <Rectangle392></Rectangle392>
          </Divider>
          <Frame20>
            <Content>
              <MeetingBrainstorm>{meetingBrainstormProps.children}</MeetingBrainstorm>
              <DesignSync>{designSync}</DesignSync>
              <Frame55>
                <Time1>
                  <PastMeetings>{x900Am1030Am}</PastMeetings>
                </Time1>
                <Time1>
                  <Faces photo1={faces1Props.photo1} photo2={faces1Props.photo2} />
                  <JessicaCara3Others>{jessicaCara3Others}</JessicaCara3Others>
                </Time1>
              </Frame55>
            </Content>
            <Button3 label={button3Props.label} videoProps={button3Props.videoProps} />
          </Frame20>
          <Frame56>
            <Content>
              <Frame8 />
              <DesignSync>{meditationAppKickoff}</DesignSync>
              <Frame55>
                <Time />
                <Time1>
                  <Faces photo1={faces2Props.photo1} photo2={faces2Props.photo2} />
                  <JessicaCara3Others>{jessicaJeff}</JessicaCara3Others>
                </Time1>
              </Frame55>
            </Content>
            <Button4 shareProps={button4Props.shareProps} />
            <CursorPointer src="/img/cursor-pointer.svg" alt="Cursor/Pointer" />
          </Frame56>
          <Frame21>
            <Content>
              <Frame83 />
              <DesignSync>{x11BobbyJessica}</DesignSync>
              <Frame57>
                <Time1>
                  <JessicaCara3Others>{x700Am730Am}</JessicaCara3Others>
                </Time1>
                <Time1>
                  <Faces2 src={faces21Props.src} />
                  <JessicaCara3Others>{name2}</JessicaCara3Others>
                </Time1>
              </Frame57>
            </Content>
          </Frame21>
          <Divider>
            <Time1>
              <Frame52 />
              <Text8>{text8}</Text8>
              <PastMeetings>{yesterday}</PastMeetings>
            </Time1>
            <Rectangle3921></Rectangle3921>
          </Divider>
          <Frame21>
            <Content>
              <Frame84>
                <Frame83 />
              </Frame84>
              <DesignSync>{meetingTitle}</DesignSync>
              <Frame57>
                <Time2 />
                <Time1>
                  <Faces2 src={faces22Props.src} />
                  <JessicaCara3Others>{name3}</JessicaCara3Others>
                </Time1>
              </Frame57>
            </Content>
          </Frame21>
          <Frame21>
            <Content>
              <Frame8 />
              <DesignSync>{mtSBrainstorm}</DesignSync>
              <Frame55>
                <Time />
                <Time1>
                  <Faces photo1={faces3Props.photo1} photo2={faces3Props.photo2} />
                  <JessicaCara3Others>{tomSarah}</JessicaCara3Others>
                </Time1>
              </Frame55>
            </Content>
          </Frame21>
          <Divider>
            <Time1>
              <Frame52 />
            </Time1>
            <Rectangle3922></Rectangle3922>
          </Divider>
          <Frame22 faces2Props={frame221Props.faces2Props} />
          <Frame22 faces2Props={frame222Props.faces2Props} />
        </Frame54>
      </div>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  position: relative;
  flex-shrink: 1;
  width: 1728px;
  height: 58px;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: var(--darkbackgroundprimary-button);
  mix-blend-mode: normal;
`;

const Logo = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  gap: 10px;
  position: relative;
`;

const Frame9 = styled.div`
  position: relative;
  min-width: 32px;
  height: 32px;
  border-radius: 30px;
  box-shadow: 0px 1px 20px #4593fe33, 0px 0px 8px #4493fe1a, 0px 1px 4px #4390ff4c;
  background: linear-gradient(
    180deg,
    rgb(83.58776271343231, 172.1696126461029, 253.93750101327896) 0%,
    rgb(63.75, 140.24997264146805, 255) 100%
  );
`;

const Recap = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 20px;
  white-space: nowrap;
`;

const Frame51 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`;

const Button1 = styled.div`
  display: flex;
  width: fit-content;
  height: 32px;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 6px 10px;
  position: relative;
`;

const PastMeetings = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--lighttextsecondary);
  line-height: 20px;
  white-space: nowrap;
`;

const Right = styled.div`
  display: flex;
  width: 120px;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  position: relative;
`;

const Frame81 = styled.div`
  position: relative;
  min-width: 32px;
  height: 32px;
  border-radius: 300px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame14 = styled.div`
  display: flex;
  position: relative;
  margin-left: 264px;
  width: fit-content;
  align-items: flex-start;
  gap: 20px;
`;

const Frame82 = styled.div`
  position: relative;
  min-width: 64px;
  height: 64px;
  border-radius: 300px;
  background-size: cover;
  background-position: 50% 50%;
`;

const Frame53 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  padding: 4px 0px;
  position: relative;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${Titlemedium}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 28px;
  white-space: nowrap;
`;

const Frame15 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  justify-content: center;
  gap: 14px;
  position: relative;
`;

const RecapSavedYou8Ho = styled.p`
  ${ValignTextMiddle}
  ${Bodymediumdefault}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  font-weight: 400;
  color: var(--lighttextsecondary);
  text-align: right;
  line-height: 24px;
  white-space: nowrap;
`;

const Frame54 = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  flex-direction: column;
  width: 1200px;
  align-items: flex-start;
  gap: 52px;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  position: relative;
  align-self: stretch;
`;

const Frame13 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 4px;
  position: relative;
`;

const Tue = styled.div`
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

const Text2 = styled.div`
  ${ValignTextMiddle}
  ${Bodysmalldefault}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  opacity: 0.6;
  font-weight: 400;
  color: var(--lighttexttertiary);
  line-height: 20px;
  white-space: nowrap;
`;

const Rectangle392 = styled.div`
  position: relative;
  flex: 1;
  min-width: 1062px;
  height: 2px;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 2px;
`;

const Frame20 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

const DesignSync = styled.div`
  ${ValignTextMiddle}
  ${Titlesmall}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 24px;
  white-space: nowrap;
`;

const Frame55 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 20px;
  position: relative;
`;

const Time1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 8px;
  position: relative;
`;

const JessicaCara3Others = styled.div`
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

const Frame56 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  align-self: stretch;
  cursor: pointer;
`;

const CursorPointer = styled.img`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 52px;
  left: 1042px;
`;

const Frame21 = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const Frame57 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 26px;
  position: relative;
`;

const Text8 = styled.div`
  ${ValignTextMiddle}
  ${Bodysmalldefault}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  opacity: 0.6;
  font-weight: 400;
  color: var(--lighttextsecondary);
  line-height: 20px;
  white-space: nowrap;
`;

const Rectangle3921 = styled.div`
  position: relative;
  flex: 1;
  min-width: 1027px;
  height: 2px;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 2px;
`;

const Frame84 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16px;
  position: relative;
`;

const Rectangle3922 = styled.div`
  position: relative;
  flex: 1;
  min-width: 1123px;
  height: 2px;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 2px;
`;

export default Home;
