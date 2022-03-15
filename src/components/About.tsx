import { faRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FadeUp } from "./atoms/FadeUp";
import { Flex } from "./atoms/Flex";
import { Footer } from "./atoms/Footer";
import { Page } from "./atoms/Page";
import { Text } from "./atoms/Text";

interface IProps {
  id?: string;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 1.5rem;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 900px) {
    grid-template-columns: 5fr 1fr 5fr 1fr 5fr;
  }
`;

const Arrow: React.FC = (): JSX.Element => (
  <Flex>
    <Text size="lg">
      <FontAwesomeIcon icon={faRightLong} fixedWidth={true} />
    </Text>
  </Flex>
);

const GridCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background-color: black;
  color: white;
  padding: 1rem;
  box-sizing: border-box;
`;

const InfoCard: React.FC<{ title: string, description: string }> = (props): JSX.Element => (
  <GridCard>
    <Text size="lg">{props.title}</Text>
    <div className="mt-2">
      <Text size="sm">
        {props.description}
      </Text>
    </div>
  </GridCard>
)

export const About: React.FC<IProps> = (props): JSX.Element => (
  <Page id={props.id}>
    <Flex basis={1}>
      <FadeUp>
        <Text size="title">
          <span>Shift </span>
          <span className='text-bold'>Happens</span>
        </Text>
      </FadeUp>
    </Flex>
    <Flex basis={2} alignItems="start">
      <FadeUp>
        <Grid className="mx-3">
          <InfoCard
            title="Consulting"
            description="Here is some description about some of the consulting services that are provided by this company."
          />
          <Arrow />
          <InfoCard
            title="Engineering"
            description="Here is some description about some of the consulting services that are provided by this company."
          />
          <Arrow />
          <InfoCard
            title="Transformation"
            description="Here is some description about some of the consulting services that are provided by this company."
          />
        </Grid>
      </FadeUp>
    </Flex>
    <Footer />
  </Page>
)
