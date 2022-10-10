import P from 'prop-types';
import * as Styled from './styles';

export function Pagination({ pages, setCurrentPage }) {
  return (
    <Styled.Container>
      {Array.from(Array(pages), (comics, index) => (
        <Styled.ButtonPagination
          key={index}
          type='button'
          value={index}
          onClick={(e) => setCurrentPage(Number(e.target.value))}
        >
          {index + 1}
        </Styled.ButtonPagination>
      ))}
    </Styled.Container>
  );
}

Pagination.propTypes = {
  pages: P.number.isRequired,
  setCurrentPage: P.func.isRequired,
};
