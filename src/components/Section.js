import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) {
  return (
    <SectionWrapper bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          {description}
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGruop>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGruop>
        </Fade>
        <DownArrow src={"/images/down-arrow.svg"} />
      </Buttons>
    </SectionWrapper>
  );
}

export default Section;

const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1.5em;
  align-items: center;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 0.4rem;
  }

  a {
    border-bottom: 1px solid;
  }
`;

const ButtonGruop = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.9);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.3em;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(251, 251, 251, 0.8);
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  margin-inline: auto;
  animation: animationDown infinite 1.15s;
  overflow-x: hidden;
`;

const Buttons = styled.div``;
