import styled, { css } from 'styled-components';
import { ImgComic } from '../Home/styles';
import { Cart } from '../../components/Menu/styles';

export const Container = styled.section`
  ${({ theme }) => css`
  background-size: 100%;
    height: 100%
    min-height: 100vh;


  `}
`;

export const Background = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  backdrop-filter: blur(5px);
`;

export const ReturnHome = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const OneComicWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: ${theme.spacings.large};

    ${ImgComic} {
      width: 375px;
      height: 550px;
    }

    @media (max-width: 990px) {
      flex-direction: column;
      align-content: center;
      align-items: center;
    }

    @media ${theme.media.lteSmall} {
      ${ImgComic} {
        width: 100%;
        height: 100%;
      }
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    width: 400px;
    margin-left: ${theme.spacings.xhuge};
    h1 {
      font-size: ${theme.font.sizes.medium};
    }

    @media (max-width: 990px) {
      padding-top: 3rem;
      margin: 0;
      text-align: center;
      width: 70%;
    }

    @media ${theme.media.lteSmall} {
      width: 100%;
    }
  `}
`;

export const DescriptionComic = styled.p`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;

    @media (max-width: 990px) {
      width: 100%;
    }
  `}
`;
export const AuthorsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

export const AuthorsDescription = styled.p`
  font-size: 14px;
  margin: 1.4rem 1rem;
  text-transform: capitalize;
`;

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 990px) {
      flex-direction: column;
    }
  `}
`;

export const PriceComic = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};

    @media (max-width: 990px) {
      margin-bottom: 2rem;
    }
  `}
`;
export const AddCart = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    background-color: black;
    padding: 10px 30px;
    border-radius: 5px;

    ${Cart} {
      width: auto;
      margin-right: 10px;
    }
  `}
`;
