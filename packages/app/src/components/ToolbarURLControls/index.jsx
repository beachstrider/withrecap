import React from "react";
import IconArrowHome from "../IconArrowHome";
import IconArrowSecure from "../IconArrowSecure";
import IconArrowMore from "../IconArrowMore";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function ToolbarURLControls(props) {
  const { domainCom, subdomain, imageUserProfile, iconArrowHomeProps } = props;

  return (
    <ToolbarURLControls1>
      <ToolbarURLControls2>
        <LeftLockedIcons>
          <IconBack src="/img/icon---back.svg" alt="Icon - Back" />
          <IconBack src="/img/icon---forward.svg" alt="Icon - Forward" />
          <IconBack src="/img/icon---refresh.svg" alt="icon-refresh" />
          <IconArrowHome />
        </LeftLockedIcons>
        <URLBar>
          <IconArrowSecure />
          <URLText>
            <Domaincom>{domainCom}</Domaincom>
            <Subdomain>{subdomain}</Subdomain>
          </URLText>
          <IconArrowHome className={iconArrowHomeProps.className} />
        </URLBar>
        <RightLockedIcons>
          <ImageUserProfile src={imageUserProfile} alt="Image - User Profile" />
          <IconArrowMore />
        </RightLockedIcons>
      </ToolbarURLControls2>
    </ToolbarURLControls1>
  );
}

const ToolbarURLControls1 = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 764px;
`;

const ToolbarURLControls2 = styled.div`
  width: 764px;
  height: 38px;
  display: flex;
  padding: 0 12px;
  align-items: center;
  background-color: var(--onyx);
  box-shadow: inset 0px -1px 0px #dadce0;
`;

const LeftLockedIcons = styled.div`
  width: 109px;
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const IconBack = styled.img`
  width: 16px;
  height: 16px;
`;

const URLBar = styled.div`
  width: 549px;
  height: 28px;
  position: relative;
  margin-left: 13px;
  display: flex;
  padding: 0 10px;
  align-items: center;
  background-color: var(--shark);
  border-radius: 14px;
  overflow: hidden;
`;

const URLText = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: flex-start;
  min-width: 165px;
`;

const Domaincom = styled.div`
  ${ValignTextMiddle}
  height: 16px;
  position: relative;
  margin-top: -1px;
  min-width: 113px;
  font-family: var(--font-family-roboto-regular);
  font-weight: 400;
  color: var(--darkbackgroundprimary-button);
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: normal;
`;

const Subdomain = styled.div`
  ${ValignTextMiddle}
  height: 16px;
  position: relative;
  margin-top: -1px;
  min-width: 6px;
  font-family: var(--font-family-roboto-regular);
  font-weight: 400;
  color: #86888a;
  font-size: 14px;
  letter-spacing: 0.25px;
  line-height: normal;
`;

const RightLockedIcons = styled.div`
  width: 51px;
  position: relative;
  margin-left: 16px;
  display: flex;
  align-items: center;
  gap: 13px;
`;

const ImageUserProfile = styled.img`
  width: 22px;
  height: 22px;
  object-fit: cover;
`;

export default ToolbarURLControls;
