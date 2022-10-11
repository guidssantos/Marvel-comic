import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Typical from 'react-typical';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';

import { api } from '../../services/api';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';
import { Pagination } from '../../components/Pagination';
import {
  BackgroundComic,
  ContainerComic,
  ImgComic,
  TextComic,
} from '../Home/styles';

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
          offset: 300,
          limit: 100,
        },
      })
      .then((response) => {
        setComics([...response.data.data.results]);

        setIsLoading(false);
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
          <Heading>
            <Typical steps={['ALL COMICS', 4000]} loop={Infinity} />
          </Heading>
        </SectionContainer>
      </SectionBackground>
      <SectionContainer>
        <ContainerComic>
          {getRandom(currentComics, 10).map((comics) => (
            <BackgroundComic key={comics.id}>
              <Link to={`/comic/${comics.id}`}>
                <ImgComic
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                />
                <TextComic>{comics.title}</TextComic>
              </Link>
            </BackgroundComic>
          ))}
        </ContainerComic>
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
