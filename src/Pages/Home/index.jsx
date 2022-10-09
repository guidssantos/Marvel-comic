import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import api from '../../services/api';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/comics?limit=5`)
      .then((response) => {
        setComics(response.data.data.results);
        console.log(comics);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return isLoading ? (
    <div>Carregando</div>
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
            <Styled.BackgroundComic key={comics.id}>
              <Styled.ImgComic
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              />
              <Styled.TextComic>{comics.title}</Styled.TextComic>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
      </SectionContainer>
      <SectionContainer>
        <Styled.HeadingComic>HQS MAIS COMPRADAS</Styled.HeadingComic>
        <Styled.ContainerComic>
          {comics.map((comics) => (
            <Styled.BackgroundComic key={comics.id}>
              <Link to='/comic'>
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
