import styled, { css } from 'styled-components';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.section`
  ${({ theme }) => css`
    background-color: white;

    ${SectionContainer} {
      min-height: 85vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
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
  ${({ theme }) => css``}
`;

export const CartWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-around;

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

export const CartTbody = styled.div`
  ${({ theme }) => css``}
`;

export const CartImg = styled.img`
  width: 100%;
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

export const CartCheckout = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
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
