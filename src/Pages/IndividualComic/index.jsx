import P from 'prop-types';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import hq from '../../assets/hqs/hq.jpg';
import { Heading } from '../../components/Heading';
import { ImgComic } from '../Home/styles';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { Cart } from '../../components/Menu/styles';

export function IndividualComic() {
  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
        <Styled.ReturnHome>Voltar para a Home</Styled.ReturnHome>
        <Styled.OneComicWrapper>
          <ImgComic src={hq} alt='imagem_hq' />
          <Styled.TextWrapper>
            <Heading>Avengers: Earth&apos;s Mightiest Heroes (2004) #1</Heading>
            <Styled.DescriptionComic>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              in tempus neque, vel laoreet dui. Sed dictum, tortor eget
              elementum finibus, elit erat ornare lorem, nec scelerisque elit
              dolor vitae augue. Suspendisse finibus justo at vehicula varius.
              Aliquam sed ex at purus suscipit sagittis. Sed nec justo quis
              dolor maximus vulputate. Duis dui libero, dapibus non arcu eget,
              bibendum vestibulum ipsum. In rutrum id mauris vitae dictum. In
              lectus ipsum, tempor sit amet ultrices vitae, consectetur eu quam.
              Nam sagittis porttitor est, ut dictum est mattis nec. Pellentesque
              mollis auctor ex ac mattis. Phasellus blandit felis sit amet
              molestie auctor.
            </Styled.DescriptionComic>
            <Styled.PriceWrapper>
              <Styled.PriceComic>$: 2,99</Styled.PriceComic>
              <Styled.AddCart>
                <Cart />
                Adicionar ao Carrinho
              </Styled.AddCart>
            </Styled.PriceWrapper>
          </Styled.TextWrapper>
        </Styled.OneComicWrapper>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
