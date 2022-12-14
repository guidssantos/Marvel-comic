import styled, { css } from 'styled-components';
import background from '../../assets/backgroud-menu/background_section_1.jpg';

export const Container = styled.section`
  ${({ theme }) => css`
    background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
      url(${background});
    min-height: 50vh;
    display: flex;
    align-items: center;
    position: relative;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    @media ${theme.media.lteSmall} {
      background-size: 200% 100%;
      background-repeat: no-repeat;
      background-attachment: unset;
    }
  `}
`;
