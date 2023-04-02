import React from "react";
import BrowserChromeLight from "../BrowserChromeLight";
import styled from "styled-components";


function BrowserChromeDark(props) {
  const { browserChromeLightProps } = props;

  return (
    <BrowserChromeDark1>
      <BrowserChromeLight
        broswerControlBarProps={browserChromeLightProps.broswerControlBarProps}
        toolbarURLControlsProps={browserChromeLightProps.toolbarURLControlsProps}
      />
    </BrowserChromeDark1>
  );
}

const BrowserChromeDark1 = styled.div`
  position: relative;
  min-width: 764px;
  height: 319px;
`;

export default BrowserChromeDark;
