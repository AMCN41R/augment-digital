import styled, { css } from "styled-components";

interface IProps {
  size: 'sm' | 'md' | 'lg' | 'title' | 'subtitle'
}

const TextStyled = styled.div<IProps>`
  ${p => p.size === 'title' && css`
    font-size: 80px;
    @media screen and (max-width: 768px) { font-size: 64px; }
    @media screen and (max-width: 576px) { font-size: 48px; }
  `}

  ${p => p.size === 'subtitle' && css`
    font-size: 48px;
    @media screen and (max-width: 768px) { font-size: 40px; }
    @media screen and (max-width: 576px) { font-size: 32px; }
  `}

  ${p => p.size === 'lg' && css`
    font-size: 32px;
    @media screen and (max-width: 768px) { font-size: 24px; }
    @media screen and (max-width: 576px) { font-size: 18px; }
  `}

  ${p => p.size === 'md' && css`
    font-size: 24px;
    @media screen and (max-width: 768px) { font-size: 20px; }
    @media screen and (max-width: 576px) { font-size: 16px; }
  `}

  ${p => p.size === 'sm' && css`
    font-size: 18px;
    @media screen and (max-width: 768px) { font-size: 14px; }
    @media screen and (max-width: 576px) { font-size: 12px; }
  `}
`;

export const Text:React.FC<IProps> = (props): JSX.Element => (
  <TextStyled {...props}>
    {props.children}
  </TextStyled>
)
