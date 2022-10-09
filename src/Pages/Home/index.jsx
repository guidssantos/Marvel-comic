import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import * as Styled from './styles';
import * as CartActions from '../../store/modules/cart/actions';
import { Footer } from '../../components/Footer';

export function Home() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const amount = useSelector((state) =>
    state.cart.reduce((sumAmount, comic) => {
      sumAmount[comic.id] = comic.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get(`/comics?limit=5`)
      .then((response) => {
        setComics(response.data.data.results);
        setIsLoading(false);
        console.log(comics);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <Styled.Container>
      <Navbar />
      <SectionBackground>
        <SectionContainer>
          <Heading>MARVEL COMICS</Heading>
        </SectionContainer>
      </SectionBackground>
      <SectionContainer>
        <Styled.HeadingComic>NOVAS HQS</Styled.HeadingComic>
        <Styled.ContainerComic>
          {comics.map((comics) => (
            <Styled.BackgroundComic>
              <Link key={comics.id} to={`comic/${comics.id}`}>
                <Styled.ImgComic
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                />
                <Styled.TextComic>{comics.title}</Styled.TextComic>
              </Link>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
      </SectionContainer>
      <SectionContainer>
        <Styled.HeadingComic>HQS MAIS COMPRADAS</Styled.HeadingComic>
        <Styled.ContainerComic>
          {comics.map((comics) => (
            <Styled.BackgroundComic key={comics.id}>
              <Link to={`comic/${comics.id}`}>
                <Styled.ImgComic
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                />
                <Styled.TextComic>{comics.title}</Styled.TextComic>
              </Link>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
        <Link to='/comics'>
          <h1>Ver todas as HQS</h1>
        </Link>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
