import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Heading = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};

  @media {theme.media.lteSmall} {
    font-size: {theme.font.sizes.medium}
    text-align: center;
  }
  `}
`;
