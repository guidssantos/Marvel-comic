import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import { api } from '../../services/api';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';

export function AllComics() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/comics?limit=15`)
      .then((response) => {
        setComics(response.data.data.results);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleMore = useCallback(async () => {
    try {
      const offset = comics.length;
      const response = await api.get('comics', {
        params: {
          offset,
        },
      });

      setComics([...comics, ...response.data.data.results]);
    } catch (err) {
      console.log(err);
    }
  }, [comics]);

  return isLoading ? (
    <Loading />
  ) : (
    <Styled.Container>
      <Navbar />
      <SectionBackground>
        <SectionContainer>
          <Heading>TODAS AS HQS</Heading>
        </SectionContainer>
      </SectionBackground>
      <SectionContainer>
        <Styled.ContainerComic>
          {comics.map((comics) => (
            <Styled.BackgroundComic key={comics.id}>
              <Link key={comics.id} to={`/comic/${comics.id}`}>
                <Styled.ImgComic
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                />
                <Styled.TextComic>{comics.title}</Styled.TextComic>
              </Link>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
        <button type='button' onClick={handleMore}>
          Ver mais
        </button>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
