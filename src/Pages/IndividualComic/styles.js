import styled, { css } from 'styled-components';
import { ImgComic } from '../Home/styles';
import { Cart } from '../../components/Menu/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: #383838;
    min-height: 100vh;
  `}
`;

export const ReturnHome = styled.a`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`;

export const OneComicWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${theme.spacings.large};

    ${ImgComic} {
      width: 400px;
    }
  `}
`;

export const TextWrapper = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xhuge};
    h1 {
      font-size: ${theme.font.sizes.medium};
    }
  `}
`;

export const DescriptionComic = styled.p`
  ${({ theme }) => css`
    width: 400px;
  `}
`;

export const PriceWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const PriceComic = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
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
