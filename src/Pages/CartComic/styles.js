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
  `}
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CartWrapper = styled.form`
  ${({ theme }) => css`
    width: 100%;
  `}
`;

export const CartTable = styled.table`
  ${({ theme }) => css`
    width: 100%;
    text-align: center;
  `}
`;

export const CartThead = styled.thead`
  ${({ theme }) => css``}
`;

export const CartTr = styled.tr`
  ${({ theme }) => css``}
`;

export const CartTitle = styled.th`
  ${({ theme }) => css`
    padding-bottom: 20px;
  `}
`;

export const CartTbody = styled.tbody`
  ${({ theme }) => css``}
`;

export const ProductCart = styled.td`
  ${({ theme }) => css`
    min-width: 60px;
    max-width: 120px;
    width: 120px;
    text-align: center;
  `}
`;

export const CartImg = styled.img`
  width: 100%;
`;

export const ProductName = styled.a`
  ${({ theme }) => css`
    color: black;
  `}
`;

export const ProductPrice = styled.td``;

export const ProductAmount = styled.td``;

export const ProductTotal = styled.td``;

export const CartCheckout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const CuponWrapper = styled.form`
  margin-bottom: 2rem;
`;

export const CuponTitle = styled.p`
  color: black;
  padding: 0;
`;

export const CuponInput = styled.input``;

export const Purchase = styled.div``;

export const PurchaseButton = styled.button`
  cursor: pointer;
  color: white;
  background-color: black;
  padding: 5px;
  border-radius: 5px;
`;
