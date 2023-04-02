import React from "react";
import styled from "styled-components";
import { InterNormalSteelGray18px, InterSemiBoldSteelGray18px, ValignTextMiddle } from "../../styledMixins";


function Frame14(props) {
  const { addToGoogleChrome, recapWorksWithOnl } = props;

  return (
    <Frame141>
      <AddToGoogleChrome>{addToGoogleChrome}</AddToGoogleChrome>
      <RecapWorksWithOnl>{recapWorksWithOnl}</RecapWorksWithOnl>
    </Frame141>
  );
}

const Frame141 = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: flex-start;
  gap: 6px;
  position: relative;
`;

const AddToGoogleChrome = styled.div`
  ${ValignTextMiddle}
  ${InterSemiBoldSteelGray18px}
            position: relative;
  width: fit-content;
  margin-top: -1px;
  letter-spacing: -0.32px;
  line-height: normal;
`;

const RecapWorksWithOnl = styled.p`
  ${ValignTextMiddle}
  ${InterNormalSteelGray18px}
            position: relative;
  width: 455px;
  opacity: 0.8;
  letter-spacing: -0.32px;
  line-height: 26px;
`;

export default Frame14;
