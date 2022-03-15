import styled from "styled-components";

interface IProps {
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
}

const Button = styled.a`
  background-color: black;
  color: white;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 22px;
  text-decoration: none;

  display: flex;
  align-items: center;

  &:hover {
    background-color: #333;
  }
`;

export const LinkButton: React.FC<IProps> = (props): JSX.Element => (
  <Button href={props.href} target={props.target}>
    {props.children}
  </Button>
)
