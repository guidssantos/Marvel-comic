import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';

export function Home() {
  return (
    <Styled.Container>
      <Navbar />
      <SectionBackground>
        <SectionContainer>
          <Heading>MARVEL COMICS</Heading>
        </SectionContainer>
      </SectionBackground>
      <SectionContainer>teste</SectionContainer>
    </Styled.Container>
  );
}
