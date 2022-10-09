import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: #eeeef3;

    ${SectionContainer} {
      min-height: 85vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    h1 {
      text-align: left;
      margin-bottom: 4rem;
      color: ${theme.colors.primary};
    }
    @media ${theme.media.lteSmall} {
      h1 {
        font-size: 3rem;
        text-align: center;
      }
    }
  `}
`;

export const Wrapper = styled.article`
  ${({ theme }) => css`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;

    padding: 20px;
    width: 80%;
    background-color: white;
  `}
`;

export const CartWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-evenly;
    margin-top: 30px;

    &:first-child {
      margin-top: 0;
    }

    @media ${theme.media.lteSmall} {
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const ProductWrapper = styled.div`
  ${({ theme }) => css`
    width: 70px;

    p {
      color: black;
    }

    @media ${theme.media.lteSmall} {
      padding-bottom: 15px;
      width: 80%;
    }
  `}
`;

export const ProductTitle = styled.p`
  ${({ theme }) => css`
    padding-bottom: 20px;
    font-size: 18px;
    margin: 0;
    font-weight: bold;

    @media ${theme.media.lteSmall} {
      padding-bottom: 5px;
    }
  `}
`;

export const OtherTitle = styled.p`
  ${({ theme }) => css`
    padding-bottom: 6rem;
    font-size: 18px;
    margin: 0;
    font-weight: bold;

    @media ${theme.media.lteSmall} {
      padding-bottom: 5px;
    }
  `}
`;

export const CartImg = styled.img`
  width: 70px;
  height: 100px;
`;

export const ProductName = styled.a`
  ${({ theme }) => css`
    color: black;
  `}
`;

export const ProductValue = styled.p`
  ${({ theme }) => css`
    margin: 0;
  `}
`;

export const ButtonPlusMinus = styled.button`
  background-color: white;
  width: 20px;
  cursor: pointer;
`;

export const CartCheckout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin: 1rem 10rem;
    @media ${theme.media.lteSmall} {
      align-items: center;
    }
  `}
`;

export const CuponWrapper = styled.div`
  margin: 2rem 0;
`;

export const CuponTitle = styled.p`
  ${({ theme }) => css`
    color: black;
    font-weight: bold;
    margin: 0;

    @media ${theme.media.lteSmall} {
      text-align: center;
    }
  `}
`;

export const CuponInput = styled.input``;

export const Purchase = styled.div``;

export const PurchaseButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: #383838;
  padding: 10px;
  border-radius: 5px;
`;
