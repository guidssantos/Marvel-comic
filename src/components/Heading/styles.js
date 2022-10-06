import styled, { css } from 'styled-components';

export const Container = styled.h1`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xhuge};
    font-weight: 600;
    color: ${theme.colors.white};
  `}
`;
