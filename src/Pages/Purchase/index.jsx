import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import * as CartActions from '../../store/modules/cart/actions';

import { SectionContainer } from '../../components/SectionContainer';
import { Container } from '../CartComic/styles';
import * as Styled from './styles';
import { Loading } from '../../components/Loading';

export function Purchase() {
  const cart = useSelector((state) =>
    state.cart.map((comic) => ({
      ...comic,
    }))
  );
  const dispatch = useDispatch();

  const navigate = useNavigate();
  setTimeout(() => {
    navigate('/');
  }, 2000);

  return (
    <Container>
      <Navbar />
      <SectionContainer>
        {cart.map((comic) => (
          <>{dispatch(CartActions.removeFromCart(comic.id))}</>
        ))}
        <Styled.Heading>COMPRA REALIZADA COM SUCESSO!</Styled.Heading>
      </SectionContainer>
      <Footer />
    </Container>
  );
}
