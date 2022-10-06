import P from 'prop-types';
import * as Styled from './styles';

export function Heading({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

Heading.propTypes = {
  children: P.node.isRequired,
};
