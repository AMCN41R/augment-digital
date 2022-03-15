import styled from "styled-components";

const BackgroundStyled = styled.div`
  background: url(/img/bg-crop.jpg) no-repeat;
  background-position: center left;
  background-attachment: fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  position: fixed;
  height: 100vh;
  width: 100%;

  opacity: 50%;
  z-index: -1;
`;

export const Background: React.FC = (): JSX.Element => (
  <BackgroundStyled />
)
