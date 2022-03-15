import styled from "styled-components";

interface IProps {
  id?: string;
}

const PageStyled = styled.div`
  height: 100vh;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Page:React.FC<IProps> = (props): JSX.Element => (
  <PageStyled id={props.id}>
    {props.children}
  </PageStyled>
)
