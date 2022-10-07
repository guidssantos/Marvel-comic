import styled, { css } from 'styled-components';

export const Container = styled.header`
  ${({ theme }) => css`
    background: white;
  `}
`;

export const HeadingComic = styled.h1`
  ${({ theme }) => css`
    margin-bottom: 20px;
  `}
`;

export const ContainerComic = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `}
`;

export const BackgroundComic = styled.a`
  ${({ theme }) => css`
    background-color: black;
    border-radius: 10px;
    margin-bottom: 30px;
    width: 200px;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 1);
    cursor: pointer;

    @media (max-width: 460px) {
      width: 100%;
    }
  `}
`;

export const ImgComic = styled.img`
  ${({ theme }) => css`
    width: 100%;
    border-radius: 10px;
  `}
`;

export const TextComic = styled.p`
  ${({ theme }) => css`
    color: white;
    text-align: center;
    padding: 0 5px;
  `}
`;
