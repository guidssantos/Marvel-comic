import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  `}
`;

export const ButtonPagination = styled.button`
  ${({ theme }) => css`
    width: 30px;
    height: 30px;
    background-color: black;
    margin-right: 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }

    @media ${theme.media.lteMedium} {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
        margin-right: 10px;
      }
    }
  `}
`;
