import styled from "styled-components";
import { Flex } from "./Flex";

const StyledFlex = styled(Flex)`
  background-color: #eee;
  padding: 12px;
  justify-content: space-evenly;
  box-sizing: border-box;
  border-top: 2px solid #b6b6b6;

  font-size: 12px;
  @media screen and (max-width: 576px) { font-size: 10px; }
`;

const companyNumber = 13040131;

const start = 2022;
const current = new Date().getFullYear();

const copyrightYear =
  current === start
    ? `${current}`
    : `${start}-${current}`;

export const Footer: React.FC = (): JSX.Element => (
  <StyledFlex fullWidth={true}>
    <div>© {copyrightYear} Augment Digital Limited</div>
    <div>Company number {companyNumber}</div>
  </StyledFlex>
);