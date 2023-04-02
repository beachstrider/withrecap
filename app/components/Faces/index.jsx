import React from "react";
import styled from "styled-components";


function Faces(props) {
  const { photo1, photo2 } = props;

  return (
    <Faces1>
      <Photo src={photo1} alt="Photo" />
      <PHoto src={photo2} alt="PHoto" />
    </Faces1>
  );
}

const Faces1 = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const Photo = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  object-fit: cover;
`;

const PHoto = styled.img`
  position: relative;
  min-width: 32px;
  height: 32px;
  margin-top: -4px;
  margin-bottom: -4px;
  margin-right: -4px;
  margin-left: -2px;
  object-fit: cover;
`;

export default Faces;
