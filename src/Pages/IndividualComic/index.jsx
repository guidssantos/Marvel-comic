import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
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

        console.log(comics);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleAddProduct(comic) {
    dispatch(CartActions.addToCart(comic));
    toast.success('You have added 1 item to cart');
  }
  return isLoading ? (
    <Loading />
  ) : (
    <>
      {comics.map((comics, index) => (
        <Styled.Container
          style={{
            backgroundImage: `url(${comics.thumbnail.path}.${comics.thumbnail.extension})`,
          }}
        >
          <Navbar />
          <Styled.Background>
            <SectionContainer>
              <Styled.ReturnHome>
                <Link to='/'>Return Home</Link>
              </Styled.ReturnHome>
              <Toaster />
              <Styled.OneComicWrapper>
                <ImgComic
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt='imagem_hq'
                />

                <Styled.TextWrapper>
                  <Heading>{comics.title}</Heading>
                  <Styled.DescriptionComic>
                    {comics.description
                      ? comics.description
                      : 'Without description'}
                  </Styled.DescriptionComic>

                  <Styled.AuthorsWrapper>
                    {comics.creators.items.map((comic) => (
                      <Styled.AuthorsDescription>
                        <strong>{comic.role}:</strong> {comic.name}
                      </Styled.AuthorsDescription>
                    ))}
                  </Styled.AuthorsWrapper>
                  <Styled.PriceWrapper>
                    <Styled.PriceComic>
                      Price: $ {comics.prices[0].price}
                    </Styled.PriceComic>
                    <Styled.AddCart onClick={() => handleAddProduct(comics)}>
                      <Cart />
                      Add To Cart
                    </Styled.AddCart>
                  </Styled.PriceWrapper>
                </Styled.TextWrapper>
              </Styled.OneComicWrapper>
            </SectionContainer>
          </Styled.Background>
          <Footer />
        </Styled.Container>
      ))}
    </>
  );
}
