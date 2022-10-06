import styled, { css } from 'styled-components';
import background from '../../assets/backgroud-menu/background_section_1.jpg';

export const Container = styled.section`
  ${({ theme }) => css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${background});
    background-size: cover;
    min-height: 40vh;
    display: flex;
    align-items: center;
  `}
`;