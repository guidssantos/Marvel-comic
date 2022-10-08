import { Link } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import api from '../../services/api';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

export function AllComics() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get(`/comics`)
      .then((response) => {
        setComics(response.data.data.results);
        console.log(comics);
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

  return (
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
              <Styled.ImgComic
                src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              />
              <Styled.TextComic>{comics.title}</Styled.TextComic>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
        <button onClick={handleMore}>Ver mais</button>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
