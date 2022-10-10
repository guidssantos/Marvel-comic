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
import { Pagination } from '../../components/Pagination';

export function AllComics() {
  const [comics, setComics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [comicsPerPage, setComicsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const pages = Math.ceil(comics.length / comicsPerPage);
  const startIndex = currentPage * comicsPerPage;
  const endIndex = startIndex + comicsPerPage;
  const currentComics = comics.slice(startIndex, endIndex);

  const getRandom = (arr, nr) =>
    arr
      .slice()
      .sort(() => 0.5 - Math.random())
      .slice(0, nr);

  useEffect(() => {
    api
      .get(`/comics`, {
        params: {
          offset: 400,
          limit: 100,
        },
      })
      .then((response) => {
        setComics([...response.data.data.results]);
        setIsLoading(false);
        console.log(comics);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [comicsPerPage]);

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
          {getRandom(currentComics, 10).map((comics) => (
            <Styled.BackgroundComic key={comics.id}>
              <Link to={`/comic/${comics.id}`}>
                <Styled.ImgComic
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                />
                <Styled.TextComic>{comics.title}</Styled.TextComic>
              </Link>
            </Styled.BackgroundComic>
          ))}
        </Styled.ContainerComic>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
