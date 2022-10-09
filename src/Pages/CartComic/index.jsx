import { useEffect, useState } from 'react';
import * as Styled from './styles';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import { Heading } from '../../components/Heading';
import { Footer } from '../../components/Footer';
import hq from '../../assets/hqs/hq.jpg';
import api from '../../services/api';

export function CartComic() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    api
      .get(`/comics/600`)
      .then((response) => {
        setComics(response.data.data.results);
        console.log(comics);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
        <Heading>Carrinho de Compras</Heading>
        <Styled.Wrapper>
          {comics.map((comics) => (
            <Styled.CartWrapper>
              <Styled.ProductWrapper>
                <Styled.ProductTitle>PRODUTO</Styled.ProductTitle>
                <Styled.CartImg
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                />
                <Styled.ProductName>{comics.title}</Styled.ProductName>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>PREÇO</Styled.OtherTitle>
                <Styled.ProductValue>
                  $ {comics.prices[0].price ? comics.prices[0].price : 7.99}
                </Styled.ProductValue>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>QUANTIDADE</Styled.OtherTitle>
                <Styled.ProductValue>2</Styled.ProductValue>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>TOTAL</Styled.OtherTitle>
                <Styled.ProductValue>R$: 200</Styled.ProductValue>
              </Styled.ProductWrapper>
            </Styled.CartWrapper>
          ))}
          <Styled.CartCheckout>
            <Styled.CuponWrapper>
              <Styled.CuponTitle>Inserir Cupom</Styled.CuponTitle>
              <Styled.CuponInput type='text' />
            </Styled.CuponWrapper>
            <Styled.Purchase>
              <Styled.PurchaseButton type='submit'>
                Finalizar Compra
              </Styled.PurchaseButton>
            </Styled.Purchase>
          </Styled.CartCheckout>
        </Styled.Wrapper>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
