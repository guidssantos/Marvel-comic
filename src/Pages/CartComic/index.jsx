import * as Styled from './styles';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import { Heading } from '../../components/Heading';
import { Footer } from '../../components/Footer';
import hq from '../../assets/hqs/hq.jpg';

export function CartComic() {
  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
        <Heading>Carrinho de Compras</Heading>
        <Styled.Wrapper>
          <Styled.CartWrapper>
            <Styled.ProductWrapper>
              <Styled.ProductTitle>PRODUTO</Styled.ProductTitle>
              <Styled.CartImg src={hq} />
              <Styled.ProductName>
                Avengers: Earth&apos;s Mightiest Heroes (2004) #1
              </Styled.ProductName>
            </Styled.ProductWrapper>
            <Styled.ProductWrapper>
              <Styled.OtherTitle>PREÇO</Styled.OtherTitle>
              <Styled.ProductValue>R$: 100</Styled.ProductValue>
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
