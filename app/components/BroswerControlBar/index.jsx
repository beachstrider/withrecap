import React from "react";
import BrowserTabWithPlus from "../BrowserTabWithPlus";
import styled from "styled-components";


function BroswerControlBar(props) {
  const { browserTabWithPlusProps } = props;

  return (
    <ToolbarBrowserControls>
      <BroswerControlBar1>
        <BrowserControls>
          <OptionClose></OptionClose>
          <OptionMinimize></OptionMinimize>
          <OptionExpand></OptionExpand>
        </BrowserControls>
        <BrowserTabWithPlus favicon={browserTabWithPlusProps.favicon} tab_Name={browserTabWithPlusProps.tab_Name} />
      </BroswerControlBar1>
    </ToolbarBrowserControls>
  );
}

const ToolbarBrowserControls = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 764px;
`;

const BroswerControlBar1 = styled.div`
  width: 764px;
  height: 42px;
  position: relative;
  display: flex;
  padding: 0 13px;
  align-items: center;
  gap: 15px;
  background-color: var(--shark);
  box-shadow: 0px 4px 4px #00000040;
`;

const BrowserControls = styled.div`
  width: 52px;
  margin-top: 1px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const OptionClose = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ff6058;
  border-radius: 6px;
  border: 0.5px solid;
  border-color: #e14942;
`;

const OptionMinimize = styled.div`
  width: 12px;
  height: 12px;
  background-color: #ffc130;
  border-radius: 6px;
  border: 0.5px solid;
  border-color: #e1a325;
`;

const OptionExpand = styled.div`
  width: 12px;
  height: 12px;
  background-color: #27ca40;
  border-radius: 6px;
  border: 0.5px solid;
  border-color: #3eaf3f;
`;

export default BroswerControlBar;
