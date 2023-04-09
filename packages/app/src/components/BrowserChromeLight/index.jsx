import React from "react";
import BroswerControlBar from "../BroswerControlBar";
import ToolbarURLControls from "../ToolbarURLControls";
import styled from "styled-components";


function BrowserChromeLight(props) {
  const { broswerControlBarProps, toolbarURLControlsProps } = props;

  return (
    <BrowserChromeLight1>
      <BrowserURLControls>
        <BroswerControlBar browserTabWithPlusProps={broswerControlBarProps.browserTabWithPlusProps} />
        <ToolbarURLControls
          domainCom={toolbarURLControlsProps.domainCom}
          subdomain={toolbarURLControlsProps.subdomain}
          imageUserProfile={toolbarURLControlsProps.imageUserProfile}
          iconArrowHomeProps={toolbarURLControlsProps.iconArrowHomeProps}
        />
      </BrowserURLControls>
      <IMAGEGOESHERE src="/img/image-goes-here.svg" alt="IMAGE GOES HERE" />
    </BrowserChromeLight1>
  );
}

const BrowserChromeLight1 = styled.div`
  width: 764px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 319px;
`;

const BrowserURLControls = styled.div`
  width: 764px;
  height: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const IMAGEGOESHERE = styled.img`
  width: 764px;
  height: 239px;
  object-fit: cover;
`;

export default BrowserChromeLight;
