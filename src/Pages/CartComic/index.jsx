import P from 'prop-types';
import * as Styled from './styles';

export function CartComic({ children }) {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
}

CartComic.propTypes = {
  children: P.node.isRequired,
};
