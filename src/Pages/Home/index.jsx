import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import hq from '../../assets/hqs/hq.jpg';
import api from '../../services/api';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
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

  return (
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
          <Styled.BackgroundComic>
            <Styled.ImgComic src={hq} />
            <Styled.TextComic>
              Avengers: Earth&apos;s Mightiest Heroes (2004) #1
            </Styled.TextComic>
          </Styled.BackgroundComic>
          <Styled.BackgroundComic>
            <Styled.ImgComic src={hq} />
            <Styled.TextComic>
              Avengers: Earth&apos;s Mightiest Heroes (2004) #1
            </Styled.TextComic>
          </Styled.BackgroundComic>
          <Styled.BackgroundComic>
            <Styled.ImgComic src={hq} />
            <Styled.TextComic>
              Avengers: Earth&apos;s Mightiest Heroes (2004) #1
            </Styled.TextComic>
          </Styled.BackgroundComic>
          <Styled.BackgroundComic>
            <Styled.ImgComic src={hq} />
            <Styled.TextComic>
              Avengers: Earth&apos;s Mightiest Heroes (2004) #1
            </Styled.TextComic>
          </Styled.BackgroundComic>
          <Styled.BackgroundComic>
            <Link to='/comic'>
              <Styled.ImgComic src={hq} />
              <Styled.TextComic>
                Avengers: Earth&apos;s Mightiest Heroes (2004) #1
              </Styled.TextComic>
            </Link>
          </Styled.BackgroundComic>
        </Styled.ContainerComic>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
