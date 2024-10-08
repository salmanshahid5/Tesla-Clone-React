import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section(props) {
  console.log(props);
  return (
    <Wrap bgImage={props.image}>
      <Fade Bottom>
        <ItemText>
          <h1>{props.tittle}</h1>
          <p>{props.discription}</p>
        </ItemText>
      </Fade>
      <ButtonContainer>
        <Fade Bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>
        <DawnArrow src="/images/down-arrow.svg" alt="Down Arrow" />
      </ButtonContainer>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index:10;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => `/images/${props.bgImage}`});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: black;
  opacity: 0.65;
`;

const DawnArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
