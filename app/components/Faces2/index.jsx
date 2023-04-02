import React from "react";
import styled from "styled-components";


function Faces2(props) {
  const { src } = props;

  return (
    <Faces>
      <Photo src={src} alt="Photo" />
    </Faces>
  );
}

const Faces = styled.div`
  display: flex;
  width: fit-content;
  align-items: flex-start;
  position: relative;
`;

const Photo = styled.img`
  position: relative;
  min-width: 24px;
  height: 24px;
  object-fit: cover;
`;

export default Faces2;
