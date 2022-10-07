import styled, { css } from 'styled-components';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: #383838;
    min-height: 100vh;
  `}
`;
