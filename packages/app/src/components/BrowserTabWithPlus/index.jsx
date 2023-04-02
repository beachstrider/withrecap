import React from "react";
import styled from "styled-components";
import { ValignTextMiddle } from "../../styledMixins";


function BrowserTabWithPlus(props) {
  const { favicon, tab_Name } = props;

  return (
    <BrowserTabWithPlus1>
      <Frame4>
        <CurveL src="/img/curve-l.svg" alt="Curve L" />
        <FaviconTextIcons>
          <Favicon src={favicon} alt="Favicon" />
          <TabName>{tab_Name}</TabName>
          <IconClose src="/img/icon---close.svg" alt="Icon - Close" />
        </FaviconTextIcons>
        <CurveL src="/img/curve-r.svg" alt="Curve R" />
      </Frame4>
      <IconPlus src="/img/icon---plus.svg" alt="Icon - Plus" />
    </BrowserTabWithPlus1>
  );
}

const BrowserTabWithPlus1 = styled.div`
  height: 34px;
  align-self: flex-end;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 131px;
  gap: 8px;
`;

const Frame4 = styled.div`
  display: flex;
  position: relative;
  width: fit-content;
  align-items: flex-start;
`;

const CurveL = styled.img`
  position: relative;
  min-width: 6px;
  height: 8px;
`;

const FaviconTextIcons = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  gap: 9px;
  padding: 8px;
  position: relative;
  background-color: var(--onyx);
  border-radius: 8px 8px 0px 0px;
  overflow: hidden;
`;

const Favicon = styled.img`
  position: relative;
  min-width: 16px;
  height: 16px;
  object-fit: cover;
`;

const TabName = styled.div`
  ${ValignTextMiddle}
  position: relative;
  width: fit-content;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--darkbackgroundprimary-button);
  font-size: var(--font-size-12px);
  letter-spacing: 0.2px;
  line-height: normal;
`;

const IconClose = styled.img`
  position: relative;
  min-width: 18px;
  height: 18px;
`;

const IconPlus = styled.img`
  width: 20px;
  height: 20px;
  position: relative;
`;

export default BrowserTabWithPlus;
