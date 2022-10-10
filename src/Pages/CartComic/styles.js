import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
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
    margin-bottom: 20px;

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
    width: 100px;

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
  ${({ theme }) => css`
    width: 70px;
    height: 100px;
    @media ${theme.media.lteSmall} {
      width: 100%;
      height: 100%;
    }
  `}
`;

export const ProductName = styled.a`
  ${({ theme }) => css`
    font-size: 12px;
    font-weight: bold;
    color: black;
    word-wrap: break-word;
    display: inline-block;
  `}
`;

export const ProductValue = styled.div`
  ${({ theme }) => css`
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`;

export const IconPlus = styled(AiOutlinePlusCircle)`
  width: 20px;
  height: 20px;
`;

export const IconMinus = styled(AiOutlineMinusCircle)`
  width: 20px;
  height: 20px;
`;

export const ButtonPlusMinus = styled.button`
  background-color: white;
  width: 20px;
  height: 20px;
  margin: 10px;
  cursor: pointer;
`;

export const CartCheckout = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem 10rem;
    @media ${theme.media.lteSmall} {
      flex-direction: column-reverse;
      margin: 0;
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

export const Subtotal = styled.div`
  padding: 20px;
`;

export const PurchaseButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: #383838;
  padding: 10px;
  border-radius: 5px;
`;
