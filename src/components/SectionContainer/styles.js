import styled, { css } from 'styled-components';

export const Container = styled.article`
  ${({ theme }) => css`
    max-width: 120rem;
    margin: 0 auto;
    padding: ${theme.spacings.large};
    color: yellow;
  `}
`;