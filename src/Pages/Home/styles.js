import styled, { css } from 'styled-components';

export const Container = styled.section`
  background: white;
`;

export const HeadingComic = styled.h2`
  ${({ theme }) => css`
    margin-bottom: 20px;
    position: relative;
    color: ${theme.colors.primary};
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${theme.colors.primary};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }

    @media ${theme.media.lteSmall} {
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const ContainerComic = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media (max-width: 480px) {
      justify-content: center;
    }
  `}
`;

export const BackgroundComic = styled.main`
  ${({ theme }) => css`
    background-color: black;
    border-radius: 10px;
    margin-bottom: 30px;
    width: 210px;
    height: 400px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
    cursor: pointer;
    transition: all ease-in-out 300ms;
    overflow: hidden;
  `}
`;

export const ImgComic = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all ease-in-out 300ms;
    overflow: hidden;

    &:hover {
      height: 80%;
    }
  `}
`;

export const TextComic = styled.p`
  ${({ theme }) => css`
    position: relative;
    color: white;
    text-align: center;
    margin: 0;
    padding: 10px 5px;
  `}
`;

export const HeadingAllComics = styled.h2`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.primary};
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
      background-color: ${theme.colors.primary};
      transform-origin: bottom right;
      transition: transform 0.25s ease-out;
    }

    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
  `}
`;
