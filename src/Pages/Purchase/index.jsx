import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer';
import { Navbar } from '../../components/Navbar/Navbar';
import * as CartActions from '../../store/modules/cart/actions';

import { SectionContainer } from '../../components/SectionContainer';
import { Container } from '../CartComic/styles';
import * as Styled from './styles';

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
  }, 3000);

  const Remove = (comic) => {
    dispatch(CartActions.removeFromCart(comic.id));
  };
  return (
    <Container>
      <Navbar />
      <SectionContainer>
        {cart.map((comic) => Remove(comic))}
        <Styled.Heading>COMPRA REALIZADA COM SUCESSO!</Styled.Heading>
      </SectionContainer>
      <Footer />
    </Container>
  );
}
