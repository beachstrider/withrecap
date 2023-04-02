import React from "react";
import Frame9 from "../Frame9";
import Button7 from "../Button7";
import Frame92 from "../Frame92";
import User from "../User";
import Button22 from "../Button22";
import Frame54 from "../Frame54";
import Frame14 from "../Frame14";
import Tick from "../Tick";
import Add from "../Add";
import Text from "../Text";
import BrowserChromeDark from "../BrowserChromeDark";
import styled from "styled-components";
import {
  InterBoldSteelGray56px,
  InterNormalNevada22px,
  Bodysmallstrong,
  Bodymediumdefault,
  Titlelarge,
  InterNormalSteelGray218px,
  Bodymediumstrong,
  InterNormalNevada214px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./Landing.css";

function Landing(props) {
  const {
    recap,
    signIn,
    photo1,
    photo2,
    superchargeYourMeetings,
    title,
    withRecapsRealTi,
    unlimitedMeetingsForFree,
    photo3,
    name1,
    photo4,
    name2,
    photo5,
    name3,
    recapInOneTwoThree,
    meetingDetail1,
    meetingNotesCanBe,
    atLeastThatsHow,
    soWhatsTheNextStep,
    todos,
    number,
    name4,
    name5,
    name6,
    add,
    highlightedMoments,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    photo6,
    name7,
    seeWhoLeadTheDis,
    photo7,
    name8,
    percent1,
    photo8,
    name9,
    percent2,
    photo9,
    name10,
    percent3,
    missingAMeetingSh,
    summary,
    secureByDesign,
    yourMeetingTranscr,
    buttonProps,
    user1Props,
    user2Props,
    button21Props,
    frame9Props,
    frame51Props,
    frame52Props,
    frame53Props,
    frame141Props,
    frame142Props,
    frame143Props,
    button22Props,
    tickProps,
    addProps,
    textProps,
    browserChromeDarkProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="landing screen">
        <Header>
          <Logo>
            <Frame9 />
            <Recap>{recap}</Recap>
          </Logo>
          <Frame5>
            <SignIn>{signIn}</SignIn>
            <Button7 label={buttonProps.label} googleProps={buttonProps.googleProps} />
          </Frame5>
        </Header>
        <FlexRow>
          <HighlightContainer>
            <Highlight>
              <Frame92 />
              <Frame11>
                <PHoto src={photo1} alt="PHoto" />
                <User>{user1Props.children}</User>
              </Frame11>
            </Highlight>
            <Highlight1>
              <Frame92 />
              <Frame11>
                <PHoto1 src={photo2} alt="PHoto" />
                <User className={user2Props.className}>{user2Props.children}</User>
              </Frame11>
            </Highlight1>
          </HighlightContainer>
          <OverlapGroup1>
            <Frame111>
              <Frame8>
                <SuperchargeYourMeetings>{superchargeYourMeetings}</SuperchargeYourMeetings>
                <Group8>
                  <OverlapGroup>
                    <Rectangle393></Rectangle393>
                    <Title>{title}</Title>
                  </OverlapGroup>
                </Group8>
                <WithRecapsRealTi>{withRecapsRealTi}</WithRecapsRealTi>
              </Frame8>
              <Frame91>
                <Button22 googleProps={button21Props.googleProps} />
                <UnlimitedMeetingsForFree>{unlimitedMeetingsForFree}</UnlimitedMeetingsForFree>
              </Frame91>
            </Frame111>
            <Group9>
              <Frame9 className={frame9Props.className} />
              <Rectangle394></Rectangle394>
            </Group9>
          </OverlapGroup1>
          <Group10>
            <Person>
              <PHoto2 src={photo3} alt="PHoto" />
              <Name>{name1}</Name>
              <Frame54>{frame51Props.children}</Frame54>
            </Person>
            <Person1>
              <PHoto3 src={photo4} alt="PHoto" />
              <Name>{name2}</Name>
              <Frame54>{frame52Props.children}</Frame54>
            </Person1>
            <Person2>
              <Photo src={photo5} alt="Photo" />
              <Name>{name3}</Name>
              <Frame54>{frame53Props.children}</Frame54>
            </Person2>
          </Group10>
        </FlexRow>
        <Frame36>
          <Frame141>
            <RecapInOneTwoThree>{recapInOneTwoThree}</RecapInOneTwoThree>
            <Frame14
              addToGoogleChrome={frame141Props.addToGoogleChrome}
              recapWorksWithOnl={frame141Props.recapWorksWithOnl}
            />
            <Frame14
              addToGoogleChrome={frame142Props.addToGoogleChrome}
              recapWorksWithOnl={frame142Props.recapWorksWithOnl}
            />
            <Frame14
              addToGoogleChrome={frame143Props.addToGoogleChrome}
              recapWorksWithOnl={frame143Props.recapWorksWithOnl}
            />
          </Frame141>
          <MeetingDetail1 src={meetingDetail1} alt="Meeting Detail 1" />
        </Frame36>
        <Frame142>
          <Frame12>
            <MeetingNotesCanBe>{meetingNotesCanBe}</MeetingNotesCanBe>
            <AtLeastThatsHow>{atLeastThatsHow}</AtLeastThatsHow>
            <Button22 googleProps={button22Props.googleProps} />
          </Frame12>
          <Group12>
            <FrameContainer>
              <Frame361>
                <SoWhatsTheNextStep>{soWhatsTheNextStep}</SoWhatsTheNextStep>
                <Frame10>
                  <Frame81>
                    <Frame82>
                      <Frame83>
                        <Tick>{tickProps.children}</Tick>
                      </Frame83>
                      <Todos>{todos}</Todos>
                      <Number>{number}</Number>
                    </Frame82>
                  </Frame81>
                  <Frame84>
                    <Item>
                      <Frame93>
                        <Todo></Todo>
                        <Name1>{name4}</Name1>
                      </Frame93>
                    </Item>
                    <Item>
                      <Frame93>
                        <Todo></Todo>
                        <Name1>{name5}</Name1>
                      </Frame93>
                    </Item>
                    <Item>
                      <Frame93>
                        <Todo></Todo>
                        <Name1>{name6}</Name1>
                      </Frame93>
                    </Item>
                    <Item>
                      <Frame93>
                        <Frame40>
                          <Add>{addProps.children}</Add>
                        </Frame40>
                        <Add1>{add}</Add1>
                      </Frame93>
                    </Item>
                  </Frame84>
                </Frame10>
              </Frame361>
              <Frame37>
                <HighlightedMoments>{highlightedMoments}</HighlightedMoments>
                <Highlight2>
                  <Frame94>
                    <Rectangle396></Rectangle396>
                    <Frame95>
                      <WeShouldHaveFunW>
                        <span>
                          <span className="inter-normal-nevada-21-4px">{spanText1}</span>
                          <span className="inter-semi-bold-nevada-21-4px">{spanText2}</span>
                          <span className="inter-normal-nevada-21-4px">{spanText3}</span>
                          <span className="inter-semi-bold-nevada-21-4px">{spanText4}</span>
                          <span className="inter-normal-nevada-21-4px">{spanText5}</span>
                        </span>
                      </WeShouldHaveFunW>
                    </Frame95>
                  </Frame94>
                  <Frame112>
                    <PHoto4 src={photo6} alt="PHoto" />
                    <User1>
                      <Name2>{name7}</Name2>
                    </User1>
                  </Frame112>
                </Highlight2>
              </Frame37>
            </FrameContainer>
            <FrameContainer1>
              <Frame38>
                <SeeWhoLeadTheDis>{seeWhoLeadTheDis}</SeeWhoLeadTheDis>
                <Group101>
                  <Person3>
                    <PHoto5 src={photo7} alt="PHoto" />
                    <Name3>{name8}</Name3>
                    <Frame51>
                      <Percent>{percent1}</Percent>
                    </Frame51>
                  </Person3>
                  <Person4>
                    <Photo1 src={photo8} alt="Photo" />
                    <Name4>{name9}</Name4>
                    <Frame52>
                      <Percent1>{percent2}</Percent1>
                    </Frame52>
                  </Person4>
                  <Person5>
                    <Photo2 src={photo9} alt="Photo" />
                    <Name5>{name10}</Name5>
                    <Frame53>
                      <Percent2>{percent3}</Percent2>
                    </Frame53>
                  </Person5>
                </Group101>
              </Frame38>
              <Frame39>
                <MissingAMeetingSh>{missingAMeetingSh}</MissingAMeetingSh>
                <Frame113>
                  <Frame85>
                    <Frame86>
                      <Frame87>
                        <Text>{textProps.children}</Text>
                      </Frame87>
                      <Summary>{summary}</Summary>
                    </Frame86>
                  </Frame85>
                  <Frame88>
                    <IntroductionMaxwell>
                      Introduction
                      <br />
                      Maxwell opened the meeting by explaining the goal of designing a new meditation app that stands
                      out from the competition, focusing on innovative features and user experience. The team agreed on
                      the importance of understanding the target audience and their needs to ensure the app&#39;s
                      success.
                      <br />
                      <br />
                      Target Audience
                      <br />
                      Lindsey presented market research data, identifying the primary target audience as individuals
                      aged 18-45, with a secondary audience of people above 45 years old. The team acknowledged the need
                      to cater to users with varying meditation experience, from beginners to advanced practitioners.
                      <br />
                      <br />
                      App Features
                      <br />
                      Jessica facilitated brainstorming on potential app features, with the team agreeing on the
                      following key features:
                      <br />
                      Customizable meditation plans: Users can create personalized plans based on their goals,
                      experience level, and available time.
                      <br />
                      Guided meditation sessions: A variety of guided sessions led by experienced instructors, with
                      options for different meditation styles and lengths.
                      <br />
                      Progressive learning: Content designed to help users gradually advance in their practice and
                      explore new techniques.
                      <br />
                      In-app community: A feature allowing users to connect with other meditators, share experiences,
                      and offer support.
                      <br />
                      Gamification: Incorporating elements like streaks, badges, and challenges to motivate users and
                      encourage daily practice.
                      <br />
                      Analytics and tracking: Users can monitor their progress, view statistics, and set personal
                      milestones.
                      <br />
                      <br />
                      Conclusion
                      <br />
                      The meeting concluded with the team expressing enthusiasm for the project and a shared commitment
                      to creating a unique and engaging meditation app.
                    </IntroductionMaxwell>
                  </Frame88>
                </Frame113>
              </Frame39>
            </FrameContainer1>
          </Group12>
        </Frame142>
        <Frame371>
          <Frame12>
            <MeetingNotesCanBe>{secureByDesign}</MeetingNotesCanBe>
            <WithRecapsRealTi>{yourMeetingTranscr}</WithRecapsRealTi>
          </Frame12>
          <Frame391>
            <BrowserChromeDark browserChromeLightProps={browserChromeDarkProps.browserChromeLightProps} />
          </Frame391>
        </Frame371>
      </div>
    </div>
  );
}

const Header = styled.header`
  display: flex;
  position: relative;
  flex-shrink: 1;
  margin-left: 0;
  width: 1440px;
  height: 58px;
  align-items: center;
  justify-content: space-between;
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

const Frame5 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 20px;
  position: relative;
`;

const SignIn = styled.div`
  ${ValignTextMiddle}
  ${Bodysmallstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lighttextsecondary);
  line-height: 20px;
  white-space: nowrap;
`;

const FlexRow = styled.div`
  height: 450px;
  align-self: flex-start;
  margin-top: 140px;
  display: flex;
  align-items: flex-end;
  min-width: 1510px;
`;

const HighlightContainer = styled.div`
  width: 307px;
  margin-bottom: 35.86px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 296px;
  gap: 7px;
`;

const Highlight = styled.div`
  display: flex;
  position: relative;
  margin-left: 0.24px;
  flex-direction: column;
  width: 307px;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 16px;
  transform: rotate(-13.41deg);
  box-shadow: 0px 2px 22px #0000000a, 0px 0px 4px #0000000a, 0px 2px 8px #00000003;
`;

const Frame11 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  position: relative;
  align-self: stretch;
`;

const PHoto = styled.img`
  position: relative;
  min-width: 24.00592041015625px;
  height: 24.005859375px;
  transform: rotate(13.41deg);
  object-fit: cover;
`;

const Highlight1 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 307px;
  align-items: flex-start;
  gap: 16px;
  padding: 20px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 16px;
  transform: rotate(4.67deg);
  box-shadow: 0px 2px 22px #0000000a, 0px 0px 4px #0000000a, 0px 2px 8px #00000003;
`;

const PHoto1 = styled.img`
  position: relative;
  min-width: 32.00164794921875px;
  height: 32.00146484375px;
  margin-top: -3.97px;
  margin-bottom: -3.97px;
  margin-left: -3.97px;
  transform: rotate(-4.67deg);
  object-fit: cover;
`;

const OverlapGroup1 = styled.div`
  width: 752px;
  height: 320px;
  position: relative;
  align-self: flex-start;
  margin-left: 150px;
`;

const Frame111 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 50px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Frame8 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 24px;
  position: relative;
`;

const SuperchargeYourMeetings = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--lighttextsecondary);
  font-size: 28px;
  text-align: center;
  letter-spacing: -1px;
  line-height: normal;
`;

const Group8 = styled.div`
  position: relative;
  min-width: 728px;
  height: 68px;
  margin-right: -2px;
`;

const OverlapGroup = styled.div`
  position: relative;
  width: 726px;
  height: 68px;
`;

const Rectangle393 = styled.div`
  position: absolute;
  width: 331px;
  height: 66px;
  top: 1px;
  left: 395px;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 14px;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${InterBoldSteelGray56px}
            position: absolute;
  height: 68px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: -1.5px;
  line-height: normal;
`;

const WithRecapsRealTi = styled.p`
  ${ValignTextMiddle}
  ${InterNormalNevada22px}
            position: relative;
  width: 645px;
  text-align: center;
  letter-spacing: -0.32px;
  line-height: 36px;
`;

const Frame91 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
`;

const UnlimitedMeetingsForFree = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumdefault}
            position: relative;
  width: fit-content;
  font-weight: 400;
  color: var(--lighttextsecondary);
  text-align: center;
  line-height: 24px;
  white-space: nowrap;
`;

const Group9 = styled.div`
  position: absolute;
  width: 32px;
  top: 20px;
  left: 720px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 106px;
  gap: 8px;
`;

const Rectangle394 = styled.div`
  width: 4px;
  height: 66px;
  background-color: var(--lightpaletteblue);
  border-radius: 3px;
`;

const Group10 = styled.div`
  width: 224px;
  margin-left: 77px;
  display: flex;
  flex-direction: column;
  padding: 18.3px 0;
  align-items: flex-start;
  min-height: 322px;
  transform: rotate(18.43deg);
`;

const Person = styled.div`
  display: flex;
  position: relative;
  align-self: center;
  margin-left: 1.35px;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 16px;
  transform: rotate(-15deg);
  box-shadow: 0px 2px 22px #0000000a, 0px 0px 4px #0000000a, 0px 2px 8px #00000003;
`;

const PHoto2 = styled.img`
  position: relative;
  min-width: 32.0009765625px;
  height: 32.001220703125px;
  margin-bottom: -13.91px;
  transform: rotate(-21.87deg);
  object-fit: cover;
`;

const Name = styled.div`
  ${ValignTextMiddle}
  ${Bodymediumstrong}
            position: relative;
  width: fit-content;
  font-weight: 600;
  color: var(--lighttextprimary);
  line-height: 24px;
  white-space: nowrap;
`;

const Person1 = styled.div`
  display: flex;
  position: relative;
  align-self: flex-end;
  margin-top: 53px;
  margin-right: 3.97px;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 16px;
  transform: rotate(15deg);
  box-shadow: 0px 2px 22px #0000000a, 0px 0px 4px #0000000a, 0px 2px 8px #00000003;
`;

const PHoto3 = styled.img`
  position: relative;
  min-width: 32.00531005859375px;
  height: 32.00537109375px;
  margin-bottom: -17.1px;
  transform: rotate(-51.87deg);
  object-fit: cover;
`;

const Person2 = styled.div`
  display: flex;
  position: relative;
  margin-top: 40px;
  margin-left: -6.36px;
  width: fit-content;
  align-items: center;
  gap: 8px;
  padding: 10px 14px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 16px;
  transform: rotate(45deg);
  box-shadow: 0px 2px 22px #0000000a, 0px 0px 4px #0000000a, 0px 2px 8px #00000003;
`;

const Photo = styled.img`
  position: relative;
  min-width: 32.00701904296875px;
  height: 32.0068359375px;
  margin-bottom: -17.24px;
  transform: rotate(-81.87deg);
  object-fit: cover;
`;

const Frame36 = styled.div`
  width: 1608px;
  height: 732px;
  margin-top: 70px;
  margin-left: 0;
  display: flex;
  align-items: center;
  gap: 106px;
  border-radius: 60px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(234.81250405311584, 245.9504359960556, 255) 0%,
    rgb(255, 251.015625, 239.0625) 34.89583432674408%,
    rgb(240.12499898672104, 247.56244629621506, 255) 67.70833134651184%,
    rgb(239.0625, 255, 243.48958164453506) 100%
  );
`;

const Frame141 = styled.div`
  display: flex;
  position: relative;
  margin-left: 100px;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 50px;
`;

const RecapInOneTwoThree = styled.p`
  ${ValignTextMiddle}
  position: relative;
  width: 455px;
  margin-top: -1px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--lighttextprimary);
  font-size: 44px;
  letter-spacing: -1.5px;
  line-height: normal;
`;

const MeetingDetail1 = styled.img`
  width: 947px;
  height: 692px;
  align-self: flex-end;
  object-fit: cover;
`;

const Frame142 = styled.div`
  display: flex;
  position: relative;
  margin-top: 140px;
  margin-left: 0;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 60px;
`;

const Frame12 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  gap: 20px;
  position: relative;
`;

const MeetingNotesCanBe = styled.p`
  ${ValignTextMiddle}
  ${InterBoldSteelGray56px}
            position: relative;
  width: 713px;
  margin-top: -1px;
  text-align: center;
  letter-spacing: -1.5px;
  line-height: normal;
`;

const AtLeastThatsHow = styled.p`
  ${ValignTextMiddle}
  ${InterNormalNevada22px}
            position: relative;
  width: 645px;
  text-align: center;
  letter-spacing: -0.32px;
  line-height: 36px;
  white-space: nowrap;
`;

const Group12 = styled.div`
  position: relative;
  min-width: 1608px;
  height: 1240px;
`;

const FrameContainer = styled.div`
  position: absolute;
  height: 600px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1608px;
  gap: 40px;
`;

const Frame361 = styled.div`
  width: 1051px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 59px 163px;
  align-items: flex-start;
  gap: 70px;
  border-radius: 60px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(222.06250101327896, 239.39799159765244, 255) 0%,
    rgb(245.47292321920395, 249.9279561638832, 253.93750101327896) 100%
  );
`;

const SoWhatsTheNextStep = styled.p`
  ${ValignTextMiddle}
  ${Titlelarge}
            height: 36px;
  align-self: center;
  min-width: 359px;
  font-weight: 600;
  color: var(--lighttextprimary);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const Frame10 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 724px;
  align-items: flex-start;
  gap: 43.54887390136719px;
  padding: 27.218046188354492px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 29.94px;
  box-shadow: 0px 2.721804618835449px 29.939849853515625px #0000000a, 0px 0px 5.443609237670898px #0000000a,
    0px 2.721804618835449px 10.887218475341797px #00000003;
`;

const Frame81 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 21.774436950683594px;
  position: relative;
`;

const Frame82 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 16.330827713012695px;
  position: relative;
`;

const Frame83 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 13.609023094177246px;
  padding: 8.165413856506348px;
  position: relative;
  background-color: #3fa3ff1a;
  border-radius: 27.22px;
`;

const Todos = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: var(--font-size-xxl);
  letter-spacing: -0.22px;
  line-height: 32.7px;
  white-space: nowrap;
`;

const Number = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextsecondary);
  font-size: var(--font-size-xxl);
  letter-spacing: -0.22px;
  line-height: 32.7px;
  white-space: nowrap;
`;

const Frame84 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 21.774436950683594px;
  position: relative;
  align-self: stretch;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 21.774436950683594px;
  position: relative;
  align-self: stretch;
`;

const Frame93 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 21.774436950683594px;
  position: relative;
`;

const Todo = styled.div`
  position: relative;
  min-width: 27.21804428100586px;
  height: 27.21804428100586px;
  border-radius: 8.17px;
  border: 2.721804618835449px solid;
  border-color: var(--lightbackgroundgrouped);
`;

const Name1 = styled.p`
  ${ValignTextMiddle}
  ${InterNormalSteelGray218px}
            position: relative;
  width: fit-content;
  margin-top: -1.36px;
  letter-spacing: -0.22px;
  line-height: 32.7px;
  white-space: nowrap;
`;

const Frame40 = styled.div`
  position: relative;
  min-width: 27.21804428100586px;
  height: 27.21804428100586px;
`;

const Add1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1.36px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttexttertiary);
  font-size: var(--font-size-xxl);
  letter-spacing: -0.22px;
  line-height: 32.7px;
  white-space: nowrap;
`;

const Frame37 = styled.div`
  width: 517px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 59px 64.7px;
  align-items: flex-end;
  gap: 114px;
  border-radius: 60px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(255, 245.74854522943497, 218.87500405311584) 0%,
    rgb(255, 249.45652306079865, 233.7500050663948) 100%
  );
`;

const HighlightedMoments = styled.div`
  ${ValignTextMiddle}
  ${Titlelarge}
            height: 36px;
  align-self: center;
  margin-right: 1px;
  min-width: 310px;
  font-weight: 600;
  color: var(--lighttextprimary);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const Highlight2 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 386px;
  align-items: flex-start;
  gap: 20.1569881439209px;
  padding: 25.19623565673828px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 20.16px;
  box-shadow: 0px 2.5196235179901123px 27.715858459472656px #0000000a, 0px 0px 5.039247035980225px #0000000a,
    0px 2.5196235179901123px 10.07849407196045px #00000003;
`;

const Frame94 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12.59811782836914px;
  position: relative;
  align-self: stretch;
`;

const Rectangle396 = styled.div`
  position: relative;
  align-self: stretch;
  min-width: 5.039247035980225px;
  height: 81.15699005126953px;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 25.2px;
`;

const Frame95 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12.59811782836914px;
  padding: 10.07849407196045px 0px;
  position: relative;
  flex: 1;
`;

const WeShouldHaveFunW = styled.p`
  ${ValignTextMiddle}
  ${InterNormalNevada214px}
            position: relative;
  flex: 1;
  margin-top: -1.26px;
  letter-spacing: -0.25px;
  line-height: 30.2px;
`;

const Frame112 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20.1569881439209px;
  position: relative;
  align-self: stretch;
`;

const PHoto4 = styled.img`
  position: relative;
  min-width: 30.2357177734375px;
  height: 30.2353515625px;
  object-fit: cover;
`;

const User1 = styled.div`
  display: flex;
  width: 278.8383483886719px;
  align-items: center;
  gap: 12.59811782836914px;
  position: relative;
  align-self: stretch;
`;

const Name2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1.23px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: 20.2px;
  letter-spacing: -0.2px;
  line-height: 30.2px;
  white-space: nowrap;
`;

const FrameContainer1 = styled.div`
  position: absolute;
  height: 600px;
  top: 640px;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1608px;
  gap: 40px;
`;

const Frame38 = styled.div`
  width: 517px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 41px 0;
  align-items: center;
  gap: 64px;
  border-radius: 60px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(241.00000083446503, 243.00000071525574, 245.00000059604645) 0%,
    rgb(248.66042017936707, 250.7677111029625, 252.87500202655792) 100%
  );
`;

const SeeWhoLeadTheDis = styled.p`
  ${ValignTextMiddle}
  ${Titlelarge}
            width: 433px;
  height: 72px;
  font-weight: 600;
  color: var(--lighttextprimary);
  text-align: center;
  line-height: 36px;
`;

const Group101 = styled.div`
  width: 338px;
  margin-left: 1.9px;
  display: flex;
  flex-direction: column;
  padding: 17.9px 4.9px;
  align-items: flex-end;
  min-height: 331px;
  transform: rotate(-15deg);
`;

const Person3 = styled.div`
  display: flex;
  position: relative;
  margin-top: 2px;
  margin-right: 16.92px;
  width: fit-content;
  align-items: center;
  gap: 13.862874984741211px;
  padding: 17.328594207763672px 24.260028839111328px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 27.73px;
  transform: rotate(9.31deg);
  box-shadow: 0px 3.4657187461853027px 38.122901916503906px #0000000a, 0px 0px 6.9314374923706055px #0000000a,
    0px 3.4657187461853027px 13.862874984741211px #00000003;
`;

const PHoto5 = styled.img`
  position: relative;
  min-width: 55.455596923828125px;
  height: 55.45556640625px;
  margin-top: -19.75px;
  transform: rotate(20.69deg);
  object-fit: cover;
`;

const Name3 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: 27.7px;
  letter-spacing: -0.28px;
  line-height: 41.6px;
  white-space: nowrap;
`;

const Frame51 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 17.32859230041504px;
  padding: 3.4657182693481445px 6.931436538696289px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 10.4px;
`;

const Percent = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1.73px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--lighttextsecondary);
  font-size: 20.8px;
  letter-spacing: 0.87px;
  line-height: 27.7px;
  white-space: nowrap;
`;

const Person4 = styled.div`
  display: flex;
  position: relative;
  margin-top: 46px;
  margin-right: 0.43px;
  width: fit-content;
  align-items: center;
  gap: 11.227397918701172px;
  padding: 14.034248352050781px 19.647947311401367px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 22.45px;
  transform: rotate(19.69deg);
  box-shadow: 0px 2.806849479675293px 30.875343322753906px #0000000a, 0px 0px 5.613698959350586px #0000000a,
    0px 2.806849479675293px 11.227397918701172px #00000003;
`;

const Photo1 = styled.img`
  position: relative;
  min-width: 44.912017822265625px;
  height: 44.912109375px;
  margin-top: -19.76px;
  transform: rotate(10.31deg);
  object-fit: cover;
`;

const Name4 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: 22.5px;
  letter-spacing: -0.22px;
  line-height: 33.7px;
  white-space: nowrap;
`;

const Frame52 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 14.034247398376465px;
  padding: 2.806849241256714px 5.613698482513428px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 8.42px;
`;

const Percent1 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1.4px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--lighttextsecondary);
  font-size: 16.8px;
  letter-spacing: 0.7px;
  line-height: 22.5px;
  white-space: nowrap;
`;

const Person5 = styled.div`
  display: flex;
  position: relative;
  align-self: flex-start;
  margin-top: 6px;
  width: fit-content;
  align-items: center;
  gap: 11.932014465332031px;
  padding: 14.915017127990723px 20.88102149963379px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 23.86px;
  transform: rotate(9.63deg);
  box-shadow: 0px 2.983003616333008px 32.81303787231445px #0000000a, 0px 0px 5.966007232666016px #0000000a,
    0px 2.983003616333008px 11.932014465332031px #00000003;
`;

const Photo2 = styled.img`
  position: relative;
  min-width: 47.731292724609375px;
  height: 47.73095703125px;
  margin-top: -16.93px;
  transform: rotate(20.37deg);
  object-fit: cover;
`;

const Name5 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: 23.9px;
  letter-spacing: -0.24px;
  line-height: 35.8px;
  white-space: nowrap;
`;

const Frame53 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 14.91501522064209px;
  padding: 2.9830033779144287px 5.966006755828857px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 8.95px;
`;

const Percent2 = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  margin-top: -1.49px;
  font-family: var(--font-family-inter);
  font-weight: 700;
  color: var(--lighttextsecondary);
  font-size: 17.9px;
  letter-spacing: 0.75px;
  line-height: 23.9px;
  white-space: nowrap;
`;

const Frame39 = styled.div`
  width: 1051px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0 226px;
  align-items: flex-end;
  gap: 44px;
  border-radius: 60px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(218.4765726327896, 249.6875050663948, 226.81741386651993) 0%,
    rgb(240.23125648498535, 252.87500202655792, 243.78728806972504) 100%
  );
`;

const MissingAMeetingSh = styled.p`
  ${ValignTextMiddle}
  ${Titlelarge}
            height: 36px;
  align-self: center;
  margin-top: 59px;
  min-width: 597px;
  font-weight: 600;
  color: var(--lighttextprimary);
  text-align: center;
  line-height: 36px;
  white-space: nowrap;
`;

const Frame113 = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 599px;
  align-items: flex-start;
  gap: 33.22011947631836px;
  padding: 30.444154739379883px;
  background-color: var(--darkbackgroundprimary-button);
  border-radius: 23.92px;
  box-shadow: 0px 2.1745824813842773px 23.920406341552734px #0000000a, 0px 0px 4.349164962768555px #0000000a,
    0px 2.1745824813842773px 8.69832992553711px #00000003;
`;

const Frame85 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 16.61005973815918px;
  position: relative;
`;

const Frame86 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 12.457545280456543px;
  position: relative;
`;

const Frame87 = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  gap: 10.381288528442383px;
  padding: 6.2287726402282715px;
  position: relative;
  background-color: var(--lightbackgroundgrouped);
  border-radius: 20.76px;
`;

const Summary = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: var(--font-size-m);
  letter-spacing: -0.17px;
  line-height: 24.9px;
  white-space: nowrap;
`;

const Frame88 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16.61005973815918px;
  position: relative;
  align-self: stretch;
`;

const IntroductionMaxwell = styled.p`
  ${ValignTextMiddle}
  position: relative;
  align-self: stretch;
  margin-top: -1.04px;
  font-family: var(--font-family-inter);
  font-weight: 600;
  color: var(--lighttextprimary);
  font-size: var(--font-size-m);
  letter-spacing: -0.03px;
  line-height: 16.6px;
`;

const Frame371 = styled.div`
  display: flex;
  position: relative;
  margin-top: 123px;
  margin-left: 0;
  flex-direction: column;
  width: 1608px;
  align-items: center;
  gap: 60px;
`;

const Frame391 = styled.div`
  display: flex;
  flex-direction: column;
  width: 1605px;
  align-items: center;
  gap: 43px;
  padding: 60px 226px;
  position: relative;
  border-radius: 60px;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    rgb(54.00000058114529, 44.000001177191734, 77.00000301003456) 0%,
    rgb(9.000000413507223, 7.000000057742, 29.000000171363354) 100%
  );
`;

export default Landing;
