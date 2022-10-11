import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Typical from 'react-typical';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import { Loading } from '../../components/Loading';
import { api } from '../../services/api';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
  const [comics, setComics] = useState([]);
  const [newComics, setNewComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/comics?limit=10`, {
        params: {
          offset: 400,
        },
      })
      .then((response) => {
        setComics(response.data.data.results);
      })
      .catch((err) => console.log(err));

    api
      .get(`/comics?limit=10`, {
        params: {
          offset: 700,
        },
      })
      .then((response) => {
        setNewComics(response.data.data.results);
        setIsLoading(false);
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
          <Heading>
            <Typical
              steps={['MARVEL COMICS', 3000, 'MARVEL STUDIOS', 3000]}
              loop={Infinity}
            />
          </Heading>
        </SectionContainer>
      </SectionBackground>
      <SectionContainer>
        <Styled.HeadingComic>NEW COMICS</Styled.HeadingComic>
        <Styled.ContainerComic>
          {newComics.map((newComics) => (
            <Styled.BackgroundComic key={newComics.id}>
              <Link to={`comic/${newComics.id}`}>
                <Styled.ImgComic
                  src={`${newComics.thumbnail.path}.${newComics.thumbnail.extension}`}
                />
                <Styled.TextComic>{newComics.title}</Styled.TextComic>
              </Link>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
      </SectionContainer>
      <SectionContainer>
        <Styled.HeadingComic>MOST PURCHASED COMICS</Styled.HeadingComic>
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
          <Styled.HeadingAllComics>SEE ALL COMICS</Styled.HeadingAllComics>
        </Link>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
