import styled, { css } from "styled-components";

interface IProps {
  direction?: 'row' | 'column';
  fullWidth?: boolean;
  basis?: number;
  alignItems?: 'center' | 'start' | 'flex-start' | 'end' | 'flex-end';
}

const FlexStyled = styled.div<IProps>`
  display: flex;
  flex-direction: ${p => p.direction};
  align-items: ${p => p.alignItems};
  justify-content: center;
  ${p => p.fullWidth && css`width: 100%;`}
  ${p => p.basis && css`flex: ${p.basis}`}
`;

export const Flex: React.FC<IProps> = (props): JSX.Element => (
  <FlexStyled {...props}>
    {props.children}
  </FlexStyled>
)

Flex.defaultProps = {
  direction: 'row',
  fullWidth: false,
  alignItems: 'center'
}
