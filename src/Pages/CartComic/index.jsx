import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import * as Styled from './styles';
import { Navbar } from '../../components/Navbar/Navbar';
import { SectionContainer } from '../../components/SectionContainer';
import * as CartActions from '../../store/modules/cart/actions';
import { Footer } from '../../components/Footer';

export function CartComic() {
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

  function NeoApp(e) {
    if (e.target.value === 'neoapp') {
      return alert('oi');
    }
  }

  return (
    <Styled.Container>
      <Navbar />
      <SectionContainer>
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
                  $ {comic.prices[0].price}
                </Styled.ProductValue>
              </Styled.ProductWrapper>
              <Styled.ProductWrapper>
                <Styled.OtherTitle>QUANTIDADE</Styled.OtherTitle>
                <Styled.ProductValue>
                  <Styled.ButtonPlusMinus
                    type='button'
                    onClick={() => increment(comic)}
                  >
                    <Styled.IconPlus />
                  </Styled.ButtonPlusMinus>
                  {comic.amount}
                  <Styled.ButtonPlusMinus
                    type='button'
                    onClick={() => decrement(comic)}
                  >
                    <Styled.IconMinus />
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
              <Styled.CuponInput type='text' onChange={(e) => NeoApp(e)} />
            </Styled.CuponWrapper>
            <Styled.Purchase>
              <Styled.PurchaseButton type='submit'>
                Finalizar Compra
              </Styled.PurchaseButton>
            </Styled.Purchase>
            <Styled.Subtotal>
              <strong>SUBTOTAL:</strong> $ {total.toFixed(3).slice(0, -1)}
            </Styled.Subtotal>
          </Styled.CartCheckout>
        </Styled.Wrapper>
      </SectionContainer>
      <Footer />
    </Styled.Container>
  );
}
