import { Link } from 'react-router-dom';
import { Heading } from '../../components/Heading';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionBackground } from '../../components/SectionBackground';
import { SectionContainer } from '../../components/SectionContainer';
import hq from '../../assets/hqs/hq.jpg';
import * as Styled from './styles';
import { Footer } from '../../components/Footer';

export function Home() {
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
            <Styled.ImgComic src={hq} />
            <Styled.TextComic>
              Avengers: Earth&apos;s Mightiest Heroes (2004) #1
            </Styled.TextComic>
          </Styled.BackgroundComic>
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
