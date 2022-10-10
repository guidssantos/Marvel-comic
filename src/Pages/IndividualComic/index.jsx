import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navbar } from '../../components/Navbar/Navbar';
import * as CartActions from '../../store/modules/cart/actions';
import { SectionContainer } from '../../components/SectionContainer';
import { Heading } from '../../components/Heading';
import { ImgComic } from '../Home/styles';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { Cart } from '../../components/Menu/styles';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';

export function IndividualComic() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get(`/comics/${id}`)
      .then((response) => {
        setComics(response.data.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddProduct(comic) {
    dispatch(CartActions.addToCart(comic));
  }

  return isLoading ? (
    <Loading />
  ) : (
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
                  $ {comics.prices[0].price}
                </Styled.PriceComic>
                <Styled.AddCart onClick={() => handleAddProduct(comics)}>
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
