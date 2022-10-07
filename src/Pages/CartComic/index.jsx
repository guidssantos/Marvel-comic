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
            <Styled.CartTable>
              <Styled.CartThead>
                <Styled.CartTr>
                  <Styled.CartTitle>PRODUTO</Styled.CartTitle>
                  <Styled.CartTitle>PREÇO</Styled.CartTitle>
                  <Styled.CartTitle>QUANTIDADE</Styled.CartTitle>
                  <Styled.CartTitle>TOTAL</Styled.CartTitle>
                </Styled.CartTr>
              </Styled.CartThead>
              <Styled.CartTbody>
                <Styled.CartTr>
                  <Styled.ProductCart>
                    <Styled.CartImg src={hq} />
                    <Styled.ProductName>
                      Avengers: Earth&apos;s Mightiest Heroes (2004) #1
                    </Styled.ProductName>
                  </Styled.ProductCart>
                  <Styled.ProductPrice>R$: 9,99</Styled.ProductPrice>
                  <Styled.ProductAmount>200</Styled.ProductAmount>
                  <Styled.ProductTotal>R$: 1.998</Styled.ProductTotal>
                </Styled.CartTr>
              </Styled.CartTbody>
            </Styled.CartTable>
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
