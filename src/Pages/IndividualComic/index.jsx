import P from 'prop-types';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import * as Styled from './styles';

export function IndividualComic() {
  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
        <p>teste</p>
      </SectionContainer>
    </Styled.Container>
  );
}
