import P from 'prop-types';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import hq from '../../assets/hqs/hq.jpg';
import { Heading } from '../../components/Heading';
import { ImgComic } from '../Home/styles';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { Cart } from '../../components/Menu/styles';
import api from '../../services/api';

export function IndividualComic() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get(`/comics/2`)
      .then((response) => {
        setComics(response.data.data.results);
        console.log(comics);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
        <Styled.ReturnHome>
          <Link to='/'>Voltar para a Home</Link>
        </Styled.ReturnHome>
        {comics.map((comics) => (
          <Styled.OneComicWrapper key={comics.id}>
            <ImgComic
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt='imagem_hq'
            />
            <Styled.TextWrapper>
              <Heading>{comics.title}</Heading>
              <Styled.DescriptionComic>
                {comics.description}
              </Styled.DescriptionComic>
              <Styled.PriceWrapper>
                <Styled.PriceComic>
                  $ {comics.prices[0].price ? comics.prices[0].price : 7.99}
                </Styled.PriceComic>
                <Styled.AddCart>
                  <Cart />
                  Adicionar ao Carrinho
                </Styled.AddCart>
              </Styled.PriceWrapper>
            </Styled.TextWrapper>
          </Styled.OneComicWrapper>
        ))}
      </SectionContainer>
      {/* <Footer /> */}
    </Styled.Container>
  );
}
