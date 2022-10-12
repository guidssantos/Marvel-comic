import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const ButtonPagination = styled.button`
  ${({ theme }) => css`
    width: 40px;
    height: 40px;
    background-color: black;
    margin-right: 10px;
    border-radius: 5px;
    color: white;
    cursor: pointer;
    transition: ease-in-out all 300ms;

    &:last-child {
      margin-right: 0;
    }

    &:hover,
    :focus {
      background-color: white;
      color: black;
      border: 1px solid black;
    }

    &:active {
      transform: scale(80%);
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
