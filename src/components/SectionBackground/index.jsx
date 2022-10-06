import P from 'prop-types';
import * as Styled from './styles';

export function SectionBackground({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

SectionBackground.propTypes = {
  children: P.node.isRequired,
};
