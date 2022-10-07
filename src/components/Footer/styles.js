import styled, { css } from 'styled-components';

export const Container = styled.footer`
  ${({ theme }) => css`
    background-color: black;
  `}
`;

export const Copyright = styled.p`
  color: white;
  text-align: center;
  padding: 2.4rem 0;
  margin: 0;
`;
