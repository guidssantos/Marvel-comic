import styled, { css } from 'styled-components';
import { ImgComic } from '../Home/styles';
import { Cart } from '../../components/Menu/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    height: 100%;
    background-size: 110%;
    background-repeat: no-repeat;
    min-height: 90vh;
    animation: movimention 15s ease infinite;

    @keyframes movimention {
      0% {
        background-position: 0%;
      }
      50% {
        background-position: 100%;
      }
      100% {
        background-position: 0%;
      }
    }

    @media ${theme.media.lteSmall} {
      & {
        background-size: 300%;
      }
    }
  `}
`;

export const Background = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8));
  backdrop-filter: blur(5px);
  min-height: 100vh;
`;

export const ReturnHome = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${theme.colors.white};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}
`;

export const OneComicWrapper = styled.main`
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
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 2rem;

    @media ${theme.media.lteSmall} {
      justify-content: center;
    }
  `}
`;

export const AuthorsDescription = styled.p`
  font-size: 14px;
  margin: 1.4rem 1rem;
  text-transform: capitalize;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 990px) {
    flex-direction: column;
  }
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
export const AddCart = styled.button`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.white};
    background-color: ${theme.colors.primary};
    padding: 15px 30px;
    border-radius: 5px;
    transition: ease-in-out all 300ms;
    cursor: pointer;

    ${Cart} {
      width: auto;
      margin-right: 10px;
    }

    &:hover {
      background-color: transparent;
      border: 1px solid ${theme.colors.primary};
      transform: scale(105%);
    }

    &:active {
      transform: scale(90%);
    }
  `}
`;
