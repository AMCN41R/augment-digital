import styled from "styled-components";
import { LinkButton } from "./atoms/LinkButton";
import { Page } from "./atoms/Page";
import { Text } from "./atoms/Text";

interface IProps { }

const Description = styled.div`
  margin: 32px 0;
`;

export const Home: React.FC<IProps> = (props): JSX.Element => {

  return (
    <Page>
      <Text size="subtitle">
        <span>Augment </span>
        <span>Digital</span>
      </Text>
      <Text size="title">
        <span>Shift </span>
        <span className='text-bold'>Happens</span>
      </Text>
      <Description>
        <Text size="lg">
          Technical <span className="text-bold">Consulting</span> | Software <span className="text-bold">Engineering</span>
        </Text>
        <Text size="lg">
          Architecture as a <span className="text-bold">Service</span>
        </Text>
      </Description>
      <LinkButton href='mailto:hello@augmentdigital.net'>
        Get in touch
      </LinkButton>
    </Page>
  )
}
