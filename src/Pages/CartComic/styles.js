import {
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiOutlineCloseCircle,
} from 'react-icons/ai';
import styled, { css } from 'styled-components';

import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.section`
  background-color: #eeeef3;

  ${SectionContainer} {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.article`
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  padding: 20px;
  width: 80%;
  background-color: white;
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

    @media ${theme.media.lteMedium} {
      margin: 0;
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

    @media ${theme.media.lteMedium} {
      width: 200px;
      margin-bottom: ${theme.spacings.small};
    }

    @media ${theme.media.lteSmall} {
      padding-bottom: ${theme.spacings.small};
      margin: 0;
      width: 80%;

      &:last-child {
        padding: 0;
      }
    }
  `}
`;

export const ProductTitle = styled.p`
  ${({ theme }) => css`
    padding-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.medium};
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
    font-size: ${theme.font.sizes.medium};
    margin: 0;
    font-weight: bold;

    @media ${theme.media.lteMedium} {
      padding-bottom: 1rem;
    }

    @media ${theme.media.lteSmall} {
      padding-bottom: 5px;
    }
  `}
`;

export const CartImg = styled.img`
  width: 100%;
`;

export const ProductName = styled.div`
  font-size: 12px;
  font-weight: bold;

  a {
    color: black;
  }
`;

export const ProductValue = styled.div`
  margin: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const IconPlus = styled(AiOutlinePlusCircle)`
  width: 20px;
  height: 20px;
`;

export const IconMinus = styled(AiOutlineMinusCircle)`
  width: 20px;
  height: 20px;
`;
export const IconRemove = styled(AiOutlineCloseCircle)`
  cursor: pointer;

  width: 20px;
  height: 20px;
`;

export const ButtonRemove = styled.button`
  ${({ theme }) => css`
    background-color: white;
    position: relative;
    top: 9rem;

    &:active {
      transform: scale(90%);
    }

    @media ${theme.media.lteMedium} {
      top: 0;
    }
  `}
`;

export const ButtonPlusMinus = styled.button`
  background-color: white;
  cursor: pointer;
`;

export const CartCheckout = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin: 1rem 10rem;
    @media ${theme.media.lteMedium} {
      flex-direction: column-reverse;
      margin: 0;
    }
  `}
`;

export const CuponWrapper = styled.div`
  ${({ theme }) => css`
    margin: 2rem 0;
    display: flex;
    flex-direction: column;

    @media ${theme.media.lteMedium} {
      align-items: center;
    }
  `}
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

export const CuponInput = styled.input`
  ${({ theme }) => css`
    border: 1px solid rgb(56, 56, 56, 0.7);
    padding: 10px;
    border-radius: ${theme.spacings.xsmall};
    transition: ease-in-out all 300ms;

    &:focus {
      outline: none;
    }

    &:hover {
      background-color: #eeeef3;
    }

    @media ${theme.media.lteSmall} {
      width: 100%;
    }
  `}
`;

export const Subtotal = styled.div`
  ${({ theme }) => css`
    display: flex;
    padding: 20px;
    @media ${theme.media.lteSmall} {
      flex-direction: column;
      align-items: center;
    }
  `}
`;

export const PurchaseButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    color: white;
    background-color: ${theme.colors.primary};
    padding: ${theme.spacings.small} ${theme.spacings.large};
    border-radius: 5px;
    transition: ease-in-out all 300ms;
    font-family: 'Roboto Condensed', sans-serif;

    &:hover {
      transform: scale(105%);
    }
    &:active {
      transform: scale(90%);
    }
  `}
`;
