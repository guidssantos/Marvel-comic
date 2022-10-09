import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import * as Styled from './styles';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import { Heading } from '../../components/Heading';
import * as CartActions from '../../store/modules/cart/actions';
import { Footer } from '../../components/Footer';
import { Loading } from '../../components/Loading';

export function CartComic() {
  const [isLoading, setIsLoading] = useState(true);

  const cart = useSelector((state) =>
    state.cart.map((comic) => ({
      ...comic,
      subtotal: comic.prices[0].price * comic.amount,
    }))
  );

  const total = useSelector((state) =>
    state.cart.reduce(
      (totalSum, product) =>
        totalSum + product.prices[0].price * product.amount,
      0
    )
  );

  const dispatch = useDispatch();

  function increment(comic) {
    dispatch(
      CartActions.updateAmount({
        id: comic.id,
        amount: comic.amount + 1,
      })
    );
  }

  function decrement(comic) {
    dispatch(
      CartActions.updateAmount({
        id: comic.id,
        amount: comic.amount - 1,
      })
    );
  }

  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
        {/* <Heading>Carrinho de Compras</Heading> */}
        <Styled.Wrapper>
          {cart.map((comic) => (
            <Styled.CartWrapper key={comic.id}>
              <Styled.ProductWrapper>
                <Styled.ProductTitle>PRODUTO</Styled.ProductTitle>
                <Styled.CartImg
                  src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                />
                <Styled.ProductName>{comic.title}</Styled.ProductName>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>PREÇO</Styled.OtherTitle>
                <Styled.ProductValue>
                  $ {comic.prices[0].price ? comic.prices[0].price : 7.99}
                </Styled.ProductValue>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>QUANTIDADE</Styled.OtherTitle>
                <Styled.ProductValue>
                  <Styled.ButtonPlusMinus
                    type='button'
                    onClick={() => increment(comic)}
                  >
                    <AiOutlinePlusCircle />
                  </Styled.ButtonPlusMinus>
                  {comic.amount}
                  <Styled.ButtonPlusMinus
                    type='button'
                    onClick={() => decrement(comic)}
                  >
                    <AiOutlineMinusCircle />
                  </Styled.ButtonPlusMinus>
                </Styled.ProductValue>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>TOTAL</Styled.OtherTitle>
                <Styled.ProductValue>
                  $ {comic.subtotal.toFixed(3).slice(0, -1)}
                </Styled.ProductValue>
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
