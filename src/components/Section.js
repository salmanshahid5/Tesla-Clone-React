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


