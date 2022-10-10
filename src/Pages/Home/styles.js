import styled, { css } from 'styled-components';
import { SectionContainer } from '../../components/SectionContainer';

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

export const BackgroundComic = styled.div`
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

    @media (max-width: 460px) {
      width: 100%;
    }
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
    padding: 0 5px;
  `}
`;

export const HeadingAllComics = styled.h1``;
